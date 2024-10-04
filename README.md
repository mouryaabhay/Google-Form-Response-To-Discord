<!-- Title & Description -->
<h1></h1>
<h1 align="center">Google Form Responses to Discord</h1>
<h3 align="center">
    This guide will walk you through the steps to automatically send responses from your Google Form to a designated Discord channel. Whether you're gathering feedback, organizing events, or collecting data, integrating Google Forms with Discord can streamline your workflow.
</h3>

<!-- Why Use This Script -->
<h1></h1>
<h3>🤔 Why Use This Script? What Improvements Are Made?</h3>
<ul>
    <li>Offers faster execution than previous versions.</li>
    <li>Doesn’t stop the execution of script if it encounters a long passage that exceeds Discord's embed limits.</li>
    <li>Automatically truncates questions and responses that go over Discord's embed limits.</li>
    <li>Sends separate embed messages for each section of the Google Form, allowing for more content in one embed.</li>
    <li>Improved presentation of questions and responses.</li>
    <li>If a user enters multiple passages in their response, the script presents them as bullet points.</li>
    <li>Handles various response types from Google Forms.</li>
</ul>

<!-- Prerequisites -->
<h1></h1>

> [!NOTE]
> - Ensure your form includes a question for the applicant's Discord username, ideally positioned as the second question, since it will be used for the thread title.
> - Keep the question on a single line; using markdown in the embed field for multi-line text may not render properly on desktop or web clients. Multi-line questions won’t cause execution issues, but they can affect how the content appears.
> - Use a Discord webhook specifically of forum channel, as this script is tailored with that channel type in mind.

<!-- Steps-by-Step Instructions -->
<h1></h1>
<h3>📝 <u>Steps to Set Up the Google Script</u></h3><br>
<ol>
    <li>  <!-- Step 1 -->
        <strong>Create a Google Form</strong>
        <p>Create a google form by visiting https://form.new/</p>
    </li><br>
    <li>  <!-- Step 2 -->
        <strong>Open the Script Editor</strong>
        <p>Click the ' <strong>⋮</strong> ' (Meatballs Menu) and select "Script editor".</p>
    </li><br>
    <li>  <!-- Step 3 -->
        <strong>Creating Files & Pasting the Google Script</strong>
        <ol>
            <li>  <!-- Step 3.1 -->
                <strong>Opening Existing Script: Code.gs</strong>
                <ol>
                    <li>Navigate to the <a href = "Google_Apps_Script_V2\Code.gs">Code.gs</a> file in this repo and copy the code within it.</li>
                    <li>When you open the Google Apps Script editor, within the Files section of left, you'll find a file named "Code.gs" by default.</li>
                    <li>Navigate to "Code.gs", delete the existing code, paste in the new code you copied earlier and save it.</li>
                    <li>On the right of "<strong>Debug</strong>" button, select "<strong>onSubmit</strong>".</li>
                </ol>
            </li>
            <li>  <!-- Step 3.2 -->
                <strong>Creating a New Script: Config.gs</strong>
                <ol>
                    <li>Navigate to the <a href = "Google_Apps_Script_V2\Config.gs">Config.gs</a> file in this repo and copy the code within it.</li>
                    <li>In the Google Apps Script editor, click the ' <strong>+</strong> ' icon in the "<strong>Files</strong>" section. Then, select 'Script' to create a new file and name it "Config.gs".</li>
                    <li>Navigate to "Config.gs", delete the existing code, paste in the new code you copied earlier and save it.</li>
                </ol>
            </li>
        </ol>
    </li><br>
    <li>  <!-- Step 4 -->
        <strong>Create a Discord Webhook</strong>
        <ol>
            <li>Navigate to the Discord forum channel where you want the form submission responses to appear.</li>
            <li>Click on Edit Channel (gear icon) and Go to Integrations > Webhooks.</li>
            <li>Create a new webhook and edit the webhook’s name and icon as desired.</li>
            <li>Copy the webhook link for later use.</li>
        </ol>
    </li><br>
    <li>  <!-- Step 5 -->
        <strong>Update the variable values in "Config.gs"</strong>
        <ol>
            <li>Replace the text 'YOUR_WEBHOOK_URL' with the webhook URL copied earlier.</li>
            <li>List of variables available configurable:
                <ul type = "disc">
                    <li>'YOUR_WEBHOOK_URL' must be updated.</li>
                    <li>Please keep the 'usernameQuestion' value unchanged. I recommend placing the username question second, as its current value is 2. If you move it to the first position, you'll need to change the value to 1.</li>
                    <li>
                        You can change the 'discordThreadNameSuffix' to whatever you’d like for the thread name.
                        <br>&nbsp;&nbsp;&nbsp;&nbsp;• Example thread name based on the default value:
                        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@dynasticcreator Submitted a Form!
                    </li>
                    <li>Customize the 'messageContent' to fit your needs! I have mentioned a few ideas below, including mentioning the staff role for notifications when a form is submitted, or you can get creative and think outside the box!</li>
                    <li>Update the 'embedColor' value to your preferred color using a hex color code, or you can leave it as the default.</li>
                </ul>
            </li>
        </ol>
    </li><br>
    <li>  <!-- Step 6 -->
        <strong>Add a Trigger</strong>
        <ul>
            <li>Navigate to the "Triggers" page by clicking the "Triggers" option (alarm clock icon) on the left side of the screen.</li>
            <li>
                Click the "Add Trigger" button in the bottom right corner of the screen. Update the settings as shown in the image below, and then save your changes.<br>
                <a rel="noopener">
                    <img alt="Trigger Configuration" align="center" src="https://github.com/mouryaabhay/Google_Form_Response_To_Discord/assets/158826825/3a9ec28e-8878-48fa-9282-d466e8d54529">
                </a>
            </li><br>
        </ul>
    </li><br>
    <li>  <!-- Step 7 -->
        <strong>Testing the Setup Operation</strong>
        <ol>
            <li>Save your script, then click the "<strong>▷ Run</strong>" button to test it.</li>
            <li>Make sure your form has at least one response, as the test retrieves the latest submitted response.</li>
        </ol>
    </li><br>
