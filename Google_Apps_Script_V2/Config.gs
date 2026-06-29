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
