#!/usr/bin/env bash
# TT/QW/DEPLOY/2026/011 — assembly script (runs on branch tt011-2, replay on restored main)
set -euo pipefail
git config user.name "Reggie9102"
git config user.email "reggie@thutotech.co.za"

BASE="https://br-hidden-scene-aseyqyiv.storage.c-4.eu-central-1.aws.neon.tech/tt011-deploy-staging"

echo "== Task 2: root grid =="
curl -fsSL "$BASE/root-index.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=nak_live_7c305033a3be44339e96e635e2227d57%2F20261122%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261122T134232Z&X-Amz-Expires=604800&X-Amz-Signature=c042286cb3047a01893e191b42e2697f476d1621d1ed8af8bfdbfb27974fbcd1&X-Amz-SignedHeaders=host" -o index.html
echo "befb29a661758c60ed6ecac137f6770e  index.html" | md5sum -c -
python3 .github/scripts/patch_apps.py
git add index.html apps/Thuto-Research-Studio/index.html apps/studentmart-port/index.html
git commit -m "feat: rebuild ecosystem grid to 20 assets; add FundisaWork/FundaWork; correct scope, provenance and legal attribution"

echo "== Task 3: agentic-ai-course =="
mkdir -p apps/agentic-ai-course
curl -fsSL "$BASE/agentic-ai-course.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=nak_live_8a48c572c2d8404a9ec281c45510b70e%2F20261122%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261122T134238Z&X-Amz-Expires=604800&X-Amz-Signature=35e9c66b4a8e907779a7e5183295f83dfccc3d0b447aca03f48174cbe8a00c19&X-Amz-SignedHeaders=host" -o apps/agentic-ai-course/index.html
echo "03a98b3253e9598191b3cf8ae2cabb67  apps/agentic-ai-course/index.html" | md5sum -c -
git add apps/agentic-ai-course/index.html
git commit -m "feat: deploy agentic-ai-course app (was missing, 404 resolved)"

echo "== Task 4: fundisawork =="
mkdir -p apps/fundisawork
curl -fsSL "$BASE/fundisawork.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=nak_live_22f098e0ab184fa3891bf9ed9e3ebae9%2F20261122%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261122T134246Z&X-Amz-Expires=604800&X-Amz-Signature=7e9bfa554ecd219095583da2eb673a8097b992ef315fdb73b05f4152fcb85f13&X-Amz-SignedHeaders=host" -o apps/fundisawork/index.html
echo "5d723c502cd9c8879344302444a1a5fc  apps/fundisawork/index.html" | md5sum -c -
git add apps/fundisawork/index.html
git commit -m "feat: add FundisaWork educator workspace shell"

echo "== Task 5: fundawork + service worker =="
mkdir -p apps/fundawork
curl -fsSL "$BASE/fundawork.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=nak_live_56edf774da024f908b8dbf23ef9f5701%2F20261122%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261122T134253Z&X-Amz-Expires=604800&X-Amz-Signature=4e1fc782fcd9ee529eec1c3f82efac19852f49bbb42f2400236d412eb33be382&X-Amz-SignedHeaders=host" -o apps/fundawork/index.html
curl -fsSL "$BASE/fundawork-sw.js?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=nak_live_ae07122f3fc84edc8b491e091a939629%2F20261122%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261122T134300Z&X-Amz-Expires=604800&X-Amz-Signature=cb00152498be9b3d4319fb2c91d1ce63f103e79155671ee904636b351e38be12&X-Amz-SignedHeaders=host" -o apps/fundawork/sw.js
echo "edbda530410afb99851bf1f154fef343  apps/fundawork/index.html" | md5sum -c -
echo "dc4908c38b73d0ba55f205e19684fd96  apps/fundawork/sw.js" | md5sum -c -
git add apps/fundawork/index.html apps/fundawork/sw.js
git commit -m "feat: add FundaWork learner workspace shell with offline service worker"

echo "== cleanup =="
git rm -r -q .github/scripts .github/workflows/assemble.yml ASSEMBLE 2>/dev/null || true
git rm -r -q chunks 2>/dev/null || true
git commit -m "chore: remove TT/QW/DEPLOY/2026/011 assembly scaffolding"
git push origin HEAD:tt011-2
echo "== done =="
