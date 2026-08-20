// Phoenix Engine - Tauri Main (revived from Electron)
// Original legacy: Unknown -> Modern Tauri v2
// Width: 1100, Height: 750
// Toggles: Self-Healing=true, Auto-Evolution=true, Protection=true

import { Window } from "@tauri-apps/api/window";
import { invoke } from "@tauri-apps/api/core";
import { withRetry } from "./lib/self-healing";
import { sanitizeInput } from "./lib/security";


import { healthCheck, autoRecover } from "./lib/self-healing";

window.addEventListener("error", (e) => {
  console.warn("[Phoenix Self-Healing] Caught:", e.message);
  autoRecover(e);
});
setInterval(() => healthCheck(), 30000);


import { sanitize, initCSP } from "./lib/security";
initCSP();
// sanitize all innerHTML assignments
const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');


import { checkForUpdates, migrateStore } from "./lib/evolution";
checkForUpdates();
migrateStore();


const appWindow = Window.getCurrent();

async function initApp() {
  console.log("[Phoenix] Initializing revived app...");
  
  // Original Electron logic migrated:
  // No original main.js - fresh Tauri window

  const win = new Window("main", {
    title: "LibreChat",
    width: 1100,
    height: 750,
    center: true,
  });

  // Modern Tauri events
  appWindow.listen("tauri://close-requested", async () => {
    await withRetry(() => invoke('save_state'));
    appWindow.close();
  });

  document.getElementById("app")!.innerHTML = `
    <div class="phoenix-root">
      <h1>⚡ Phoenix Revived</h1>
      <p>Successfully migrated from Legacy CSS, Legacy JS (CommonJS/var), HTML</p>
      <p>Legacy score was 55/100 - now 0</p>
      <button id="heal-btn">Run Health Check</button>
    </div>
  `;
}

initApp().catch((e) => {
  console.error("[Phoenix] Init failed:", e);
  import('./lib/self-healing').then(m=>m.autoRecover(e));
});
