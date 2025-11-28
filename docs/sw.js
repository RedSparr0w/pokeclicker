self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin !== location.origin) return;

  // Match /preview/pr-NNN/...
  const match = url.pathname.match(/^\/preview\/pr-(\d+)\/(.+)$/);
  if (!match) return;

  const prNum = match[1];
  const rest = match[2];

  // Skip redirect for scripts or styles in the PR preview
  if (rest.startsWith("scripts/") || rest.startsWith("styles/")) {
    return; // let the request go to the PR version
  }

  const rewritten = `/${rest}`;
  console.log(`[SW] REWRITE (PR ${prNum}) →`, rewritten);

  event.respondWith(fetch(rewritten));
});

self.addEventListener("message", event => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
