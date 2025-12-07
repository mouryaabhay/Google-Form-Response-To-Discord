// Webhook URL for sending messages to a Discord forum channel (must include ?wait=true)
const DISCORD_WEBHOOK_URL = "";
/**************************************************
  Google Form Response To Discord
  Author: Mourya Abhay Amarjeet (@mouryaabhay) aka Dynastic Creator
**************************************************/

/* ---------- Configurations --------- */

// Webhook URL for sending messages to a Discord forum channel (Do not delete or replace "?wait=true")
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1291586838993174539/5698t1BzL9q5cLm-IGzlzvs_ywEdbiY2l1frzB73NHDrkymIoJOcnyyyyyQDWYl2u2K?wait=true?wait=true";

// Tag IDs to apply when creating a forum post (leave empty array if not using forum tags)
const DISCORD_FORUM_TAGS = [
    "1163454653917302825",
    "1163459173917302825"
];

// Position of the question in the Google Form where applicants provide their Discord user ID
const userIDQuestion = 3;

// Position of the question in the Google Form where applicants provide their Discord username
const usernameQuestion = 2;

// Part of the thread name
const discordThreadNamePart = " Submitted a Form";

// Set to start for prefix, end for suffix, NULL to remove
const threadNamePosition = "start";

// Message content to accompany the embed, mentioning the applicant
// Available placeholders:
// - {discordUserID}: Discord user ID of the applicant
const messageContent = "<@{discordUserID}> submitted a form!";

// A default message for questions that have no response
const noAnswerMessage = "No answer provided!";

// Set to true to skip empty answers, false to include them
const skipEmptyResponses = false;
