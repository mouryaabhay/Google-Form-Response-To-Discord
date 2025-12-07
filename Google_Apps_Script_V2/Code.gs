/**************************************************
    Google Form Response To Discord
    Auto Forum / Normal Channel Detection Version
    Author: Mourya Abhay Amarjeet (Dynastic Creator)
**************************************************/

let discordThreadId = "";
let discordThreadName = "";
let webhookSupportsForum = true;   // AUTO-DETECTED on first send
let forumDetectionDone = false;

/* ---------- Discord Limits ---------- */
const DISCORD_LIMITS = {
  THREAD_NAME: 100,
  DESCRIPTION: 4096,
  FIELD_NAME: 256,
  FIELD_VALUE: 1024
};

/* ---------- Colors (20 cyclic embed colors) ---------- */
const EMBED_COLORS = [
  0x1abc9c, 0x2ecc71, 0x3498db, 0x9b59b6,
  0xe91e63, 0xe67e22, 0xf1c40f, 0xe74c3c,
  0x95a5a6, 0x34495e, 0x16a085, 0x27ae60,
  0x2980b9, 0x8e44ad, 0xc0392b, 0xd35400,
  0xf39c12, 0x7f8c8d, 0x2c3e50, 0xbdc3c7
];

let embedColorIndex = 0;
function getNextEmbedColor() {
  const color = EMBED_COLORS[embedColorIndex % EMBED_COLORS.length];
  embedColorIndex++;
  return color;
}

/* ---------- Main Submission Handler ---------- */
function onSubmit(event) {
  const form = FormApp.getActiveForm();
  const latestResponse = form.getResponses().pop();
  const allItems = form.getItems();

  const responses = mapResponses(latestResponse);
  const firstPageQuestions = getFirstPageQuestions(form);

  discordMessageContent = createDiscordMessageContent(responses, firstPageQuestions);
  discordThreadName = createThreadName(responses, firstPageQuestions);

  const mainEmbedFields = createEmbedFields(firstPageQuestions, responses);

  // FIRST SEND triggers auto forum detect and guarantees delivery:
  sendEmbedToDiscordWithFallback(mainEmbedFields);

  // Now send all sections normally
  processSections(allItems, responses);
}

/* ---------- Map responses ---------- */
function mapResponses(latestResponse) {
  return new Map(
    latestResponse.getItemResponses().map(item => [
      item.getItem().getTitle(),
      item.getResponse()
    ])
  );
}

/* ---------- Create Discord message (with Discord User ID) ---------- */
function createDiscordMessageContent(responses, firstPageQuestions) {
  const userID = responses.get(firstPageQuestions[userIDQuestion - 1]?.getTitle()) || "";
  console.log(`Discord User ID: ${userID}`);
  return messageContent.replace("{discordUserID}", userID);
}

/* ---------- Get first page questions ---------- */
function getFirstPageQuestions(form) {
  const items = form.getItems();
  const idx = items.findIndex(i => i.getType() === FormApp.ItemType.PAGE_BREAK);
  return items.slice(0, idx !== -1 ? idx : undefined);
}

/* ---------- Thread Name Builder ---------- */
function createThreadName(responses, firstPageQuestions) {
  const username = responses.get(firstPageQuestions[usernameQuestion - 1]?.getTitle()) || "";
  console.log(`Discord Username: ${username}`);

  if (!threadNamePosition) return "";

  let name;
  switch (threadNamePosition) {
    case "start": name = `${username}${discordThreadNamePart}`; break;
    case "end": name = `${discordThreadNamePart}${username}`; break;
    default: name = discordThreadNamePart;
  }
  return truncate(name, DISCORD_LIMITS.THREAD_NAME);
}

/* ---------- Embed Field Builder ---------- */
function createEmbedFields(items, responses) {
  return items.reduce((fields, question) => {
    let response = formatResponse(question, responses);

    if (!response || (skipEmptyResponses && response === noAnswerMessage)) return fields;

    fields.push({
      name: truncate(question.getTitle(), DISCORD_LIMITS.FIELD_NAME),
      value: truncate(`>>> ${response}`, DISCORD_LIMITS.FIELD_VALUE),
      inline: false
    });

    return fields;
  }, []);
}

/* ---------- Format responses ---------- */
function formatResponse(question, responses) {
  let response = responses.get(question.getTitle()) || noAnswerMessage;

  if (question.getType() === FormApp.ItemType.FILE_UPLOAD) return formatFileResponse(response);
  if (question.getType() === FormApp.ItemType.TIME) return formatTime(response);
  if (response instanceof Date) return formatDateTime(response);

  response = String(response)
    .replace(/,(\S)/g, ", $1")
    .replace(/\n{2,}/g, "\n");

  return response;
}

function formatFileResponse(response) {
  if (!Array.isArray(response) || response.length === 0) return noAnswerMessage;
  return response.map(f =>
    /^https?:\/\//.test(f) ? f : `<https://drive.google.com/uc?id=${f}>`
  ).join("\n");
}

