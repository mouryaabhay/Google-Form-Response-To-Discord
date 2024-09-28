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

// Step 1: Thread Variable Initialization
let discordThreadId = "";
let discordThreadName = "";

// Step 2: Define Discord limits for embed messages
const DISCORD_LIMITS = {
    THREAD_NAME: 100,
    DESCRIPTION: 4096,
    FIELD_NAME: 256,
    FIELD_VALUE: 1024
};

// Step 3: Function to truncate text to a max length with a suffix
function truncate(text, maxLength, suffix = "...") {
    return text.length > maxLength ? text.substring(0, maxLength - suffix.length) + suffix : text;
}

// Step 4: Create embed fields from questions and responses
function createEmbedFields(questions, responses) {
    return questions.map(question => {
        const response = responses.get(question.getTitle()) || "No answer provided."; // Step 4.1: Get response or default
        const responseText = String(response); // Step 4.2: Convert to string if necessary

        // Step 4.3: Replace double line breaks with a single line break, prefixing with '-'
        const processedResponse = responseText.replace(/\n{2,}/g, '\n- '); // Use regex for better performance
        
        // Step 4.4: Return formatted field object
        return {
            name: truncate(`>>> ${question.getTitle()}`, DISCORD_LIMITS.FIELD_NAME),
            value: truncate(`- ${processedResponse}`, DISCORD_LIMITS.FIELD_VALUE),
            inline: false
        };
    });
}

// Step 5: Handle form submission
function onSubmit(event) {
    const activeForm = FormApp.getActiveForm(); // Step 5.1: Get active form
    const latestResponse = activeForm.getResponses().pop(); // Step 5.2: Get the latest response
    
    // Step 5.3: Extract username for thread naming
    const username = getResponseByIndex(latestResponse, usernameQuestion - 1) || "";
    discordThreadName = truncate(username ? `${username}${discordThreadNameSuffix}` : discordThreadNameSuffix, DISCORD_LIMITS.THREAD_NAME);

    // Step 5.4: Get questions and responses
    const questions = getFirstPageQuestions(activeForm);
    const responses = new Map(latestResponse.getItemResponses().map(item => [item.getItem().getTitle(), item.getResponse()]));

    // Step 5.5: Create embed fields and send to Discord
    const embedFields = createEmbedFields(questions, responses);
    sendEmbedToDiscord(embedFields);
    processSectionsAndSendDiscordMessages(activeForm, responses); // Step 5.6: Process sections
}

// Step 6: Get first page questions
function getFirstPageQuestions(activeForm) {
    const items = activeForm.getItems(); // Step 6.1: Get all items from the form
    const pageBreakIndex = items.findIndex(item => item.getType() === FormApp.ItemType.PAGE_BREAK); // Step 6.2: Find the page break index
    return pageBreakIndex === -1 ? items : items.slice(0, pageBreakIndex); // Step 6.3: Return items up to the page break
}

// Step 7: Process sections and send messages
function processSectionsAndSendDiscordMessages(activeForm, responses) {
    const allItems = activeForm.getItems(); // Step 7.1: Get all items
    let currentSection = ""; // Step 7.2: Initialize current section
    const questionsInSection = []; // Step 7.3: Array to hold questions

    allItems.forEach(item => {
        if (item.getType() === FormApp.ItemType.PAGE_BREAK) { // Step 7.4: Check for page break
            if (currentSection) { // Step 7.5: If there's a current section, send it
                sendSectionMessageToDiscord(currentSection, questionsInSection, responses);
            }
            currentSection = item.getTitle(); // Step 7.6: Update current section title
            questionsInSection.length = 0; // Step 7.7: Clear questions for the new section
        } else {
            questionsInSection.push(item.getTitle()); // Step 7.8: Add question title to section
        }
    });

    if (currentSection) { // Step 7.9: Send last section if any
        sendSectionMessageToDiscord(currentSection, questionsInSection, responses);
    }
}

// Step 8: Send section messages to Discord
function sendSectionMessageToDiscord(sectionTitle, questionItems, responses) {
    const embedFields = createEmbedFields(questionItems.map(title => ({ getTitle: () => title })), responses); // Step 8.1: Create embed fields for the section
    
    const embedPayload = {
        "embeds": [{
            "color": parseInt(embedColor.replace(/^#/, ''), 16), // Step 8.2: Set embed color
            "title": sectionTitle, // Step 8.3: Set section title
            "fields": embedFields // Step 8.4: Include fields
        }]
    };

    sendToDiscord(embedPayload); // Step 8.5: Send embed payload to Discord
    console.log(`Sent embed message for section: ${sectionTitle}`); // Step 8.6: Log the sent section
}

// Step 9: Send embed to Discord
function sendEmbedToDiscord(embedItems) {
    const formTitle = FormApp.getActiveForm().getTitle(); // Step 9.1: Get form title
    const embedPayload = {
        "embeds": [{
            "color": parseInt(embedColor.replace(/^#/, ''), 16), // Step 9.2: Set embed color
            "description": truncate(`### ${formTitle}`, DISCORD_LIMITS.DESCRIPTION), // Step 9.3: Set form description
            "fields": embedItems // Step 9.4: Include embed items
        }]
    };

    if (!discordThreadId) { // Step 9.5: If no thread ID, set thread name
        embedPayload.thread_name = discordThreadName;
    }

    const response = sendToDiscord(embedPayload); // Step 9.6: Send payload to Discord
    discordThreadId = JSON.parse(response).channel_id; // Step 9.7: Store thread ID from response
    console.log(`Thread ID: ${discordThreadId}`); // Step 9.8: Log thread ID
    console.log(`Thread Name: ${discordThreadName}`); // Step 9.9: Log thread name
    console.log(`Sent embed message for google form: ${formTitle}`); // Step 9.10: Log sent form
}

// Step 10: Send requests to Discord
function sendToDiscord(payload) {
    const options = {
        "method": "post",
        "headers": { "Content-Type": "application/json" },
        "payload": JSON.stringify(payload) // Step 10.1: Set request payload
    };

    const threadParam = discordThreadId ? `&thread_id=${discordThreadId}` : ''; // Step 10.2: Add thread parameter if available
    try {
        return UrlFetchApp.fetch(`${WEBHOOK_URL}${threadParam}`, options).getContentText(); // Step 10.3: Send request and get response
    } catch (error) {
        console.error(`Error sending to Discord: ${error}`); // Step 10.4: Log error
        return "{}"; // Return an empty object on error
    }
}

// Step 11: Get response by index
function getResponseByIndex(latestResponse, index) {
    return latestResponse.getItemResponses()[index]?.getResponse() || ""; // Step 11.1: Safely get response by index
}
