# ceppty-site

Сайт приложения Ceppty — `ceppty.nl`: главная, политика конфиденциальности и поддержка, nl (`/`) и en (`/en/`). Кода приложения здесь нет.

Vue 3 + Vite, страницы собираются заранее в готовый HTML (`vite-ssg`) и оживают в браузере (D-290 в репозитории приложения). Хостинг — наш VPS в ЕС, nginx отдаёт `dist/` (D-270).

## Правила

- **Без кук и `localStorage`** — баннер согласия не нужен. Язык — только по адресу.
- **Без аналитики и счётчиков.**
- **Ничего с чужих доменов:** шрифты — из `@fontsource` (кладутся в сборку), картинки — в `public/`. Никаких встроенных виджетов.
- **Текст политики** (`src/content/Privacy*.vue`) — юридический: меняется только вместе с `docs/store-privacy.md` приложения.
- **Значки App Store и Google Play** — места под них в `src/components/StoreBadges.vue`; официальные файлы ставятся, когда приложение появится в магазинах.

## Команды

```bash
npm ci
npm run dev       # локально, http://localhost:5173
npm run build     # готовый сайт в dist/
npm run preview   # посмотреть сборку
```

## Выкладка

Готовый сайт лежит на сервере в `/srv/ceppty/site` (D-270), nginx отдаёт его как есть. `dist/` в репозиторий не коммитится.

### Автоматически (сервер сам забирает `main`)

GitHub Actions не используются. Раз в 5 минут таймер на VPS проверяет `main`; есть новый коммит — собирает и подменяет сайт (`deploy/update-site.sh`). Ключей не нужно: репозиторий публичный.

Установка один раз (под root; нужны `git`, `rsync`, Node.js 20+ и пользователь `ceppty`):

```bash
curl -fsSL https://raw.githubusercontent.com/NorwenAdmin/ceppty-site/main/deploy/update-site.sh -o /srv/ceppty/update-site.sh
chmod 755 /srv/ceppty/update-site.sh
mkdir -p /srv/ceppty/site /srv/ceppty/site-src /srv/ceppty/.home && chown ceppty:ceppty /srv/ceppty/site /srv/ceppty/site-src /srv/ceppty/.home
curl -fsSL https://raw.githubusercontent.com/NorwenAdmin/ceppty-site/main/deploy/ceppty-site.service -o /etc/systemd/system/ceppty-site.service
curl -fsSL https://raw.githubusercontent.com/NorwenAdmin/ceppty-site/main/deploy/ceppty-site.timer -o /etc/systemd/system/ceppty-site.timer
systemctl daemon-reload && systemctl enable --now ceppty-site.timer
systemctl start ceppty-site.service && journalctl -u ceppty-site.service -n 20
```

Скрипт сам себя не обновляет: изменили `deploy/update-site.sh` — повторить первые две строки.
