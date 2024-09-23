New Update: Comming Soon!

---

<h1 align = "center">Google Form Response To Discord Channel</h1>
<h3 align = "center">This guide will show you how to automatically send responses from your Google Form to a specific Discord channel. It's a simple process that requires some initial setup.</h3>
<br>

## 1. Create a Google form
- **Tip:** It's recommended to ask for the user's Discord username as the second question.

## 2. Open the Script Editor
- Click " **⋮** " (aka Meatballs Menu).
- Select "Script editor".
<a href="#" target="_blank" rel="noopener">
      <img alt="Script editior" align="center" src="https://github.com/mouryaabhay/Google_Form_Response_To_Discord/assets/158826825/cf5752f9-25af-4915-89c2-5195b99e5326">
</a>

## 3. Paste the following script given in the below file:
- [Google Form Response To Discord Script](google_script.js)

## 4. Create a webhook in the Discord channel you want the form results sent to
- This can be found by opening the channel settings (⚙ icon) and going to Webhooks.

## 5. Modify the specified values in the script
- Copy the webhook URL from the webhook you created into the script, replacing the "webhook_url".
- **NOTE**: Only text between double quotes (**""**) must be changed!
  - Change webhookUsername value if you want.
  - Set postTitle
  - Change embedColor value to whatever color you want or keep it as it is.
  - You can change the values of "Optional" field or keep it as it is (This is optional).

## 6. Test your code
- Save your file and then press the "**▷ Run**" button to test your code.
- Make sure your form has at least 1 response. This test will always pull the last submitted response.

## 7. Add a Trigger
- Lastly, we need to add a trigger so this script is excecuted when a new form is submitted.
- On the left pane, click the "Triggers" icon that looks like an alarm clock, then press "Add Trigger".
- Make sure to set everything as shown in the image below.
<a href="#" target="_blank" rel="noopener">
      <img alt="Trigger" align="center" src="https://github.com/mouryaabhay/Google_Form_Response_To_Discord/assets/158826825/3a9ec28e-8878-48fa-9282-d466e8d54529">
</a>

- Click Save.

<h3 align = "center">Your Google Form should now be connected to your Discord channel 🎉</h3>

---

### 📝 Additional Tips:
As this script is written with respect to Discord forum channel type, you can use the following tags in the forum to organise the forms:
- Pending Review
- Suspicious
- Rejected
- Scheduled Interview
- Approved