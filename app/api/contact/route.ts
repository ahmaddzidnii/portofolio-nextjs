import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { username, email, message } = body;

  const bot_token = process.env.BOT_TOKEN;
  const chat_id = process.env.CHAT_ID;
  const url = `https://api.telegram.org/bot${bot_token}/sendMessage`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `ahmad`,
    },
    body: JSON.stringify({
      chat_id,
      text: `Username: ${username}\nEmail: ${email}\nMessage:\n ${message}`,
    }),
  };

  try {
    await fetch(url, options);
    return NextResponse.json({ status: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Failed" }, { status: 500 });
  }
}
