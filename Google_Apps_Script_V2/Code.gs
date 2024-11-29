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
    const activeForm = FormApp.getActiveForm();
    const latestResponse = activeForm.getResponses().pop(); // Get the most recent form response
    
    // Get questions from the first page and create a map of responses
    const questions = getFirstPageQuestions(activeForm);
    const responses = new Map(latestResponse.getItemResponses().map(item => [item.getItem().getTitle(), item.getResponse()]));

    // Extract Discord User ID for message content
    const discordUserID = responses.get(questions[userIDQuestion - 1]?.getTitle()) || "";
    console.log(`Discord User ID: ${discordUserID}`);

    // Function to create the message content
    discordMessageContent = updateDiscordMessageContentVariable(discordUserID);

    // Extract Discord Username for thread naming
    const discordUsername = responses.get(questions[usernameQuestion - 1]?.getTitle()) || "";
    console.log(`Discord Username: ${discordUsername}`);

    // Set thread name based on threadNamePosition
    if (threadNamePosition === null) {
        discordThreadName = ""; // Set to an empty string or a default value
    } else if (threadNamePosition === 'start') {
        discordThreadName = truncate(
            `${discordUsername}${discordThreadNamePart}`, 
            DISCORD_LIMITS.THREAD_NAME
        );
    } else if (threadNamePosition === 'end') {
        discordThreadName = truncate(
            `${discordThreadNamePart}${discordUsername}`, 
            DISCORD_LIMITS.THREAD_NAME
        );
    } else {
        discordThreadName = truncate(
            discordThreadNamePart, 
            DISCORD_LIMITS.THREAD_NAME
        );
    }

    // Create embed fields and send to Discord
    const embedFields = createEmbedFields(questions, responses);
    sendEmbedToDiscord(embedFields);
    
    // Process sections and send additional Discord messages
    processSectionsAndSendDiscordMessages(activeForm, responses);
}

// Function to create the Discord message content
function updateDiscordMessageContentVariable(discordUserID) {
    return messageContent.replace('{discordUserID}', discordUserID);
}

// Get questions from the first page of the form
function getFirstPageQuestions(activeForm) {
    // Find the index of the first page break or return all items if no page break found
    return activeForm.getItems().slice(0, activeForm.getItems().findIndex(item => item.getType() === FormApp.ItemType.PAGE_BREAK) || undefined);
}

// Create embed fields from questions and responses
function createEmbedFields(questions, responses) {
    return questions.reduce((fields, question) => {
        const response = responses.get(question.getTitle()) || noAnswerMessage; // Get response or default message
        const responseText = String(response);

        // Skip empty responses if the toggle is on
        if (skipEmptyResponses && (responseText === "" || responseText === noAnswerMessage)) {
            return fields;
        }

        // Replace double line breaks with a single line break, prefixing with '-'
        const processedResponse = responseText.replace(/\n{2,}/g, '\n- ');
        
        // Add formatted field object to the accumulator
        fields.push({
            name: truncate(`>>> ${question.getTitle()}`, DISCORD_LIMITS.FIELD_NAME),
            value: truncate(`- ${processedResponse}`, DISCORD_LIMITS.FIELD_VALUE),
            inline: false
        });
        return fields;
    }, []);
}

// Send embed to Discord
function sendEmbedToDiscord(embedItems) {
    const formTitle = FormApp.getActiveForm().getTitle(); // Get form title
    const embedPayload = {
        "content": discordMessageContent,
        "embeds": [{
            "color": parseInt(discordEmbedColor.replace(/^#/, ''), 16), // Set embed color
            "description": truncate(`### ${formTitle}`, DISCORD_LIMITS.DESCRIPTION), // Set form description
            "fields": embedItems // Include embed items
        }]
    };

    // Only add applied_tags if DISCORD_FORUM_TAGS is defined and not empty
    if (typeof DISCORD_FORUM_TAGS !== 'undefined' && DISCORD_FORUM_TAGS.length > 0) {
        embedPayload.applied_tags = DISCORD_FORUM_TAGS;
    }

    // Add thread name if no thread ID exists
    if (!discordThreadId) {
        embedPayload.thread_name = discordThreadName;
    }

    const response = sendToDiscord(embedPayload); // Send payload to Discord
    discordThreadId = JSON.parse(response).channel_id; // Store the returned thread ID from response
    console.log(`Thread ID: ${discordThreadId}`); // Log thread ID
    console.log(`Thread Name: ${discordThreadName}`); // Log thread name
    console.log(`Sent embed message for google form: ${formTitle}`); // Log sent form
}

// Send requests to Discord
function sendToDiscord(payload) {
    const options = {
        "method": "post",
        "headers": { "Content-Type": "application/json" },
        "payload": JSON.stringify(payload) // Set request payload
    };

    // Construct URL with thread ID if available
    const url = `${DISCORD_WEBHOOK_URL}${discordThreadId ? `&thread_id=${ discordThreadId}` : ''}`; // Add thread parameter if available
    
    try {
        // Send request to Discord and return the response
        return UrlFetchApp.fetch(url, options).getContentText();
    } catch (error) {
        console.error(`Error sending to Discord: ${error}`); // Log error
        return "{}"; // Return an empty object on error
    }
}

// Process sections and send additional Discord messages
function processSectionsAndSendDiscordMessages(activeForm, responses, formTitle) {
    const allItems = activeForm.getItems();
    let currentSection = ""; // Initialize current section
    let questionsInSection = []; // Array to hold questions

    // Iterate through all items in the form using a for loop
    for (let i = 0; i < allItems.length; i++) {
        const item = allItems[i];
        if (item.getType() === FormApp.ItemType.PAGE_BREAK) {
            // If a page break is found, send the current section and reset
            if (currentSection) {
                sendSectionMessageToDiscord(currentSection, questionsInSection, responses);
            }
            currentSection = item.getTitle();
            questionsInSection.length = 0; // Reset questions for the new section
        } else {
            questionsInSection.push(item.getTitle()); // Add question to the current section
        }
    }

    // Send the last section if any
    if (currentSection) {
        sendSectionMessageToDiscord(currentSection, questionsInSection, responses);
    }
}

// Send section messages to Discord
function sendSectionMessageToDiscord(sectionTitle, questionItems, responses) {
    const embedFields = createEmbedFields(questionItems.map(title => ({ getTitle: () => title })), responses); // Create embed fields for the section

    // Skip sending the section if there are no fields (all responses were empty)
    if (embedFields.length === 0) {
        console.log(`Skipped empty section: ${sectionTitle}`);
        return;
    }

    const embedPayload = {
        "embeds": [{
            "color": parseInt(discordEmbedColor.replace(/^#/, ''), 16), // Set embed color
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