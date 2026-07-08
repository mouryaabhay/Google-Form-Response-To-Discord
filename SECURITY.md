# Security Policy

## Reporting a Vulnerability

If you find a security issue in this project (the Apps Script, or the Config Builder UI), please **do not open a public GitHub issue**. Instead, report it privately via [GitHub's private vulnerability reporting](https://github.com/mouryaabhay/Google-Form-Response-To-Discord/security/advisories/new) for this repository, or reach out through the contact details on the [maintainer's profile](https://github.com/mouryaabhay).

Please include:
- A description of the issue and its impact
- Steps to reproduce
- Affected file(s) / version

You should get an initial response within a few days.

## Your Discord webhook URL is a secret

`DISCORD_WEBHOOK_URL` in `Config.gs` lets anyone who has it post messages to your Discord channel. Treat it like a password:

- Never commit a real webhook URL to a public repository (including forks, gists, or screenshots)
- If a webhook URL leaks, regenerate it immediately in Discord (**Edit Channel → Integrations → Webhooks**) — old URLs cannot be revoked individually otherwise
- The Config Builder (`ui/`) runs entirely in your browser; it does not transmit anything you type, including your webhook URL, anywhere

## Scope

This project is a client-side static page plus a Google Apps Script template that users deploy into their own Google account and Discord server. There is no shared backend or database to compromise — most "security" concerns here are about users protecting their own webhook URL and Apps Script deployment.
