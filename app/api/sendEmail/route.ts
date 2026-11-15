import { z } from "zod";
import { resend } from "@/lib/resend";
import { EmailTemplate } from "@/lib/email-template";

const contactRequestSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  inquiry_type: z.string().trim().min(1).max(100),
  scope: z.string().trim().min(1).max(100),
  message: z.string().trim().min(10).max(5000),
  website: z.string().trim().max(200).optional().default(""),
});

export async function POST(req: Request) {
  let requestBody: unknown;

  try {
    requestBody = await req.json();
  } catch {
    return Response.json(
      { error: "The request body must be valid JSON." },
      { status: 400 },
    );
  }

  const parsedRequest = contactRequestSchema.safeParse(requestBody);

  if (!parsedRequest.success) {
    return Response.json(
      { error: "Please check the contact form fields and try again." },
      { status: 400 },
    );
  }

  const { name, email, inquiry_type, scope, message, website } =
    parsedRequest.data;

  if (website) {
    return Response.json({ success: true });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["vanjregautham@gmail.com"],
      reply_to: email,
      subject: "New portfolio inquiry: " + inquiry_type,
      react: EmailTemplate({
        name,
        email,
        inquiry_type,
        scope,
        message,
      }),
    });

    if (error) {
      console.error("Resend failed to deliver a contact message:", error);
      return Response.json(
        { error: "The message could not be sent." },
        { status: 500 },
      );
    }

    return Response.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Unexpected contact form error:", error);
    return Response.json(
      { error: "The message could not be sent." },
      { status: 500 },
    );
  }
}
