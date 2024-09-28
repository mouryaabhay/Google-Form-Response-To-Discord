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

/* ---------- Configuarations --------- */

// Webhook URL for sending messages to a Discord forum channel
// const WEBHOOK_URL = "YOUR_WEBHOOK_URL?wait=true";
const WEBHOOK_URL = "https://discord.com/api/webhooks/1163456626196488353/lpE_3BlTrtXiaHDDIFe_vbcRbehJasRcTSsD-ZgWDY3U_d5Bfta8WiFwsL8xMu6VCpmO?wait=true";

// Question number in the Google Form where applicants provide their Discord username
const usernameQuestion = 2;

// Part of the thread name
const discordThreadNameSuffix = " Submitted a Form!";

// Color hexcode for the embed message
const embedColor = "#5865f2";