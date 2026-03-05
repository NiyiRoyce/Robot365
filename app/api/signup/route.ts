// PATH: app/api/signup/route.ts

export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";

/**
 * Types
 */
interface SignupFormData {
  fullName: string;
  email: string;
  phone: string;
  investmentBudget: string;
  accreditedInvestor: string;
  message?: string;
}

/**
 * Constants
 */
const BUDGET_RANGE: Record<string, string> = {
  "25k-100k": "$25,000 – $100,000",
  "100k-500k": "$100,000 – $500,000",
  "500k-2m": "$500,000 – $2,000,000",
  "2m+": "$2,000,000+",
};

const ACCREDITED_STATUS: Record<string, string> = {
  yes: "✅ Yes, Accredited",
  no: "❌ No, Not Accredited",
  unsure: "❓ Unsure",
};

/**
 * API Handler
 */
export async function POST(request: NextRequest) {
  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const data: SignupFormData = await request.json();

    const validationError = validateSignup(data);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const telegramMessage = formatTelegramMessage(data);

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.warn("Telegram configuration missing");

      return NextResponse.json(
        { message: "Signup received (notification disabled)" },
        { status: 200 }
      );
    }

    const telegramResponse = await sendToTelegram(
      telegramMessage,
      TELEGRAM_BOT_TOKEN,
      TELEGRAM_CHAT_ID
    );

    if (!telegramResponse.ok) {
      console.error("Telegram API error:", telegramResponse);

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

/**
 * Validation
 */
function validateSignup(data: SignupFormData): string | null {
  if (!data.fullName) return "Full name is required";
  if (!data.email) return "Email is required";
  if (!data.phone) return "Phone number is required";

  return null;
}

/**
 * Format Telegram Message
 */
function formatTelegramMessage(data: SignupFormData): string {
  const message = `
<b>NEW SIGNUP</b>

👤 Name: ${data.fullName}
📧 Email: ${data.email}
📱 Phone: ${data.phone}

💰 Investment Budget: ${
    BUDGET_RANGE[data.investmentBudget] || data.investmentBudget
  }

🏛️ Accredited Investor: ${
    ACCREDITED_STATUS[data.accreditedInvestor] || data.accreditedInvestor
  }

${data.message ? `💬 Message:\n${data.message}` : ""}

⏰ Timestamp: ${new Date().toISOString()} UTC
`;

  return message.trim();
}

/**
 * Telegram Sender
 */
async function sendToTelegram(
  message: string,
  token: string,
  chatId: string
): Promise<{ ok: boolean; result: any }> {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    }),
  });

  return response.json();
}