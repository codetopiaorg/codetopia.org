import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // TODO: Replace with your newsletter platform integration.
  // Examples:
  //   Beehiiv:  POST https://api.beehiiv.com/v2/publications/{id}/subscriptions
  //   Mailchimp: POST https://{dc}.api.mailchimp.com/3.0/lists/{id}/members
  //   ConvertKit: POST https://api.convertkit.com/v3/forms/{id}/subscribe
  //
  // const res = await fetch("YOUR_PLATFORM_ENDPOINT", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.NEWSLETTER_API_KEY}` },
  //   body: JSON.stringify({ email }),
  // });
  // if (!res.ok) return NextResponse.json({ error: "Subscription failed" }, { status: 500 });

  return NextResponse.json({ success: true });
}
