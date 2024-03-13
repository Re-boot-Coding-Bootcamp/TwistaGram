import { Resend } from "resend";
import { MagicLinkEmail } from "~/assets/email-templates/MagicLinkEmail";
import { env } from "~/env";

import type { SendVerificationRequestParams } from "next-auth/providers/email";

export const resend = new Resend(env.RESEND_API_KEY);

export async function sendVerificationRequest(
  params: SendVerificationRequestParams
): Promise<void> {
  const { url, identifier } = params;
  const { host } = new URL(url);

  try {
    const response = await resend.emails.send({
      from: "TwistaGram <no-reply@hello.re-boot.us>",
      to: [identifier],
      subject: `Log in to ${host}`,
      text: text({ url, host }),
      react: MagicLinkEmail({ url, host }),
    });

    if (response.data) {
      console.log("[EMAIL] Login Email sent to:", identifier);
    }

    if (response.error) {
      throw new Error(response.error.message);
    }
  } catch (error) {
    throw new Error("Failed to send the verification Email.");
  }
}

function text({ url, host }: { host: string; url: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}
