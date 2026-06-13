import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, businessName, serviceRequired, date, timeSlot, message } = body;

    // Check for required fields
    if (!name || !email || !businessName || !serviceRequired || !date || !timeSlot || !message) {
      return NextResponse.json(
        { error: "Missing required fields for appointment booking." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Mock mode: Log to node console and succeed. This allows testing the gorgeous client feedback
      // and confetti without requiring an active key during development/testing.
      console.log("---- [MOCK APPOINTMENT BOOKING DISPATCH] ----");
      console.log(`From: ${name} <${email}>`);
      console.log(`Company: ${businessName}`);
      console.log(`Service: ${serviceRequired}`);
      console.log(`Date: ${date}`);
      console.log(`Time Slot: ${timeSlot}`);
      console.log(`Goals: ${message}`);
      console.log("--------------------------------------------");

      // Artificial delay to mimic API latency
      await new Promise((resolve) => setTimeout(resolve, 800));

      return NextResponse.json({
        success: true,
        message: "Appointment scheduled (Mock mode: Logged to console).",
      });
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "DigiMark Pro Appointments <onboarding@resend.dev>", // Replace with verified domain in production
      to: ["connect.digimarkpro@gmail.com"], // Target address
      subject: `New Consultation Booked: ${serviceRequired} on ${date}`,
      html: `
        <div style="background-color: #FAF8F5; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #111111;">
          <div style="max-w: 600px; margin: 0 auto; background: #ffffff; border: 1px solid rgba(17,17,17,0.06); border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.01);">
            
            <!-- Logo Header -->
            <div style="border-bottom: 1px solid rgba(17,17,17,0.06); padding-bottom: 24px; margin-bottom: 32px; text-align: center;">
              <h1 style="font-size: 20px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; margin: 0; color: #111111;">
                DIGIMARK <span style="color: #C9A66B;">PRO</span>
              </h1>
              <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #6B7280; margin: 4px 0 0 0;">
                Consultation Booking Confirmation
              </p>
            </div>

            <!-- Booking Details Card -->
            <div style="background-color: #FAF8F5; border: 1px dashed rgba(201, 166, 107, 0.4); border-radius: 12px; padding: 24px; margin-bottom: 32px;">
              <h3 style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #C9A66B; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid rgba(201,166,107,0.15); padding-bottom: 8px;">
                Appointment Schedule
              </h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6B7280; width: 35%;">Service</td>
                  <td style="padding: 6px 0; font-size: 13px; font-weight: 700; color: #111111;">${serviceRequired}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6B7280;">Date</td>
                  <td style="padding: 6px 0; font-size: 13px; font-weight: 700; color: #111111;">${date}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6B7280;">Time Slot</td>
                  <td style="padding: 6px 0; font-size: 13px; font-weight: 700; color: #C9A66B;">${timeSlot} (IST)</td>
                </tr>
              </table>
            </div>

            <!-- Client Information -->
            <div style="margin-bottom: 32px;">
              <h3 style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #111111; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid rgba(17,17,17,0.06); padding-bottom: 8px;">
                Client Information
              </h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6B7280; width: 35%;">Client Name</td>
                  <td style="padding: 6px 0; font-size: 13px; font-weight: 600; color: #111111;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6B7280;">Email Address</td>
                  <td style="padding: 6px 0; font-size: 13px; font-weight: 600; color: #111111;">
                    <a href="mailto:${email}" style="color: #111111; text-decoration: underline;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6B7280;">Business Name</td>
                  <td style="padding: 6px 0; font-size: 13px; font-weight: 600; color: #111111;">${businessName}</td>
                </tr>
              </table>
            </div>

            <!-- Message/Goals -->
            <div style="border-top: 1px solid rgba(17,17,17,0.06); padding-top: 24px;">
              <h3 style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #111111; margin-top: 0; margin-bottom: 12px;">
                Project Goals & Information
              </h3>
              <div style="font-size: 13px; line-height: 1.6; color: #4B5563; background: #FAF8F5; border: 1px solid rgba(17,17,17,0.04); border-radius: 8px; padding: 16px; white-space: pre-wrap;">${message}</div>
            </div>

            <!-- Footer Details -->
            <div style="margin-top: 40px; border-top: 1px solid rgba(17,17,17,0.06); padding-top: 24px; text-align: center; font-size: 11px; color: #9CA3AF;">
              This is an automated notification from digimarkpro.in. Please check your admin dashboard or email client to invite the client to the video call session.
            </div>

          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error("Error scheduling appointment via Resend:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to submit request.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
