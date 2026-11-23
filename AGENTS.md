# ThutoTech Website — Agent Guide

Project: www.thutotech.co.za (marketing/home site + static sub-apps)
Repo: github.com/Reggie9102/Thuto-Technologies-PTY-LTD (branch `main`)
Owner: Reggie (Reginald Mathule), Founder

## What actually ships (read this first)

The live site is **plain static files on GitHub Pages**. There is **no build step**.

| Path | Role |
|---|---|
| `index.html` | The marketing home page. One self-contained file (~66 KB): inline `<style>`, inline JS, CDN-only deps (Google Fonts, Font Awesome 6.5.1). **This is what renders at www.thutotech.co.za.** |
| `apps/*/` | Static micro-sites linked from home. Each has its own `index.html`. Present: CampusLift, City-Community, Thuto-AI-Academy, Thuto-Research-Studio, Township-Community, fundisa-ai, legal-platform, matricmate-ai, studentmart-port. |
| `CNAME` | Pins the domain to www.thutotech.co.za. Do not touch. |
| `mcp/` | Standalone Node MCP server (Express + CORS, Dockerfile). Independent of the Pages site. |
| `app/`, `components/`, `utils/`, `next.config.js`, root `package.json` | **Abandoned Next.js prototype. NOT deployed. Leave alone** unless the user explicitly asks to revive or delete it. |
| `README.md` | Stale (references a missing `thutotech-secondary.svg`). Low priority. |

Deployment = `git push origin main` → GitHub Pages serves the repo root. Nothing else.

## Brand system (defined in `index.html` :root — reuse these tokens, never hardcode new hexes)

- `--corporate-navy: #0A2E5A` (primary), `--harvest-gold: #D4AF37` (accent/CTA), `--vibrant-orange: #FF6B35`, `--market-cyan: #28A9E1`, `--research-blue: #1E3A8A`, `--ecosystem-emerald: #28A492`
- Fonts: headings **Space Grotesk**, body **Inter** (Google Fonts CDN)
- Icons: Font Awesome 6 free (`fas fa-*`)
- Radius tokens `--radius/-lg/-xl`, shadow tokens `--shadow-sm/md/lg`, transition token
- Component classes already exist: `.product-card` (with `data-accent="gold|orange|cyan|emerald|research|navy"`), `.section-tag`, `.status-pill live|beta|pilot|roadmap`, `.btn-primary/.btn-outline/.btn-navy`, `.hero-badge`, `.flywheel-step`, `.roadmap-item`, `.credential`
- Responsive breakpoints: 1024px and 768px (match them; site is mobile-checked)

## Copy & compliance rules

- Facts that must stay verbatim: "A REGGIE EXPRESS Company", Reggie Express (Pty) Ltd Reg **K2024698680**; FUNDISA.AI (Pty) Ltd **[2026/442896/07]**, CTO Mpho Makhuvha; claims of POPIA-compliance, offline-first, 11 SA languages, CAPS-alignment, PhD-backed founder.
- Hero stat `<h3>10</h3>` must always equal the real number of `.product-card` blocks; keep the "Ten products" intro paragraph in sync if the count changes.
- Never invent product statuses (LIVE/PILOT/BUILDING), client names, partnerships, or regulatory claims. Ask the user.
- External links in cards: fundisaai.co.za, studentmart.co.za, chat.qwen.ai deep link for ThutoBots — keep working.

## Known issues (punch list)

1. `index.html` links to `apps/agentic-ai-course/` (Agentic AI Course card + CTA) but **that folder does not exist in the repo → 404**. Either create the course page or point the link at an existing asset. Confirm with user which.
2. Orphan floating button "Launch TownshipMart 🚀" is hardcoded inline at top of `<body>` — keep unless user asks to restyle.
3. Root README.md broken image ref (see above).

## Work in progress / next task (user will confirm scope)

Rebuild the ecosystem product grid from **10 → ~20 assets**, including adding **FundisaWork/FundaWork** entries and correcting scope, provenance, and legal attribution per product. A previous automated attempt at this at https://github.com/Reggie9102/Thuto-Technologies-PTY-LTD/commit/6ef88f0 **destroyed `index.html`** (commit contains 8 bytes of binary garbage; a later commit restored the old page from history). The intended 20-asset content was never saved anywhere. Re-plan it fresh with the user.

## Non-negotiable edit protocol for index.html

Single large inline-styled files are fragile with AI editing. Follow this exactly:

1. `git status` must be clean before starting; commit working checkpoints as you go.
2. **Never rewrite the whole file** from regenerated text. Use targeted find/replace edits on discrete blocks (one card, one CSS rule, one section at a time).
3. After every edit batch, verify before committing:
   - `wc -c index.html` — must stay within ±20% of the pre-edit size unless content was intentionally added/removed; if it drops below ~50 KB, STOP and diff against HEAD.
   - `grep -c 'class="product-card"' index.html` — must equal the intended card count.
   - First 15 lines and last 5 lines of the file still look like HTML (no binary junk): `head -c 200 index.html`.
   - If `tidy` is available: `tidy -q -e index.html` for parse errors.
4. One logical change = one commit with a clear message. Push to `main` only when the user says to deploy (push publishes live immediately).
5. If a verification step fails: `git checkout -- index.html` and report; do not attempt blind repairs.

## Commands

- Local preview: `python3 -m http.server 4000` at repo root, then http://localhost:4000
- No npm install / build needed (root `package.json` belongs to the dead prototype)
