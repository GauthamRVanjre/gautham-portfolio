import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
export async function POST(req: Request, res: NextResponse) {
  const { message } = await req.json();

  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey!);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });

  const generationConfig = {
    temperature: 0.5,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  try {
    const prompt = process.env.CHATBOT_PROMPT ? process.env.CHATBOT_PROMPT : "";

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    });

    const result = await chatSession.sendMessage(message);

    return NextResponse.json(result.response.text(), { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
