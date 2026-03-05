// PATH: app/api/signup/route.ts

import { NextRequest, NextResponse } from "next/server";

// Use server-side environment variables (no NEXT_PUBLIC prefix) to avoid leaking secrets
// These should be defined in .env.local or in your deployment environment and never committed.
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// sanity check - fail early if the values are missing
if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  throw new Error(
    "Missing Telegram configuration in environment variables. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID."
  );
}

interface SignupFormData {
  fullName: string;
  email: string;
  phone: string;
  investmentBudget: string;
  accreditedInvestor: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: SignupFormData = await request.json();

    // Validate required fields
    if (!data.fullName || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format message for Telegram
    const telegramMessage = formatTelegramMessage(data);

    // Send to Telegram
    const telegramResponse = await sendToTelegram(telegramMessage);

    if (!telegramResponse.ok) {
      console.error("Telegram API error:", telegramResponse.result);
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Signup received and notification sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Signup API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function formatTelegramMessage(data: SignupFormData): string {
  const budgetRange: { [key: string]: string } = {
    "25k-100k": "$25,000 – $100,000",
    "100k-500k": "$100,000 – $500,000",
    "500k-2m": "$500,000 – $2,000,000",
    "2m+": "$2,000,000+",
  };

  const accreditedStatus: { [key: string]: string } = {
    yes: "✅ Yes, Accredited",
    no: "❌ No, Not Accredited",
    unsure: "❓ Unsure",
  };

  const message = `
<b>NEW  SIGNUP</b>

👤 Name: ${data.fullName}
📧 Email: ${data.email}
📱 Phone: ${data.phone}

💰 Investment Budget: ${budgetRange[data.investmentBudget] || data.investmentBudget}
🏛️ Accredited Investor: ${accreditedStatus[data.accreditedInvestor] || data.accreditedInvestor}

${data.message ? ` Message:\n${data.message}` : ""}

⏰ Timestamp: ${new Date().toLocaleString("en-US", { timeZone: "UTC" })} UTC
  `;

  return message.trim();
}

async function sendToTelegram(
  message: string
): Promise<{ ok: boolean; result: any }> {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    return await response.json();
  } catch (error) {
    console.error("Telegram API request failed:", error);
    throw error;
  }
}