function formatTime(t) {
  const [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${ampm}`;
}

function formatDateTime(date) {
  const unix = Math.floor(date.getTime() / 1000);
  return `<t:${unix}:f>`;
}

/* ============================================================
   SEND WITH AUTO-FORUM DETECTION + GUARANTEED FIRST SEND
   ============================================================ */

/**
 * Send embed payload, auto-detect forum support. If the first
 * forum-style send fails, resend as a normal channel message
 * so the first embed is always delivered.
 */
function sendEmbedToDiscordWithFallback(embedFields) {
  const formTitle = FormApp.getActiveForm().getTitle();

  // Build forum-style payload (may include thread_name and tags)
  const forumPayload = {
    content: discordMessageContent,
    embeds: [{
      color: getNextEmbedColor(),
      description: truncate(`### ${formTitle}`, DISCORD_LIMITS.DESCRIPTION),
      fields: embedFields
    }],
    components: []
  };

  if (Array.isArray(DISCORD_FORUM_TAGS) && DISCORD_FORUM_TAGS.length && webhookSupportsForum) {
    forumPayload.applied_tags = DISCORD_FORUM_TAGS;
  }
  if (webhookSupportsForum && !discordThreadId && discordThreadName && discordThreadName.trim() !== "") {
    forumPayload.thread_name = discordThreadName;
  }

  // If we already know webhook is normal, just send normal payload
  if (!webhookSupportsForum && forumDetectionDone) {
    const normalPayload = {
      content: discordMessageContent,
      embeds: forumPayload.embeds,
      components: []
    };
    const normalResp = sendToDiscord(normalPayload);
    logSendResult(normalResp, "normal (known)");
    return;
  }

  // Try sending forum-style first (this may fail if webhook isn't forum)
  const firstRespText = sendToDiscord(forumPayload);
  const firstJson = tryParseJson(firstRespText);

  // If the response indicates forum is unsupported, switch mode and resend as normal
  if (indicatesNotForum(firstJson)) {
    webhookSupportsForum = false;
    forumDetectionDone = true;
    console.warn("⚠️ Webhook is NOT a forum channel. Switching to NORMAL MODE and resending first embed.");

    // Remove forum-only properties and resend as normal message
    const normalPayload = {
      content: discordMessageContent,
      embeds: forumPayload.embeds,
      components: []
    };
    const secondRespText = sendToDiscord(normalPayload);
    logSendResult(secondRespText, "normal (resend after forum-fail)");
    return;
  }

  // If forum-style send was successful, record thread ID if present
  if (firstJson && firstJson.channel_id) {
    discordThreadId = firstJson.channel_id;
  } else if (firstJson && firstJson.id && !discordThreadId) {
    // sometimes response might return id instead of channel_id
    discordThreadId = firstJson.id;
  }

  forumDetectionDone = true; // detection completed
  logSendResult(firstRespText, "forum (first send)");
}

/* ---------- Helpers for detection & logging ---------- */
function tryParseJson(text) {
  try { return JSON.parse(text); } catch (e) { return null; }
}

function indicatesNotForum(json) {
  if (!json) return false;
  // Known errors which indicate non-forum webhook or missing thread params
  const errCode = json.code;
  if (errCode === 220003 || errCode === 220001) return true;
  // If Discord specifically complains about applied_tags or thread_name it's also not forum
  if (json.message && /forum|thread_name|applied_tags/i.test(json.message)) return true;
  return false;
}

function logSendResult(responseText, tag) {
  const j = tryParseJson(responseText);
  if (j && j.code) {
    console.warn(`Discord returned error on ${tag}:`, j);
  } else {
    console.log(`Sent (${tag}) — Discord response parsed.`);
  }
}

/* ---------- Discord Sender (single low-level caller) ---------- */
function sendToDiscord(payload) {
  try {
    const url = `${DISCORD_WEBHOOK_URL}${discordThreadId ? `&thread_id=${discordThreadId}` : ""}`;
    const res = UrlFetchApp.fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });
    return res.getContentText();
  } catch (e) {
    console.error("Error sending to Discord:", e);
    return "{}";
  }
}

/* ---------- Process all sections ---------- */
function processSections(allItems, responses) {
  let sectionTitle = "";
  let sectionItems = [];

  allItems.forEach(item => {
    if (item.getType() === FormApp.ItemType.PAGE_BREAK) {
      if (sectionTitle) sendSection(sectionTitle, sectionItems, responses);
      sectionTitle = item.getTitle();
      sectionItems = [];
    } else {
      sectionItems.push(item);
    }
  });

  if (sectionTitle) sendSection(sectionTitle, sectionItems, responses);
}

/* ---------- Send section embed ---------- */
function sendSection(title, items, responses) {
  const fields = createEmbedFields(items, responses);
  if (!fields.length) return console.log(`Skipped empty section: ${title}`);

  // Build payload
  const payload = {
    embeds: [{
      color: getNextEmbedColor(),
      title: title,
      fields: fields
    }],
    components: []
  };

  // Only include applied_tags if webhook supports forum and tags are present
  if (webhookSupportsForum && Array.isArray(DISCORD_FORUM_TAGS) && DISCORD_FORUM_TAGS.length) {
    payload.applied_tags = DISCORD_FORUM_TAGS;
  }

  // If thread was created (forum success), subsequent sends should include &thread_id param via sendToDiscord's URL
  const respText = sendToDiscord(payload);
  const json = tryParseJson(respText);
  if (json && json.code) {
    console.warn("Discord returned error for section send:", json);
    // If first section send shows a forum problem after detection, turn off forum mode to avoid further errors
    if (!forumDetectionDone && indicatesNotForum(json)) {
      webhookSupportsForum = false;
      forumDetectionDone = true;
    }
  }

  console.log(`Sent section embed: ${title}`);
}

/* ---------- Utility: truncate text ---------- */
function truncate(text, max, suffix = "...") {
  return text.length > max ? text.slice(0, max - suffix.length) + suffix : text;
}
