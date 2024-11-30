/**************************************************

    Google Form Response To Discord

    Author: Mourya Abhay Amarjeet aka Dynastic Creator
    Contact: @mouryaabhay / @dynasticcreator
    
    Support:
        For support requests, code updates, improvement ideas, or reporting bugs, 
        please reach out via Discord for a quicker response. 
        You can also create an issue on GitHub if needed.

    Join my server to ask questions or get help:
        - Quack To Code: https://discord.com/invite/ekRDrTEES5
        - Creation Guide: https://discord.com/invite/E4KRWJW49B

**************************************************/

/* ---------- Configurations --------- */

// Webhook URL for sending messages to a Discord forum channel (Do not delete "?wait=true")
const DISCORD_WEBHOOK_URL = "YOUR_WEBHOOK_URL?wait=true";

// List of Tag IDs to apply when a post is created.
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

// Set to start for prefix, end for suffix
const threadNamePosition = "start";

// Message content to accompany the embed, mentioning the applicant
// Available placeholders:
// - {discordUserID}: Discord user ID of the applicant
const messageContent = "## Love this project? Help us grow by sharing this project with your friends!\n> **Made with 💗 by <@677796501560229929>!** ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ https://discord.com/invite/ekRDrTEES5 https://discord.com/invite/E4KRWJW49B ";

// A default message for questions that have no response
const noAnswerMessage = "No answer provided!";

// Set to true to skip empty answers, false to include them
const skipEmptyResponses = false;

// Color hex code for the embed message
const discordEmbedColor = "#5865f2";