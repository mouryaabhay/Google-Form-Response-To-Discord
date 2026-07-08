<h1 align="center">Google Form Responses to Discord</h1>
<p align="center">
  Automatically send Google Form submissions to Discord as rich embeds — with forum channel support, thread naming, and auto-tagging.
</p>
<p align="center">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=mouryaabhay.Google-Form-Response-To-Discord" alt="Views">
  <img src="https://img.shields.io/github/stars/mouryaabhay/Google-Form-Response-To-Discord?style=flat" alt="Stars">
  <img src="https://img.shields.io/github/forks/mouryaabhay/Google-Form-Response-To-Discord?style=flat" alt="Forks">
  <img src="https://img.shields.io/github/license/mouryaabhay/Google-Form-Response-To-Discord?style=flat" alt="License">
</p>

---

## ✨ Features

- Sends form submissions to Discord as rich embeds
- Auto-detects forum vs. normal channel webhooks — no manual configuration needed
- Creates a Discord forum thread per submission with a custom name and tags
- Handles multi-section forms by sending one embed per section
- Supports all Google Form response types (short/long text, multiple choice, checkbox, date, time, file upload)
- Auto-truncates content to fit Discord's embed limits
- Mentions the submitter via their Discord user ID

---

## 📋 Prerequisites

Before starting, make sure you have:

