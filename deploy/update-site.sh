#!/bin/sh
# Обновление ceppty.nl на VPS (D-270): сервер сам забирает `main` из
# публичного репозитория, собирает и подменяет сайт. Ключей не нужно.
# Запускается таймером `ceppty-site.timer` от пользователя `ceppty`.
set -eu

REPO=https://github.com/NorwenAdmin/ceppty-site.git
SRC=/srv/ceppty/site-src
OUT=/srv/ceppty/site

if [ ! -d "$SRC/.git" ]; then
  git clone --quiet --depth 1 "$REPO" "$SRC"
  FORCE=1
fi
cd "$SRC"
git fetch --quiet --depth 1 origin main
if [ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] && [ -z "${FORCE:-}" ] && [ -f "$OUT/index.html" ]; then
  exit 0
fi
git reset --quiet --hard origin/main
npm ci --silent --no-audit --no-fund
npm run --silent build
# Новые файлы — сначала, старые убираются в конце: сайт не пропадает посреди обновления.
rsync -a --delay-updates --delete-after dist/ "$OUT/"
echo "ceppty.nl обновлён до $(git rev-parse --short HEAD)"
