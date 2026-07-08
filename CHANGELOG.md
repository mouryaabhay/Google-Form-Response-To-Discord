# Changelog

All notable changes to this project are documented here. Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased] (on `dev`)

### Added
- Visual Config Builder (`ui/`) — a static, no-build page that generates a ready-to-paste `Code.gs` from a form, with light/dark theming, live syntax-highlighted preview, and Copy/Download actions
- `embedDescriptionTemplate`, `embedFieldValuePrefix`, and `EMBED_COLORS` are now configurable in `Config.gs` instead of hardcoded in `Code.gs`
- Embed colors can be a single fixed color or a custom pool of colors to pick from at random, in addition to the built-in 20-color default palette
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, this changelog, and a `.gitignore`

### Changed
- Repo structure flattened: `Code.gs` / `Config.gs` moved from `Google_Apps_Script_V2/` to the repo root; the deprecated `Google_Apps_Script_V1/` folder was removed
- Renamed config variables for clarity: `userIDQuestion` → `userIdQuestionNumber`, `usernameQuestion` → `usernameQuestionNumber`, `discordThreadNamePart` → `threadNameStaticText`, `messageContent` → `submissionMessageContent`
- `getNextEmbedColor()` now picks randomly instead of cycling sequentially
- README setup instructions and configuration reference updated to match

### Fixed
- `discordMessageContent` was read out of scope in `sendEmbedToDiscordWithFallback()`, throwing a `ReferenceError` on every real form submission — now passed as a parameter
- Broken "Views" badge in the README (GitHub's image proxy was stuck on a failed fetch of the old hits.sh badge) — replaced with a working alternative

## [Released]

The commit tagged as the current `main` release consolidates the fixes from the last active development period: implicit-global fix in `onSubmit()`, `validateConfig()` webhook validation, Discord HTTP error logging, removal of hidden zero-width-space characters from `Config.gs`, and a full README rewrite.

Earlier per-feature history (forum tags, user ID mentions, thread naming options, etc.) predates this changelog — see the git history on `dev` for the full record.
