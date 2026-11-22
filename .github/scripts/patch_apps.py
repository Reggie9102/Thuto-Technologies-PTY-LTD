#!/usr/bin/env python3
"""TT/QW/DEPLOY/2026/011 — one-line provenance/MHC fixes in app pages (Card 07 note)."""
import io

def patch(path, old, new, count=1):
    with io.open(path, encoding="utf-8") as f:
        s = f.read()
    if old not in s:
        raise SystemExit("PATTERN NOT FOUND in %s: %r" % (path, old[:80]))
    s = s.replace(old, new, count)
    with io.open(path, "w", encoding="utf-8") as f:
        f.write(s)

# Legacy Mental Health Central anchor -> Student Support Suite (Card 07)
patch(
    "apps/Thuto-Research-Studio/index.html",
    '<li><a href="#" class="hover:text-thuto-gold">\U0001f49a Mental Health Central</a></li>',
    '<li><a href="https://chat.qwen.ai/s/deploy/t_7ece638a-5fbb-473d-b328-10dd4fdcf791" target="_blank" rel="noopener noreferrer" class="hover:text-thuto-gold">\U0001f49a Student Support Suite</a></li>',
)
patch(
    "apps/studentmart-port/index.html",
    "<h4>Mental Health Central</h4>",
    "<h4>Student Support Suite</h4>",
)
patch(
    "apps/studentmart-port/index.html",
    "<p>100% free student support. Zero compromise.</p>",
    "<p>Mental health, tutoring and academic support. POPIA-governed.</p>",
)
print("patched OK")
