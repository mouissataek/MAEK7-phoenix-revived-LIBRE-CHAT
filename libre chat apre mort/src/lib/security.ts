// Phoenix Protection System - الحماية
// CSP, Sanitization, Sandboxing

export function sanitizeInput(input: string): string {
  // Minimal sanitizer offline
  return input.replace(/<script[^>]*>.*?</script>/gi, "")
              .replace(/on\w+\s*=/gi, "")
              .replace(/javascript:/gi, "");
}

export function initCSP() {
  if (typeof document === "undefined") return;
  const meta = document.createElement("meta");
  meta.httpEquiv = "Content-Security-Policy";
  meta.content = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';";
  document.head.appendChild(meta);
}

export function validatePath(p: string): boolean {
  // Prevent path traversal
  return !p.includes("..") && !p.startsWith("/") && p.length < 256;
}

export const secureStore = {
  set(key: string, value: any) {
    try {
      const enc = btoa(JSON.stringify(value));
      localStorage.setItem(`phx_${key}`, enc);
    } catch {}
  },
  get(key: string) {
    try {
      const v = localStorage.getItem(`phx_${key}`);
      return v ? JSON.parse(atob(v)) : null;
    } catch { return null; }
  }
};
