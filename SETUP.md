# Qoder setup for the ThutoTech website (~10 minutes)

This folder contains everything Qoder needs to take over updates of **www.thutotech.co.za** safely.

## Contents
- `AGENTS.md` — full project brief (what ships, brand tokens, copy/compliance rules, punch list, the edit protocol that prevents the `index.html` corruption that happened before). Qoder reads it automatically.
- `.qoder/rules/site-guardrails.md` — an always-on Qoder Project Rule reinforcing the safety protocol.

## Steps

### 1. Get your GitHub access working in Qoder
- Qoder → sign in / connect GitHub when prompted (Settings → account, or the Git panel).
- Your site lives at `Reggie9102/Thuto-Technologies-PTY-LTD` (public repo, GitHub Pages via CNAME).

### 2. Clone locally
In a terminal:
```
git clone https://github.com/Reggie9102/Thuto-Technologies-PTY-LTD.git
```

### 3. Drop in the config
These three files (`AGENTS.md`, `.qoder/rules/site-guardrails.md`, `SETUP.md`) are already committed to `main` — cloning the repo gets them automatically. If you cloned before they were added, just `git pull`.

### 4. Open in Qoder
- File → Open Folder → the repo. Qoder will index the codebase (wait until indexing finishes — status shows in the bottom bar).

### 5. Verify the rules loaded
- Open Chat (⌘L / Ctrl+L) and ask: *"What are the edit rules for index.html in this project?"*
- It should describe: targeted edits only, size/card-count checks, no whole-file rewrites. If not, open Qoder Settings (⌘⇧, / Ctrl+Shift+,) → Rules → confirm **site-guardrails** exists as a **Project Rule** set to **Always Apply** (create it and paste the file's contents if the repo copy wasn't picked up).

### 6. Test preview workflow
In Qoder's terminal: `python3 -m http.server 4000` → open http://localhost:4000. No npm/build needed.

### 7. Commit + push = deploy
Pushing `main` publishes to www.thutotech.co.za within a minute (GitHub Pages). Tell Qoder explicitly when to push.

## Suggested first task (instead of the one that failed)
The previous tool destroyed `index.html` while jumping straight from 10 → 20 product cards in one rewrite. In Qoder, do it incrementally; paste this as the first prompt:

> Read AGENTS.md first. Plan (don't implement yet) how we grow the ecosystem grid from 10 to 20 product cards, including FundisaWork/FundaWork, with correct statuses and legal attribution. Give me the card list as a table (name, layer, status, accent color, link) for approval. After I approve, edit index.html in batches of 3–4 cards, running the verification checks from AGENTS.md after each batch, and commit each batch.

Also flag for Qoder: the Agentic AI Course link (`apps/agentic-ai-course/`) is a 404 — decide whether to build that page or repoint the link.

## Optional extras once it's working
- **Extensions tab in Qoder**: the marketplace (as in your screenshot) has useful dev plugins for this repo — **Context7** (current framework docs) and **Chrome DevTools** (inspect the rendered page) are the two worth having for a static site. The Office/IM ones you already have don't apply here.
- **Quest mode**: good for the multi-batch 10→20 rebuild once you trust the guardrails.
