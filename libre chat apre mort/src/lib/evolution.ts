// Phoenix Auto-Evolution System - التطور التلقائي

type Migration = { version: string; run: () => Promise<void> };

const migrations: Migration[] = [
  { version: "2.0.0", run: async () => {
    console.log("[Phoenix Evolution] Migrating to 2.0.0 - Tauri");
    // Example: convert old store format
  }},
  { version: "2.1.0", run: async () => {
    console.log("[Phoenix Evolution] Applying performance patches");
  }}
];

export async function migrateStore() {
  const current = localStorage.getItem("phx_version") || "1.0.0";
  for (const m of migrations) {
    if (m.version > current) {
      await m.run();
      localStorage.setItem("phx_version", m.version);
    }
  }
}

export async function checkForUpdates() {
  console.log("[Phoenix Evolution] Checking updates (offline stub - will check when online)");
  // In real Tauri: invoke('plugin:updater|check')
  return { available: false };
}

export const featureFlags = {
  isEnabled(flag: string): boolean {
    const flags: Record<string, boolean> = JSON.parse(localStorage.getItem("phx_flags") || "{}");
    return flags[flag] ?? true;
  }
};
