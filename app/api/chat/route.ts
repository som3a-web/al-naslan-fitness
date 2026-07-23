import { NextResponse } from "next/server";
import { aiReply } from "@/lib/ai";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const message = typeof body.message === "string" ? body.message : "";
  const sessionId = typeof body.sessionId === "string" ? body.sessionId : "demo";
  const webhook = process.env.N8N_CHAT_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, sessionId, source: "website-ai-agent" }),
        next: { revalidate: 0 },
      });

      if (response.ok) {
        const data = await response.json();
        return NextResponse.json({
          role: "bot",
          text: data.text || data.reply || aiReply(message).text,
          chips: data.chips,
        });
      }
    } catch {
      // The local demo should remain useful even before n8n is connected.
    }
  }

  return NextResponse.json(aiReply(message));
}
