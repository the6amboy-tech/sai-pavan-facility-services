import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.website) return NextResponse.json({ success: true });
    if (!body.name || !body.mobile || !body.service || !body.location || !body.message) {
      return NextResponse.json({ success: false, message: "Please complete the required fields." }, { status: 400 });
    }
    return NextResponse.json({ success: true, message: "Thanks — our team will call you shortly." });
  } catch {
    return NextResponse.json({ success: false, message: "Unable to send your enquiry." }, { status: 400 });
  }
}
