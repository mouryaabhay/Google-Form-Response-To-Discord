# Contributing

Thanks for taking the time to contribute — this is a small project, so the process is intentionally lightweight.

## Project layout

- [`apps-script/`](apps-script/) — `Code.gs` / `Config.gs`, the Google Apps Script itself. Users copy these into their own Apps Script project.
- [`ui/`](ui/) — a static, no-build Config Builder page (`index.html` / `style.css` / `app.js`). It embeds a copy of `Code.gs` (base64-encoded, inside `app.js`) so it can generate a combined file without a network fetch. **If you change `apps-script/Code.gs`, you must regenerate that embedded copy** — see below.

## Branches

- `main` holds the current release only.
- `dev` is where active work happens. Open pull requests against `dev`, not `main`.

## Making a change to Code.gs / Config.gs

1. Edit `apps-script/Code.gs` and/or `apps-script/Config.gs` directly.
2. If you changed `Code.gs`, re-embed it into the UI so the Config Builder stays in sync:
   ```bash
   B64=$(base64 -w0 apps-script/Code.gs)
   node -e '
     const fs = require("fs");
     const b64 = fs.readFileSync("/dev/stdin", "utf8").trim();
     let app = fs.readFileSync("ui/app.js", "utf8");
     app = app.replace(/const CODE_GS_B64 = "[^"]*";/, "const CODE_GS_B64 = " + JSON.stringify(b64) + ";");
     fs.writeFileSync("ui/app.js", app);
   ' <<< "$B64"
   ```
3. Verify the embedded copy matches exactly:
   ```bash
   node -e '
     const fs = require("fs");
     const app = fs.readFileSync("ui/app.js", "utf8");
     const b64 = app.match(/\nconst CODE_GS_B64 = "(.*)";/)[1];
     const decoded = Buffer.from(b64, "base64").toString("utf8");
     console.log("match:", decoded === fs.readFileSync("apps-script/Code.gs", "utf8"));
   '
   ```
   This should print `match: true`. Do not hand-edit the `CODE_GS_B64` constant — it's long enough that manual edits reliably introduce silent corruption.
4. Update the README's [Configuration Reference](README.md#️-configuration-reference) table if you added, removed, or renamed a config variable, and update `ui/index.html` / `ui/app.js` to match.

## Making a change to the Config Builder UI

`ui/` has no build step — open `ui/index.html` directly in a browser (or serve the folder with any static file server) to test changes. There's no framework; it's plain HTML/CSS/JS styled to look like shadcn/ui.

Things to check before opening a PR:
- Both light and dark themes
- Desktop (side-by-side form/code) and mobile (tabbed) layouts
- The generated code is still valid — paste it into a scratch Apps Script project if you're unsure

## Commit messages

Explain *why*, not just *what*, when the reason isn't obvious from the diff. No fixed format required.

## Pull requests

- Target `dev`.
- Keep PRs focused — unrelated cleanup makes review harder.
- Describe what you tested (a screenshot for UI changes is appreciated).

## Reporting bugs / requesting features

Open a [GitHub issue](https://github.com/mouryaabhay/Google-Form-Response-To-Discord/issues) with your form structure, `Config.gs` values (with the webhook URL redacted), and the exact error or behavior you're seeing.
