import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "V Chaitanya Chowdari <noreply@noreply.chowdari.in>";
const OWNER_EMAIL = "vchaitanya@chowdari.in";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, subject, message } = body;

    // Validate required fields
    if (!firstname || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const fullName = `${firstname} ${lastname || ""}`.trim();
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // ─── 1. Notification email to site owner ───
    await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `📬 New Contact: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #e5e7eb; border-radius: 16px; border: 1px solid #1f2937;">
          <div style="margin-bottom: 24px;">
            <h1 style="margin: 0 0 4px; font-size: 24px; color: #f3f4f6;">New Contact Form Submission</h1>
            <p style="margin: 0; font-size: 13px; color: #6b7280;">${timestamp}</p>
          </div>

          <div style="background: #111827; border-radius: 12px; padding: 20px; margin-bottom: 20px; border: 1px solid #1f2937;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 12px; color: #9ca3af; font-size: 13px; width: 100px; vertical-align: top;">Name</td>
                <td style="padding: 8px 12px; color: #f3f4f6; font-size: 14px; font-weight: 500;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; color: #9ca3af; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 8px 12px; color: #f3f4f6; font-size: 14px;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; color: #9ca3af; font-size: 13px; vertical-align: top;">Subject</td>
                <td style="padding: 8px 12px; color: #f3f4f6; font-size: 14px; font-weight: 500;">${subject}</td>
              </tr>
            </table>
          </div>

          <div style="background: #111827; border-radius: 12px; padding: 20px; border: 1px solid #1f2937;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #9ca3af;">Message</p>
            <p style="margin: 0; font-size: 14px; color: #f3f4f6; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; padding: 10px 24px; background: linear-gradient(135deg, #06b6d4, #ef4444); color: white; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 500;">
              Reply to ${firstname}
            </a>
          </div>
        </div>
      `,
    });

    // ─── 2. Thank-you email to the person who submitted the form ───
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Thank you for reaching out, ${firstname}!`,
      replyTo: OWNER_EMAIL,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #e5e7eb; border-radius: 16px; border: 1px solid #1f2937;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="display: inline-block; width: 48px; height: 48px; background: linear-gradient(135deg, #06b6d4, #ef4444); border-radius: 12px; line-height: 48px; font-size: 20px;">✨</div>
          </div>

          <h1 style="margin: 0 0 8px; font-size: 22px; color: #f3f4f6; text-align: center;">
            Thank you, ${firstname}!
          </h1>
          <p style="margin: 0 0 24px; font-size: 14px; color: #9ca3af; text-align: center;">
            I&apos;ve received your message and will get back to you within 24 hours.
          </p>

          <div style="background: #111827; border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid #1f2937;">
            <p style="margin: 0 0 4px; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Your message summary</p>
            <p style="margin: 0 0 8px; font-size: 15px; color: #f3f4f6; font-weight: 600;">${subject}</p>
            <p style="margin: 0; font-size: 13px; color: #9ca3af; line-height: 1.5; white-space: pre-wrap;">${message.length > 200 ? message.substring(0, 200) + "..." : message}</p>
          </div>

          <div style="text-align: center; margin-bottom: 24px;">
            <p style="margin: 0 0 12px; font-size: 14px; color: #9ca3af;">
              Want to schedule a call right away?
            </p>
            <a href="https://cal.com/vcaicreator/discovery-call" style="display: inline-block; padding: 10px 24px; background: linear-gradient(135deg, #06b6d4, #ef4444); color: white; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 500;">
              Book a Discovery Call →
            </a>
          </div>

          <hr style="border: none; border-top: 1px solid #1f2937; margin: 24px 0;" />

          <div style="text-align: center;">
            <p style="margin: 0 0 4px; font-size: 14px; font-weight: 600; color: #f3f4f6;">V Chaitanya Chowdari</p>
            <p style="margin: 0 0 8px; font-size: 12px; color: #6b7280;">AI Generalist, Researcher & Builder</p>
            <div style="display: flex; justify-content: center; gap: 16px; font-size: 12px;">
              <a href="https://chowdari.in" style="color: #06b6d4; text-decoration: none;">chowdari.in</a>
              <a href="https://linkedin.com/in/vchaitanyachowdari" style="color: #06b6d4; text-decoration: none;">LinkedIn</a>
              <a href="https://github.com/vchaitanyachowdari" style="color: #06b6d4; text-decoration: none;">GitHub</a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
