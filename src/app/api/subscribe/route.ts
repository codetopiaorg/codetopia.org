import { NextResponse } from "next/server";
import { Resend } from "resend";

// Subscribers to The Dispatch are stored as Resend contacts; broadcasts (with
// unsubscribe handling) are sent from the Resend dashboard.
//
// RESEND_API_KEY              required
// RESEND_DISPATCH_SEGMENT_ID  optional: also adds each subscriber to this segment

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("subscribe: RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Subscriptions are unavailable right now" },
      { status: 503 },
    );
  }

  const body = await req.json().catch(() => null);
  const email =
    typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Enter a valid email address" },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const segmentId = process.env.RESEND_DISPATCH_SEGMENT_ID;

  const { error } = await resend.contacts.create({
    email,
    unsubscribed: false,
    ...(segmentId && { segments: [{ id: segmentId }] }),
  });

  if (error) {
    // Subscribing twice is not an error for the visitor.
    const existing = await resend.contacts.get({ email });
    if (existing.data) return NextResponse.json({ success: true });

    console.error("subscribe: Resend rejected contact", error);
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
