<!-- Title & Description -->
<h1></h1>
<h1 align="center">Google Form Responses to Discord</h1>
<h3 align="center">
    This guide will walk you through the steps to automatically send responses from your Google Form to a designated Discord channel. Whether you're gathering feedback, organizing events, or collecting data, integrating Google Forms with Discord can streamline your workflow.
</h3>

<!-- Why Use This Script -->
<h1></h1>
<h3>🌟 Key Features</h3>
<ul>
    <li>Fast execution and reliable performance</li>
    <li>Handles long responses without breaking</li>
    <li>Auto-truncates content to meet Discord limits</li>
    <li>Organizes responses into multiple embeds by form sections</li>
    <li>Supports all Google Form response types</li>
    <li>Customizable thread naming and auto-tagging</li>
</ul>

<!-- Prerequisites -->
<h1></h1>

> [!NOTE]
> - Make sure your form includes a Discord username field. Placing it as question #2 is recommended (you can change this index in `Config.gs`). This value is used to build thread titles in forum channels.
> - For best display results, keep your question titles on a single line. While multi-line questions won’t break the script, Discord may display them unevenly inside embeds.
> - The script works best with a forum-channel webhook, but normal channel webhooks are fully supported. It automatically detects the webhook type and switches behavior accordingly.
> - All Google Form answer types are supported. However, grid-style questions (multiple rows/columns) cannot be visually formatted well in Discord embeds due to Discord’s limited markdowns.

