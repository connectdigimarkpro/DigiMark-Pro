import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, businessName, serviceRequired, message } = body;

    // Check for required fields
    if (!name || !email || !businessName || !serviceRequired || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Mock mode: Log to node console and succeed. This allows testing the gorgeous client feedback
      // and confetti without requiring an active key during development/testing.
      console.log("---- [MOCK EMAIL DISPATCH] ----");
      console.log(`From: ${name} <${email}>`);
      console.log(`Company: ${businessName}`);
      console.log(`Service: ${serviceRequired}`);
      console.log(`Message: ${message}`);
      console.log("-------------------------------");

      // Artificial delay to mimic API latency
      await new Promise((resolve) => setTimeout(resolve, 800));

      return NextResponse.json({
        success: true,
        message: "Message received (Mock mode: Logged to console).",
      });
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "DigiMark Pro Contact <onboarding@resend.dev>", // Replace with verified domain in production
      to: ["digimarkpro26@gmail.com"], // Target address
      subject: `New Lead: ${serviceRequired} for ${businessName}`,
      html: `
        <h2>New Contact Inquiry from DigiMark Pro</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Service Required:</strong> ${serviceRequired}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; font-family: sans-serif; line-height: 1.5; color: #333;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error("Error sending email via Resend:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to submit request.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