</ol>

<h1></h1>
<h3>📝 Additional Tips & Resources for Organizing Forum Responses:</h3>

<ol type="I">
    <li>
        <strong>Organizing Form Submissions with Tags</strong>
        <p>Effectively managing submissions in Discord’s forum channel can significantly improve your workflow. By utilizing the tag feature, you can easily categorize and track responses. Below is a list of recommended tags along with their purposes:</p>
        <ul>
            <li><strong>Pending Review:</strong> For submissions awaiting evaluation.</li>
            <li><strong>Under Review:</strong> For applications currently being evaluated.</li>
            <li><strong>Needs More Info:</strong> For applications or requests that require additional information.</li>
            <li><strong>Suspicious:</strong> To flag submissions that require further investigation.</li>
            <li><strong>Scheduled Interview:</strong> For submissions that have progressed to the interview stage.</li>
            <li><strong>Rejected:</strong> For submissions that do not meet the necessary criteria.</li>
            <li><strong>Approved:</strong> For submissions that have been successfully accepted.</li>
            <li><strong>Archived:</strong> For completed applications that can be stored for future reference.</li>
        </ul>
        <p>By implementing these tags, you can ensure a smoother review process and enhance communication among team members. Feel free to adjust these categories as needed to best suit your specific requirements!</p>
    </li>
    <li>
        <strong>'messageContent' Ideas</strong>
        <ul>
            <li>Notify all staff members by mentioning their role whenever a form is submitted.</li>
            <li>To creatively conceal links or roles while maintaining a clean message, consider using the following text for a more subtle approach. I’ve demonstrated its use in 'Config.gs' for reference. Please use it responsibly!<br><pre><code>[Text to show] ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ [Text to hide]</code></pre></li>
        </ul>
    </li>
</ol>

<h1></h1>

> [!IMPORTANT]
> - Support:<br>
>        For support requests, code updates, improvement ideas, or reporting bugs, please reach out via Discord for a quicker response. You can also create an issue on GitHub if needed.
>
> - Join my server to ask questions or get help:<br>
>     - Quack To Code: https://discord.com/invite/ekRDrTEES5<br>
>     - Creation Guide: https://discord.com/invite/E4KRWJW49B