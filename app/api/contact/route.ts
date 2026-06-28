import { NextResponse } from "next/server";
import { z } from "zod";

// Wire to production integrations in this handler (brief.md section 10):
//   - Calendly / HubSpot / webhook for "Book a Discovery Call"
//   - S3 / Uploadthing for "Upload Project Files"
//   - Email notification via Brevo or SMTP (use env vars, NOT hardcoded)
//
// Dev-mode only: log to console. Do NOT inject placeholder contact addresses.
// If a real contact value is missing, leave blank - do NOT auto-fill.

const CallSchema = z.object({
  kind: z.literal("call"),
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  description: z.string().min(1),
});

const UploadSchema = z.object({
  kind: z.literal("upload"),
  fileNames: z.array(z.string()).min(1),
  fileSizes: z.array(z.number()).min(1),
});

const ContactSchema = z.union([CallSchema, UploadSchema]);

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  console.log("[contact]", parsed.data);

  return NextResponse.json({ success: true });
}