<!-- Steps-by-Step Instructions -->
<h1></h1>
<h3>🚀 Setup Instructions</h3><br>
<ol>
    <!-- Step 1 -->
    <li>
        <strong>Form Creation</strong>
        <ol>
            <li>Visit https://form.new/ to create your Google Form</li>
            <li>Include a Discord username field (recommended as question #2)</li>
            <li>Include a Discord user ID field (recommended as question #3)</li>
        </ol>
    </li>
    <br>
    <!-- Step 2 -->
    <li>
        <strong>Open the Script Editor</strong>
        <p>Click the <code> ⋮ </code> (Meatballs Menu) and select <code>Script editor</code>.</p>
    </li>
    <br>
    <!-- Step 3 -->
    <li>
        <strong>Creating Files & Pasting the Google Script</strong>
        <ol>
            <!-- Step 3.1 -->
            <li>
                <strong>Opening Existing Script: Code.gs</strong>
                <ol>
                    <li>Navigate to the <a href = "Google_Apps_Script_V2\Code.gs">Code.gs</a> file in this repo and copy the code within it</li>
                    <li>When you open the Google Apps Script editor, within the Files section on left, you'll find a file named "Code.gs" by default</li>
                    <li>Navigate to "Code.gs", delete the existing code, paste in the new code you copied earlier and save it</li>
                    <li>On the right of <code>Debug</code> button, select <code>onSubmit</code></li>
                </ol>
            </li>
            <!-- Step 3.2 -->
            <li>
                <strong>Creating a New Script: Config.gs</strong>
                <ol>
                    <li>Navigate to the <a href = "Google_Apps_Script_V2\Config.gs">Config.gs</a> file in this repo and copy the code within it</li>
                    <li>In the Google Apps Script editor, click the <code> + </code> icon in the "<strong>Files</strong>" section. Then, select <code>Script</code> to create a new file and name it "Config.gs"</li>
                    <li>Navigate to "Config.gs", delete the existing code, paste in the new code you copied earlier and save it</li>
                </ol>
            </li>
        </ol>
    </li>
    <br>
    <!-- Step 4 -->
    <li>
        <strong>Create a Discord Webhook</strong>
        <ol>
            <li>Navigate to the Discord forum channel where you want the form submission responses to appear</li>
            <li>Click on Edit Channel (gear icon) and Go to <code>Integrations > Webhooks</code></li>
            <li>Create a new webhook and edit the webhook’s name and icon as desired</li>
            <li>Copy the webhook link for later use</li>
        </ol>
    </li>
    <br>
    <!-- Step 5 -->
    <li>
        <strong>Update the variable values in "Config.gs"</strong>
        <ol>
            <li>Replace <code>YOUR_WEBHOOK_URL</code> with your copied Discord webhook URL</li>
            <li>Configure the following variables as needed:
                <ul type="disc">
                    <li><strong>DISCORD_WEBHOOK_URL</strong>
                        <br>• <code>YOUR_WEBHOOK_URL</code> must be replaced with webhook url
                    </li>
                    <li><strong>DISCORD_FORUM_TAGS</strong>
                        <br>• Add forum tag IDs if you want tags on forum posts
                        <br>• Tag ID must be within double quotes
                        <br>• Format: <code>[ "1163454653917302825", "1163459173917302825" ]</code>
                        <br>• Leave empty <code>[]</code> if not using tags
                    </li>
                    <li><strong>userIDQuestion</strong>
                        <br>• Keep as 3 (default) if user ID question is third
                        <br>• Or change to match the position number of your user ID question (e.g., if it's the 5th question, change to 5)
                    </li>
                    <li><strong>usernameQuestion</strong>
                        <br>• Keep as 2 (default) if username question is second
                        <br>• Or change to match the position number of your username question (e.g., if it's the 5th question, change to 5)
                    </li>
                    <li><strong>discordThreadNamePart</strong>
                        <br>• Customize the thread name text
                        <br>• Example: "Submitted a Form"
                    </li>
                    <li><strong>threadNamePosition</strong>
                        <br>• Determines where discordThreadNamePart appears in the thread name
                        <br>• Set to <code>start</code> or <code>end</code>
                        <br>• Set to <code>NULL</code> if you don't want it
                        <br>• Examples (assuming discordThreadNamePart value is "Submitted a Form"):
                        <br>&nbsp;&nbsp;- If <code>start</code>: "Submitted a Form @username"
                        <br>&nbsp;&nbsp;- If <code>end</code>: "@username Submitted a Form"
                        <br>&nbsp;&nbsp;- If <code>NULL</code>: "Submitted a Form"
                    </li>
                    <li><strong>messageContent</strong>
                        <br>• Customize message that appear outside of embed
                        <br>• Available placeholders:
                        <br>&nbsp;&nbsp;- <code>{discordUserID}</code>: Discord user ID of the applicant
                        <br>• Refer to "Best Practices" for creative usage examples
                    </li>
                    <li><strong>noAnswerMessage</strong>
                        <br>• Custom message for unanswered questions
                    </li>
                    <li><strong>skipEmptyResponses</strong>
                        <br>• Set to true to hide empty responses
                        <br>• Set to false to show all responses
                    </li>
                    <li><strong>discordEmbedColor</strong>
                        <br>• Set embed color using hex color code (e.g., "#5865f2") or leave default value if preferred
                    </li>
                </ul>
            </li>
        </ol>
    </li>
    <br>
    <!-- Step 6 -->
    <li>
        <strong>Trigger Setup</strong>
        <ol>
            <li>Navigate to the "Triggers" page by clicking the <code>Triggers</code> option (alarm clock icon) on the left side of the screen</li>
            <li>
                Click the <code>Add Trigger</code> button in the bottom right corner of the screen. Update the settings as shown in the image below, and then save your changes.<br>
                <a rel="noopener">
                    <img alt="Trigger Configuration" align="center" src="https://github.com/mouryaabhay/Google_Form_Response_To_Discord/assets/158826825/3a9ec28e-8878-48fa-9282-d466e8d54529">
                </a>
            </li>
            <br>
        </ol>
    </li>
    <br>
    <!-- Step 7 -->
    <li>
        <strong>Testing the Integration</strong>
        <ol>
            <li>Click the <code>▷ Run</code> button to test the setup</li>
            <li>Note: You'll need at least one form submission to test properly, as the script uses the most recent response</li>
        </ol>
    </li>
</ol>
<br>

<h1></h1>
<h3>📋 Best Practices</h3>

<ol type="I">
    <li>
        <strong>Form Submissions Organization</strong>
        <p>Use tags to easily categorize and track form status:</p>
        <ul>
            <li><strong>🔍 Pending Review:</strong> For submissions awaiting evaluation</li>
            <li><strong>👀 Under Review:</strong> For applications currently being evaluated</li>
            <li><strong>❓ Needs More Info:</strong> For applications or requests that require additional information</li>
            <li><strong>⚠️ Suspicious:</strong> To flag submissions that require further investigation</li>
            <li><strong>📅 Scheduled Interview:</strong> For submissions that have progressed to the interview stage</li>
            <li><strong>❌ Rejected:</strong> For submissions that do not meet the necessary criteria</li>
            <li><strong>✅ Approved:</strong> For submissions that have been successfully accepted</li>
            <li><strong>📁 Archived:</strong> For completed applications that can be stored for future reference</li>
        </ul>
    </li>
    <li>
        <strong>Message Customization Tips</strong>
        <ul>
            <li><strong>Staff Notification</strong>
                <br>• Use <code><@&ROLE_ID></code> to mention staff roles
                <br>• Example: <code>Hey <@&1234567890123456789>, new submission!</code>
            </li>
            <li>Hidden Text format:
                <br>• I’ve demonstrated its use in 'Config.gs' for reference.
                <br>• Please use it responsibly!
                <br><pre><code>[Text to show] ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ [Text to hide]</code></pre>
            </li>
        </ul>
    </li>
</ol>

<h1></h1>
<h3>🔍 Troubleshooting: Common Issues</h3>
<ol>
    <li>
        <strong>Webhook not working</strong>
        <br>• Webhook URL is valid and correctly copied (should start with <code>https://discord.com/api/webhooks/</code>)
        <br>• Webhook hasn't been deleted or regenerated in Discord
        <br>• The channel where webhook was created still exists
        <p><strong>Fix:</strong> Try creating and using a new webhook if issues persist.</p>
    </li>
    <li>
        <strong>Script errors</strong>
        <br>• Ensure that on the right of <code>Debug</code> button, <code>onSubmit</code> is selected
        <br>• Ensure all required variable values are properly configured
        <br>• Check trigger configuration
    </li>
</ol>

<h1></h1>

> [!CAUTION]
> ## ⚠️ Version 1 Deprecated
> **V1 of this project is no longer supported or updated.**
> Please use **V2** from this repository for all new setups.

> [!IMPORTANT]
> Need help? Join our Discord servers:
> - Creation Guide: https://discord.com/invite/E4KRWJW49B
>
> For technical issues:
> - Create a GitHub issue
> - Include error messages
> - Provide steps to reproduce

![Views](https://hits.sh/github.com/mouryaabhay/Google-Form-Response-To-Discord.svg?label=Total%20Views)
