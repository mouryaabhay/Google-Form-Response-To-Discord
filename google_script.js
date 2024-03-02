// Ensure that you insert the forum channel's webhook URL where it says webhook_url and keep the '?wait=true' extension after the webhook URL without any spaces; this is the destination where the embed has to be sent.
var WEBHOOK_URL = "webhook_url?wait=true"; // Insert webhook url here
var webhookUsername = "Forms Manager"; // Set webhook username


// NOTE: You can leave optional field blank.

// The post title will be in this format: Applicants_Name's Moderator Application
// For Example: Clyde's Demo Form
var postTitle = "'s Demo Form"; // Set embed title
var messageContent = "Demo Content"; // Set embed content [Optional]
var embedColor = "#27272F"; // Set embed color
var authorName = "@clyde"; // Set embed author name [Optional]
var authorNameURL = "https://discord.com/invite/E4KRWJW49B"; // Set a hyperlink to be attached to the name [Optional]
var authorIconURL = "https://cdn.discordapp.com/avatars/1081004946872352958/a_6170487d32fdfe9f988720ad80e6ab8c.png?size=160"; // Set embed author icon [Optional]
var embedTitle = "Demo Embed Title"; // Set embed title [Optional]
var embedTitleURL = "https://dynasticcreator.carrd.co/";
var embedDescription = "Demo Embed Description"; // Set embed description [Optional]
var thumbnailURL = "https://cdn.discordapp.com/avatars/1081004946872352958/a_6170487d32fdfe9f988720ad80e6ab8c.png?size=160"; // Set embed thumbnail [Optional]
var imageURL = "https://cdn.discordapp.com/avatars/1081004946872352958/a_6170487d32fdfe9f988720ad80e6ab8c.png?size=160"; // Set embed image [Optional]
var footerText = "Demo Embed Footer"; // Set embed footer [Optional]
var footerIconURL = "https://cdn.discordapp.com/avatars/1081004946872352958/a_6170487d32fdfe9f988720ad80e6ab8c.png?size=160"; // Set embed footer icon [Optional]




// WARNING: DO NOT ALTER CODE BELOW THIS!!
var name = "";
var thread_id = "";

// onSubmit function that should be triggered when a new form is submitted.
function onSubmit(e) {
    var form = FormApp.getActiveForm(); // Get the form object
    var allResponses = form.getResponses(); // Get all of the form's responses
    var latestResponse = allResponses[allResponses.length - 1]; // Get the latest response submitted to the form
    var response = latestResponse.getItemResponses(); // Get an array containing all the responses to each question
    var items = []; // Current items array to use in embed
    var currentEmbedCharacterNum = 0 // Current number characters being used in the current embed
    
    // For loop to iterate through responses
    for (var i = 0; i < response.length; i++) {
        var question = response[i].getItem().getTitle(); // Get the question text
        var answer = response[i].getResponse(); // Get the answer text
        
        // If the answer is over a certain number of characters, break it into multiple parts.
        try {
            var parts = answer.match(/[\s\S]{1,1024}/g) || [];
        }
        catch (e) {
            var parts = answer;
        }
        
        name = response[1].getResponse().toString(); // From where the value has to be taken, the value of a the previous position has to be entered from the targetted position i.e if we need value of 2nd question use 1.
        
        // If the answer text is blank, skip this iteration.
        if (answer == "") {
            continue;
        }
        
        if (question.length > 256) {
            question = question.substring(0, 220) + "...";
        }
        
        // For loop to iterate through the parts of an answer
        for (var j = 0; j < parts.length; j++) {
            currentEmbedCharacterNum += parts[j].length + question.length; // Add the number of characters in a part to the total character count of this embed
            
            // If the total character count with this part included pushes the total over 5000 (Discord Embeds have a character limit)
            if (currentEmbedCharacterNum >= 5000) {
                sendEmbed(items); // Send away an embed with the current items data
                Utilities.sleep(60) // Wait a second so Discord doesn't get overwhelmed with requests
                currentEmbedCharacterNum = 0; // Reset the character count and items array
                items = [];
            }
            
            // If there are multiple parts to an answer, add a (cont.) to the names.
            if (j == 0) {
                items.push({
                    "name": question,
                    "value": "```• " + parts[j] + "```",
                    "inline": false
                });
            }
            else {
                items[items.length - 1].value += "```\n• " + parts[j] + "```";
            }
        }
    }
    
    // Send an embed to the webhook.
    sendEmbed(items);
    console.log("Applicant Name: " + name);
};


// Function to send an embed to the webhook url.
function sendEmbed(items) {
    var decimalColor = parseInt(embedColor.replace(/^#/, ''), 16); // Convert the color from hexadecimal to decimal
    let payload = {
        'username': webhookUsername,
        "content": messageContent,
        "embeds": [{
            "color": decimalColor,
            "author": {
                "name": authorName,
                "url": authorNameURL,
                "icon_url": authorIconURL,
            },
            "title": embedTitle,
            "url": embedTitleURL,
            "description": embedDescription,
            "fields": items,
            "thumbnail": {
                "url": thumbnailURL,
            },
            "image": {
                "url": imageURL,
            },
            "footer": {
                "text": footerText,
                "icon_url": footerIconURL,
            },
        }]
    }
    
    if (!thread_id) {
        payload.thread_name = name + postTitle;
    }
    
    // Package the embed options into a variable
    var options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
        },
        "payload": JSON.stringify(payload)
    };
    
    // Post the data to the webhook.
    let resp = UrlFetchApp.fetch(`${WEBHOOK_URL}${thread_id ? `&thread_id=${thread_id}` : ''}`, options).getContentText();
    thread_id = JSON.parse(resp).channel_id
    console.log(thread_id);
}
