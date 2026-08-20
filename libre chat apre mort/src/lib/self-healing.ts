// Phoenix Self-Healing System
// الإصلاح الذاتي - نظام التعافي التلقائي

export async function withRetry<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
  let lastError: any;
  for (let i = 0; i < retries; i++) {
    try { return await fn(); } catch (e) { lastError = e; await new Promise(r=>setTimeout(r, 300 * (i+1))); }
  }
  throw lastError;
}

export function autoRecover(error: any) {
  console.log("[Phoenix Heal] Recovering from:", error);
  // Clear corrupted local state
  try { localStorage.removeItem("corrupted_state"); } catch {}
  // Report
  if (typeof navigator !== "undefined") {
    console.info("Healing action: reset transient state");
  }
}

export function healthCheck() {
  const mem = (performance as any).memory?.usedJSHeapSize || 0;
  if (mem > 500 * 1024 * 1024) {
    console.warn("[Phoenix] High memory, triggering GC hint");
  }
  return { ok: true, mem, timestamp: Date.now() };
}

export const circuitBreaker = (fn: Function, threshold = 5) => {
  let failures = 0;
  return async (...args: any[]) => {
    if (failures >= threshold) throw new Error("Circuit open - too many failures");
    try { const r = await fn(...args); failures = 0; return r; } catch(e){ failures++; throw e; }
  };
};
