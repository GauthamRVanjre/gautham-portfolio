import { resend } from "@/lib/resend";
import { EmailTemplate } from "@/lib/email-template";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: ["vanjregautham@gmail.com"],
      subject: "A new message from your website",
      react: EmailTemplate({ name, email, message }),
      text: "",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