- A Google Form (you'll add a **Discord Username** and **Discord User ID** field to it)
- A Discord server where you have the **Manage Webhooks** permission
- No coding experience required — just copy, paste, and configure

---

## 🚀 Setup Guide

### Step 1 — Create Your Google Form

1. Go to [form.new](https://form.new) to create a new Google Form
2. Add a **Discord Username** field — recommended as **question #2**
3. Add a **Discord User ID** field — recommended as **question #3**

> [!TIP]
> Keep question titles on a single line. Multi-line titles render unevenly inside Discord embeds.

---

### Step 2 — Open the Script Editor

In your Google Form, click the **⋮** menu (top right) → **Script editor**

---

### Step 3 — Add the Script Files

**Code.gs** (the existing file)
1. Copy the full contents of [`Code.gs`](Google_Apps_Script_V2/Code.gs) from this repo
2. In the Script Editor, open the existing `Code.gs` file, delete everything, and paste in the copied code
3. Save with **Ctrl+S** / **Cmd+S**

**Config.gs** (new file)
1. Copy the full contents of [`Config.gs`](Google_Apps_Script_V2/Config.gs) from this repo
2. In the Script Editor, click **+** next to **Files** → **Script** → name it `Config`
3. Delete the placeholder code, paste in the copied code, and save

---

### Step 4 — Create a Discord Webhook

1. Open the Discord channel where you want form responses to appear
2. Go to **Edit Channel → Integrations → Webhooks → New Webhook**
3. Give it a name and icon (optional), then click **Copy Webhook URL**
4. Keep this URL — you'll paste it into `Config.gs` in the next step

> [!TIP]
> For best results, use a **Forum channel** webhook. The script will automatically create a new thread for each form submission.

---

### Step 5 — Configure Config.gs

Open `Config.gs` in the Script Editor and fill in your values. See the [Configuration Reference](#️-configuration-reference) table below for full details.

**At minimum**, replace `YOUR_WEBHOOK_URL` with your Discord webhook URL.  
Make sure the URL ends with `?wait=true` — do not remove it.

---

### Step 6 — Set Up the Trigger

1. In the Script Editor, click the **Triggers** icon (alarm clock) in the left sidebar
2. Click **+ Add Trigger** (bottom right corner)
3. Configure it as shown in the image below, then click **Save**

<a>
  <img alt="Trigger Configuration" src="https://github.com/mouryaabhay/Google_Form_Response_To_Discord/assets/158826825/3a9ec28e-8878-48fa-9282-d466e8d54529">
</a>

> [!NOTE]
> On saving the trigger, Google will ask you to authorize the script. Click **Review Permissions → Allow**. If you see a "Google hasn't verified this app" warning, click **Advanced → Go to [your script name] (unsafe)** — this is normal for personal scripts.

---

### Step 7 — Test the Integration

1. Submit a test response to your Google Form
2. Back in the Script Editor, confirm `onSubmit` is selected in the function dropdown (next to the **▷ Run** button), then click **Run**
3. Open the **Execution log** (**View → Logs**) to check for any errors
4. Verify the message appears in your Discord channel

---

## ⚙️ Configuration Reference

Listed in the order each one takes effect in the resulting Discord post — from the webhook you send to, down through the thread title, message text, and finally the embed itself (heading, colors, then fields).

| Variable | Type | Default | Description |
|---|---|---|---|
| `DISCORD_WEBHOOK_URL` | `string` | — | Your Discord webhook URL. Must end with `?wait=true`. |
| `userIdQuestionNumber` | `number` | `3` | Position of the Discord user ID question in your form (counting from 1). |
| `usernameQuestionNumber` | `number` | `2` | Position of the Discord username question in your form (counting from 1). |
| `threadNameStaticText` | `string` | `" Submitted a Form"` | Static text combined with the username to build the forum thread's title. |
| `threadNamePosition` | `string \| null` | `"start"` | Where the username sits relative to the static text: `"start"`, `"end"`, or `null` to use only the static text. |
| `DISCORD_FORUM_TAGS` | `string[]` | `[]` | Forum tag IDs to apply to new posts. Leave as `[]` if not using forum tags. |
| `submissionMessageContent` | `string` | `"<@{discordUserID}> submitted a form!"` | Text sent above the embed. Wrap the placeholder as `<@{discordUserID}>` to actually mention (ping) the submitter — the placeholder alone just prints the raw ID as text. |
| `embedDescriptionTemplate` | `string` | `"### {formTitle}"` | Text shown at the top of the main embed. Use `{formTitle}` for the form's title. |
| `EMBED_COLORS` | `number[]` | 20 preset hex colors | One color picked at random per embed/section. Use a single-value array to always use that one color. |
| `embedFieldValuePrefix` | `string` | `">>> "` | Markdown prepended to each answer inside the embed. Leave as `""` for no styling. |
| `noAnswerMessage` | `string` | `"No answer provided!"` | Text shown for unanswered optional questions. |
| `skipEmptyResponses` | `boolean` | `false` | Set to `true` to hide unanswered questions from the embed entirely. |

### How to count question positions

Each form item — including section title (page break) — counts as one position.

**Example:** A form with 2 sections, 5 questions each, where username is the 1st question of section 2:

```
Position 1: Name
Position 2: Email
Position 3: Discord User ID
Position 4: Question 4
Position 5: Question 5
--- Section 2 title (counts as position 6) ---
Position 7: Discord Username    ← usernameQuestionNumber = 7
Position 8: ...
```

### How to find Discord forum tag IDs

Enable **Developer Mode** in Discord (**User Settings → Advanced → Developer Mode**), then right-click a tag in your forum channel to copy its ID.

---

## 💡 Examples

### Thread name combinations

With `threadNameStaticText = " | Application"` and username `JohnDoe`:

| `threadNamePosition` | Resulting thread name |
|---|---|
| `"start"` | `\| Application JohnDoe` |
| `"end"` | `JohnDoe \| Application` |
| `null` | `JohnDoe` |

### Mentioning a role when a submission arrives

```
<@&YOUR_ROLE_ID> — new submission from <@{discordUserID}>!
```

### Forum tags configuration

```js
const DISCORD_FORUM_TAGS = [
    "000000000000000001",
    "000000000000000002"
];
```

Leave as `[]` if you're not using forum tags or using a normal text channel.

### Customizing the embed's appearance

```js
// Plain heading instead of the default markdown heading
const embedDescriptionTemplate = "New response to: {formTitle}";

// No blockquote styling on answers
const embedFieldValuePrefix = "";

// Single brand color instead of a random pick each time
const EMBED_COLORS = [0x5865f2];
```

---

## 🏷️ Best Practices

### Organizing submissions with forum tags

Use Discord forum tags to track where each submission stands:

| Tag | Use for |
|---|---|
| 🔍 Pending Review | Submissions awaiting evaluation |
| 👀 Under Review | Currently being reviewed |
| ❓ Needs More Info | Requires follow-up from the submitter |
| ⚠️ Suspicious | Flagged for investigation |
| 📅 Interview Scheduled | Progressed to interview stage |
| ❌ Rejected | Did not meet the criteria |
| ✅ Approved | Accepted |
| 📁 Archived | Completed, stored for reference |

### Notifying staff on new submissions

In `submissionMessageContent`, use a role mention so your team gets pinged automatically:

```
<@&ROLE_ID> — new submission received from <@{discordUserID}>!
```

---

## 🔍 Troubleshooting

### "DISCORD_WEBHOOK_URL is not configured" error

The webhook URL in `Config.gs` is still the placeholder. Replace `YOUR_WEBHOOK_URL` with your actual Discord webhook URL and ensure it ends with `?wait=true`.

---

### No message appears in Discord

- Confirm the webhook URL is correct and the webhook hasn't been deleted or regenerated in Discord
- Make sure the channel the webhook was created in still exists
- Open **View → Logs** in the Script Editor — error details will appear there

---

### Authorization error on first run

Google requires you to authorize the script before it can run. When prompted:
1. Click **Review Permissions**
2. Select your Google account
3. If you see "Google hasn't verified this app", click **Advanced → Go to [script name] (unsafe)**
4. Click **Allow**

This is expected for personal scripts and is safe to proceed with.

---

### Trigger fires but nothing happens

- Verify the trigger type is **From form → On form submit** (not time-based)
- Click the **⋮** menu next to your trigger in the Triggers page → **Executions** to see if the script is actually running and what errors occurred
- Ensure `onSubmit` is selected in the function dropdown before testing manually

---

### Wrong username or user ID is being picked up

The `usernameQuestionNumber` or `userIdQuestionNumber` values in `Config.gs` don't match the actual positions in your form. Recount carefully — each question **and each section title (page break)** takes up one position.

Use the counting example in the [Configuration Reference](#how-to-count-question-positions) section above.

---

### Forum thread not being created

- Confirm the webhook was created inside a **Forum channel** — not a Text, Announcement, or Voice channel
- Check that `discordThreadName` is not empty. If `threadNamePosition` is `null` and the username field is blank, no thread name is set
- Ensure `threadNamePosition` is the JavaScript value `null`, not the string `"null"` or `"NULL"`

---

### Messages are getting cut off

Discord enforces strict length limits. The script truncates automatically, but if important content is being cut:

| Element | Limit |
|---|---|
| Thread name | 100 characters |
| Embed description | 4,096 characters |
| Field name (question title) | 256 characters |
| Field value (answer) | 1,024 characters |

Shorten your question titles or break up long answers to stay within these limits.

---

### Script times out on large forms

Google Apps Script has a **6-minute execution limit**. Forms with many sections each require a separate Discord API call, which adds up. If you hit this limit, consider reducing the number of sections or combining related questions.

---

### Webhook was deleted or regenerated in Discord

Old webhooks cannot be restored. Create a new webhook in the Discord channel and update `DISCORD_WEBHOOK_URL` in `Config.gs` with the new URL.

---

### Grid-style questions look broken in Discord

Multiple-choice grid and checkbox grid questions cannot be formatted cleanly inside Discord embeds due to Discord's Markdown limitations. The data will still be sent, but it may appear as a raw comma-separated string.

---

## 📜 Version Notes

> [!CAUTION]
> **Version 1 is deprecated** and no longer maintained or supported.
> Use **V2** (`Google_Apps_Script_V2/`) for all new setups.

---

## 💬 Support

**Need help?**
- [Open a GitHub issue](https://github.com/mouryaabhay/Google-Form-Response-To-Discord/issues) — include your error message, form structure, and steps to reproduce
- Join the community Discord: https://discord.com/invite/E4KRWJW49B
