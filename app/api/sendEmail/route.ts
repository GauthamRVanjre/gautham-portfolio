import { resend } from "@/lib/resend";
import { EmailTemplate } from "@/lib/email-template";

export async function POST() {
  try {
    // const data = await resend.emails.send({
    //   from: "Acme <onboarding@resend.dev>",
    //   to: ["vanjregautham@gmail.com"],
    //   subject: "Hello world",
    //   react: EmailTemplate({ firstName: "John" }),
    //   text: "",
    // });

    return Response.json("HelloWorld!");
  } catch (error) {
    return Response.json({ error });
  }
}
