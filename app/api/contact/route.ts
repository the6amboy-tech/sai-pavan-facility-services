import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone || !body.service) return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
    // This endpoint is deliberately mail-provider agnostic. Add RESEND_API_KEY / CRM integration
    // here before production if enquiry notifications are needed.
    return NextResponse.json({ ok: true, message: "Thanks — our team will call you shortly." });
  } catch { return NextResponse.json({ error: "Unable to send your request." }, { status: 400 }); }
}
