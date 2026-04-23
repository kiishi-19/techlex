import { TERMS, CATEGORIES } from "./terms";

export interface Env {
  ASSETS: Fetcher;
  SUBSCRIBERS: KVNamespace;
  EMAIL_SENDER?: any; // send_email binding — optional so it doesn't break without Email Routing
}

// ── HELPERS ──────────────────────────────────────────────────────────────────

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Deterministic term picker: same day always gets same term across all subscribers
function termOfTheDay(): typeof TERMS[0] {
  const daysSinceEpoch = Math.floor(Date.now() / 86_400_000);
  return TERMS[daysSinceEpoch % TERMS.length];
}

// ── EMAIL TEMPLATE ────────────────────────────────────────────────────────────

function buildEmailHtml(term: typeof TERMS[0], unsubUrl: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>TechLex Daily — ${term.term}</title>
<style>
  body { margin: 0; padding: 0; background: #0f0f13; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
  .wrapper { max-width: 600px; margin: 0 auto; padding: 32px 16px; }
  .header { text-align: center; margin-bottom: 32px; }
  .logo { font-size: 24px; font-weight: 900; color: #a78bfa; letter-spacing: -0.03em; }
  .tagline { color: #888899; font-size: 13px; margin-top: 4px; }
  .card { background: #1a1a24; border: 1px solid rgba(139,92,246,0.25); border-radius: 16px; padding: 32px; margin-bottom: 24px; }
  .day-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #a78bfa; margin-bottom: 12px; }
  .term { font-size: 36px; font-weight: 900; color: #ffffff; letter-spacing: -0.03em; margin-bottom: 8px; }
  .category-badge { display: inline-block; background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.3); border-radius: 99px; padding: 3px 10px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #a78bfa; margin-bottom: 24px; }
  .short-def { font-size: 16px; font-weight: 600; color: #e8e8f0; margin-bottom: 20px; line-height: 1.5; border-left: 3px solid #a78bfa; padding-left: 16px; }
  .section-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #888899; margin-bottom: 8px; }
  .section-body { font-size: 14px; color: #c8c8d8; line-height: 1.7; margin-bottom: 20px; }
  .example-box { background: rgba(139,92,246,0.08); border: 1px solid rgba(139,92,246,0.2); border-radius: 10px; padding: 16px; margin-top: 20px; }
  .example-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #a78bfa; margin-bottom: 8px; }
  .example-text { font-size: 14px; color: #d8d8e8; line-height: 1.6; font-style: italic; }
  .cta { text-align: center; margin-bottom: 24px; }
  .cta a { display: inline-block; background: linear-gradient(135deg, #7c3aed, #8b5cf6); color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; }
  .footer { text-align: center; color: #555566; font-size: 12px; line-height: 1.6; }
  .footer a { color: #888899; }
</style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="logo">TechLex</div>
      <div class="tagline">Your daily tech terminology — one term at a time.</div>
    </div>

    <div class="card">
      <div class="day-label">Term of the Day</div>
      <div class="term">${term.term}</div>
      <div class="category-badge">${term.category}</div>
      <div class="short-def">${term.shortDef}</div>

      <div class="section-label">What it means</div>
      <div class="section-body">${term.definition}</div>

      <div class="section-label">How to use it at work</div>
      <div class="section-body">${term.usage}</div>

      <div class="example-box">
        <div class="example-label">In a sentence</div>
        <div class="example-text">${term.example}</div>
      </div>
    </div>

    <div class="cta">
      <a href="https://techlex.kiishiogunbiyi.workers.dev">Browse the full glossary →</a>
    </div>

    <div class="footer">
      You're receiving this because you subscribed to TechLex daily terms.<br />
      <a href="${unsubUrl}">Unsubscribe</a>
    </div>
  </div>
</body>
</html>`;
}

// ── CRON: send daily term to all subscribers ──────────────────────────────────

async function sendDailyEmails(env: Env): Promise<void> {
  if (!env.EMAIL_SENDER) {
    console.log("EMAIL_SENDER binding not configured — skipping email send");
    return;
  }

  const term = termOfTheDay();
  const { keys } = await env.SUBSCRIBERS.list();

  console.log(`Sending term "${term.term}" to ${keys.length} subscribers`);

  for (const key of keys) {
    const email = key.name;
    try {
      const token = btoa(email).replace(/=/g, "");
      const unsubUrl = `https://techlex.kiishiogunbiyi.workers.dev/api/unsubscribe?token=${token}`;

      const { EmailMessage } = await import("cloudflare:email");
      const msg = new EmailMessage(
        "daily@techlex.kiishiogunbiyi.workers.dev",
        email,
        {
          subject: `TechLex Daily: ${term.term} — ${term.shortDef}`,
          html: buildEmailHtml(term, unsubUrl),
          text: `TechLex Daily\n\nTerm: ${term.term}\nCategory: ${term.category}\n\n${term.shortDef}\n\n${term.definition}\n\nHow to use it:\n${term.usage}\n\nExample:\n${term.example}\n\nUnsubscribe: ${unsubUrl}`,
        }
      );
      await env.EMAIL_SENDER.send(msg);
    } catch (err) {
      console.error(`Failed to send to ${email}:`, err);
    }
  }
}

// ── ROUTER ────────────────────────────────────────────────────────────────────

export default {
  // HTTP requests
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // CORS preflight
    if (method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // ── API: get all terms ──
    if (path === "/api/terms" && method === "GET") {
      const category = url.searchParams.get("category");
      const q = url.searchParams.get("q")?.toLowerCase();
      let results = TERMS;
      if (category) results = results.filter(t => t.category === category);
      if (q) results = results.filter(t =>
        t.term.toLowerCase().includes(q) ||
        t.shortDef.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
      );
      return json({ terms: results, total: results.length, categories: CATEGORIES });
    }

    // ── API: get single term ──
    if (path.startsWith("/api/terms/") && method === "GET") {
      const id = path.replace("/api/terms/", "");
      const term = TERMS.find(t => t.id === id);
      if (!term) return json({ error: "Term not found" }, 404);
      return json(term);
    }

    // ── API: term of the day ──
    if (path === "/api/today" && method === "GET") {
      return json(termOfTheDay());
    }

    // ── API: subscribe ──
    if (path === "/api/subscribe" && method === "POST") {
      let body: { email?: string };
      try {
        body = await request.json();
      } catch {
        return json({ error: "Invalid JSON body" }, 400);
      }

      const email = body.email?.trim().toLowerCase();
      if (!email || !isValidEmail(email)) {
        return json({ error: "Invalid email address" }, 400);
      }

      const existing = await env.SUBSCRIBERS.get(email);
      if (existing) {
        return json({ success: true, message: "Already subscribed — you're good!" });
      }

      await env.SUBSCRIBERS.put(email, JSON.stringify({
        subscribedAt: new Date().toISOString(),
        email,
      }));

      return json({ success: true, message: "Subscribed! Your first term arrives tomorrow at 8am UTC." });
    }

    // ── API: unsubscribe ──
    if (path === "/api/unsubscribe") {
      const token = url.searchParams.get("token");
      if (!token) return json({ error: "Missing token" }, 400);
      try {
        const email = atob(token + "=".repeat((4 - token.length % 4) % 4));
        await env.SUBSCRIBERS.delete(email);
        // Redirect to a nice unsubscribe confirmation page
        return new Response(
          `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Unsubscribed</title>
          <style>body{font-family:sans-serif;background:#0f0f13;color:#e8e8f0;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center}
          h1{color:#a78bfa}p{color:#888899}a{color:#a78bfa}</style></head>
          <body><div><h1>Unsubscribed</h1><p>You've been removed from TechLex daily emails.</p>
          <a href="https://techlex.kiishiogunbiyi.workers.dev">Visit TechLex →</a></div></body></html>`,
          { status: 200, headers: { "Content-Type": "text/html" } }
        );
      } catch {
        return json({ error: "Invalid token" }, 400);
      }
    }

    // ── API: stats ──
    if (path === "/api/stats" && method === "GET") {
      const { keys } = await env.SUBSCRIBERS.list();
      return json({
        totalTerms: TERMS.length,
        totalCategories: CATEGORIES.length,
        totalSubscribers: keys.length,
        todaysTerm: termOfTheDay().term,
      });
    }

    // Serve static assets (the frontend)
    return env.ASSETS.fetch(request);
  },

  // Cron trigger — fires at 0 8 * * * (8am UTC daily)
  async scheduled(_event: ScheduledEvent, env: Env, _ctx: ExecutionContext): Promise<void> {
    await sendDailyEmails(env);
  },
};
