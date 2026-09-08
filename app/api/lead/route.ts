import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  goal?: string;
  type?: string;
};

function referenceId() {
  const date = new Date();
  const stamp = date.toISOString().slice(0, 10).replace(/-/g, "");
  const short = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `NFC-${stamp}-${short}`;
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as LeadPayload;

  if (!payload.name || !payload.phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const lead = {
    ...payload,
    referenceId: referenceId(),
    source: "al-naslan-website",
    status: "new",
    createdAt: new Date().toISOString(),
  };

  const webhook = process.env.N8N_LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        next: { revalidate: 0 },
      });
    } catch {
      // Keep lead capture successful even if the automation webhook is unreachable.
    }
  }

  return NextResponse.json({
    ok: true,
    referenceId: lead.referenceId,
    nextStep: "whatsapp-confirmation",
  });
}
