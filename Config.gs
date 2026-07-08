/**************************************************
  Google Form Response To Discord
  Author: Mourya Abhay Amarjeet (@mouryaabhay) aka Dynastic Creator
**************************************************/

/* ---------- Configurations --------- */

// Webhook URL for sending messages to a Discord forum channel (Do not delete or replace "?wait=true")
// Example:
// const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/000000000000000000/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?wait=true"
const DISCORD_WEBHOOK_URL = "YOUR_WEBHOOK_URL?wait=true";

// Tag IDs to apply when creating a forum post (leave empty array if not using forum tags)
const DISCORD_FORUM_TAGS = [
    "TAG_ID_1",
    "TAG_ID_2"
];

// Position of the question in the Google Form where applicants provide their Discord user ID
const userIDQuestion = 3;

// Position of the question in the Google Form where applicants provide their Discord username
const usernameQuestion = 2;

// Part of the thread name
const discordThreadNamePart = " Submitted a Form";

// Set to "start" for prefix, "end" for suffix, or null to disable
const threadNamePosition = "start";

// Message content to accompany the embed, mentioning the applicant
// Available placeholders:
// - {discordUserID}: Discord user ID of the applicant
const messageContent = "<@{discordUserID}> submitted a form!";

// A default message for questions that have no response
const noAnswerMessage = "No answer provided!";

// Set to true to skip empty answers, false to include them
const skipEmptyResponses = false;

/* ---------- Embed Appearance ---------- */

// Template for the main embed's description (top of the box).
// Available placeholders:
// - {formTitle}: Title of the Google Form
const embedDescriptionTemplate = "### {formTitle}";

// Text prepended to each answer's value inside the embed.
// Uses Discord markdown — e.g. ">>> " renders as a blockquote. Leave as "" for no styling.
const embedFieldValuePrefix = ">>> ";

// Embed colors (hex), cycled through in order for each embed/section sent
const EMBED_COLORS = [
  0x1abc9c, 0x2ecc71, 0x3498db, 0x9b59b6,
  0xe91e63, 0xe67e22, 0xf1c40f, 0xe74c3c,
  0x95a5a6, 0x34495e, 0x16a085, 0x27ae60,
  0x2980b9, 0x8e44ad, 0xc0392b, 0xd35400,
  0xf39c12, 0x7f8c8d, 0x2c3e50, 0xbdc3c7
];
