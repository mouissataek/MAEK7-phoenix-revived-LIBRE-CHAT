# Phoenix Revived - LibreChat

> Revived via **Phoenix Engine - Offline Studio** / تم إحياؤه بواسطة محرك فينيكس

## What happened? / ماذا حدث؟

Your old project with **Legacy CSS, Legacy JS (CommonJS/var), HTML** (legacy score 55/100) has been migrated to modern Tauri + Vite + TypeScript.

- Original files: 4046
- Total size: 39.7 MB
- Detected: Legacy CSS, Legacy JS (CommonJS/var), HTML
- Old hints: Legacy CSS: LibreChat-main/client/src/mobile.css | Legacy CSS: LibreChat-main/client/src/style.css

## Modern Stack / الحزمة الحديثة

- **Tauri v2** - instead of Electron (80% smaller, Rust backend)
- **Vite + TypeScript** - instead of legacy JS/Clojure build
- **Modern CSS** - CSS variables, no vendor prefixes, responsive
- **Package.json** regenerated with security & performance

## Toggles Applied / الميزات المفعلة

- **Self-Healing / الإصلاح الذاتي**: ✅ Enabled - adds retry, circuit-breaker, auto-recovery
- **Auto-Evolution / التطور التلقائي**: ✅ Enabled - adds migrations, updater, feature flags
- **Protection / الحماية**: ✅ Enabled - CSP, sanitization, secure store, path validation

## Run / التشغيل

```bash
npm install
npm run tauri:dev
```

## Structure / الهيكل

- `src/main.ts` - Tauri main (revived from Electron main.js)
- `src/styles/modern.css` - Modern CSS + migrated legacy
- `src/lib/self-healing.ts` - Self-healing (if enabled)
- `src/lib/security.ts` - Protection (if enabled)
- `src/lib/evolution.ts` - Auto-evolution (if enabled)
- `src-tauri/tauri.conf.json` - Tauri config
- `index.html` - Entry

## Notes / ملاحظات

This project was generated 100% offline by Phoenix Engine. No data left your browser.
تم إنشاء هذا المشروع دون اتصال بالإنترنت بنسبة 100٪. لم تغادر أي بيانات متصفحك.

Original package.json preserved in comment:
```json
{
  "name": "LibreChat",
  "version": "v0.8.8-rc1",
  "description": "",
  "packageManager": "npm@11.13.0",
  "workspaces": [
    "api",
    "client",
    "packages/*"
  ],
  "scripts": {
    "update": "node config/update.js",
    "add-balance": "node config/add-balance.js",
    "set-balance": "node config/set-balance.js",
    "list-balances": "node config/list-balances.js",
    "user-stats": "node config/user-stats.js",
    "rebuild:package-lock": "node config/packages",
    "reinstall": "node config/update.js -l -g",
    "smart-reinstall": "node config/smart-reinstall.js",
    "b:reinstall": "bun config/update.js -b -l -g",
    "reinstall:docker": "node config/update.js -d -g",
    "update:local": "node config/update.js -l",
    "update:docker": "node config/update.js -d",
    "update:single": "node config/update.js -s",
    "update:sudo": "node config/update.js --sudo",
    "update:deployed": "node config/deployed-update.js",
    "rebase:deployed": "node config/deployed-update.js --rebase",
    "start:deployed": "docker compose -f ./deploy-compose.yml up -d || docker-compose -f ./deploy-compose.yml up -d",
    "stop:deployed": "docker compose -f ./deploy-compose.yml down || docker-compose -f ./deploy-compose.yml down",
    "upgrade": "node config/upgrade.js",
    "create-user": "node config/create-user.js",
    "invite-user": "node config/invite-user.js",
    "list-users": "node config/list-users.js",
    "reset-password": "node config/reset-password.js",
    "ban-user": "node config/ban-user.js",
    "delete-user": "node config/delete-user.js",
    "reset-meili-sync": "node config/reset-meili-sync.js",
    "update-banner": "node config/update-banner.js",
    "delete-banner": "node config/delete-banner.js",
    "backend": "cross-env NODE_ENV=production node api/server/index.js",
    "backend:inspect": "cross-env NODE_ENV=production node --inspect --expose-gc api/server/index.js",
    "backend:dev": "cross-env NODE_ENV=development npx nodemon api/server/index.js",
```
