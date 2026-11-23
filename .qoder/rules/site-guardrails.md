---
trigger: always_on
---

# ThutoTech site guardrails

1. This repo is plain static files on GitHub Pages. No build step. Do not run npm install/build or add dependencies for site changes.
2. `index.html` is one ~66 KB self-contained file. NEVER regenerate it whole. Make targeted block-level edits only (read AGENTS.md "Non-negotiable edit protocol" and follow it exactly).
3. After every edit to `index.html`, before committing: check file size (±20% of pre-edit), check `grep -c 'class="product-card"'` equals the intended card count, and `head -c 200 index.html` to confirm it is still valid HTML. If any check fails, revert the file with `git checkout -- index.html` and report instead of repairing blindly.
4. Do not touch: `CNAME`, `app/`, `components/`, `next.config.js`, root `package.json` (dead Next.js prototype).
5. Reuse the existing CSS variables and component classes in `index.html`; do not introduce new hex colors, fonts, or icon libraries.
6. Never invent statuses (LIVE/PILOT/BUILDING), company registrations, partnerships, or compliance claims. Ask the user.
7. Push to `main` only when the user explicitly says to deploy — a push goes live immediately.
