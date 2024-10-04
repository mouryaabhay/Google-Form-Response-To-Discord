// WARNING: DO NOT ALTER CODE BELOW THIS UNLESS YOU KNOW WHAT YOU ARE DOING!!

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

// Thread Variable Initialization
let discordThreadId = "";
let discordThreadName = "";

// Define Discord limits for embed messages
const DISCORD_LIMITS = {
    THREAD_NAME: 100,
    DESCRIPTION: 4096,
    FIELD_NAME: 256,
    FIELD_VALUE: 1024
};

// Handle form submission
function onSubmit(event) {
    const activeForm = FormApp.getActiveForm(); // Get active form
    const latestResponse = activeForm.getResponses().pop(); // Get the latest response
    
    // Get questions and responses
    const questions = getFirstPageQuestions(activeForm);
    const responses = new Map(latestResponse.getItemResponses().map(item => [item.getItem().getTitle(), item.getResponse()]));

    // Extract username for thread naming
    const username = getResponseByIndex(latestResponse, usernameQuestion - 1) || "";
    discordThreadName = truncate(username ? `${username}${discordThreadNameSuffix}` : discordThreadNameSuffix, DISCORD_LIMITS.THREAD_NAME);

    // Create embed fields and send to Discord
    const embedFields = createEmbedFields(questions, responses);
    sendEmbedToDiscord(embedFields);
    processSectionsAndSendDiscordMessages(activeForm, responses); // Process sections
}

// Get first page questions
function getFirstPageQuestions(activeForm) {
    const items = activeForm.getItems(); // Get all items from the form
    const pageBreakIndex = items.findIndex(item => item.getType() === FormApp.ItemType.PAGE_BREAK); // Find the page break index
    return pageBreakIndex === -1 ? items : items.slice(0, pageBreakIndex); // Return items up to the page break
}

// Get response by index
function getResponseByIndex(latestResponse, index) {
    return latestResponse.getItemResponses()[index]?.getResponse() || ""; // Safely get response by index
}

// Create embed fields from questions and responses
function createEmbedFields(questions, responses) {
    return questions.map(question => {
        const response = responses.get(question.getTitle()) || "No answer provided."; // Get response or default
        const responseText = String(response); // Convert to string if necessary

        // Replace double line breaks with a single line break, prefixing with '-'
        const processedResponse = responseText.replace(/\n{2,}/g, '\n- '); // Use regex for better performance
        
        // Return formatted field object
        return {
            name: truncate(`>>> ${question.getTitle()}`, DISCORD_LIMITS.FIELD_NAME),
            value: truncate(`- ${processedResponse}`, DISCORD_LIMITS.FIELD_VALUE),
            inline: false
        };
    });
}

// Send embed to Discord
function sendEmbedToDiscord(embedItems) {
    const formTitle = FormApp.getActiveForm().getTitle(); // Get form title
    const embedPayload = {
        "embeds": [{
            "color": parseInt(embedColor.replace(/^#/, ''), 16), // Set embed color
            "description": truncate(`### ${formTitle}`, DISCORD_LIMITS.DESCRIPTION), // Set form description
            "fields": embedItems // Include embed items
        }]
    };

    if (!discordThreadId) { // If no thread ID, set thread name
        embedPayload.thread_name = discordThreadName;
    }

    const response = sendToDiscord(embedPayload); // Send payload to Discord
    discordThreadId = JSON.parse(response).channel_id; // Store thread ID from response
    console.log(`Thread ID: ${discordThreadId}`); // Log thread ID
    console.log(`Thread Name: ${discordThreadName}`); // Log thread name
    console.log(`Sent embed message for google form: ${formTitle}`); // 0: Log sent form
}

//  Send requests to Discord
function sendToDiscord(payload) {
    const options = {
        "method": "post",
        "headers": { "Content-Type": "application/json" },
        "payload": JSON.stringify(payload) // 1: Set request payload
    };

    const threadParam = discordThreadId ? `&thread_id=${discordThreadId}` : ''; // 2: Add thread parameter if available
    try {
        return UrlFetchApp.fetch(`${WEBHOOK_URL}${threadParam}`, options).getContentText(); // 3: Send request and get response
    } catch (error) {
        console.error(`Error sending to Discord: ${error}`); // 4: Log error
        return "{}"; // Return an empty object on error
    }
}

// Process sections and send messages
function processSectionsAndSendDiscordMessages(activeForm, responses) {
    const allItems = activeForm.getItems(); // Get all items
    let currentSection = ""; // Initialize current section
    const questionsInSection = []; // Array to hold questions

    allItems.forEach(item => {
        if (item.getType() === FormApp.ItemType.PAGE_BREAK) { // Check for page break
            if (currentSection) { // If there's a current section, send it
                sendSectionMessageToDiscord(currentSection, questionsInSection, responses);
            }
            currentSection = item.getTitle(); // Update current section title
            questionsInSection.length = 0; // Clear questions for the new section
        } else {
            questionsInSection.push(item.getTitle()); // Add question title to section
        }
    });

    if (currentSection) { // Send last section if any
        sendSectionMessageToDiscord(currentSection, questionsInSection, responses);
    }
}

// Send section messages to Discord
function sendSectionMessageToDiscord(sectionTitle, questionItems, responses) {
    const embedFields = createEmbedFields(questionItems.map(title => ({ getTitle: () => title })), responses); // Create embed fields for the section
    
    const embedPayload = {
        "embeds": [{
            "color": parseInt(embedColor.replace(/^#/, ''), 16), // Set embed color
            "title": sectionTitle, // Set section title
            "fields": embedFields // Include fields
        }]
    };

    sendToDiscord(embedPayload); // Send embed payload to Discord
    console.log(`Sent embed message for section: ${sectionTitle}`); // Log the sent section
}

// Function to truncate text to a max length with a suffix
function truncate(text, maxLength, suffix = "...") {
    return text.length > maxLength ? text.substring(0, maxLength - suffix.length) + suffix : text;
}