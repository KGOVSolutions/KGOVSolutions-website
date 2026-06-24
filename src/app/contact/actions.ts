"use server";

import { Resend } from "resend";

const CONTACT_TO = "ckooistra@kgovsolutions.com";
const CONTACT_FROM = "KGOVSolutions Website <ckooistra@kgovsolutions.com>";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill out every field." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return {
      status: "error",
      message: "Something went wrong on our end. Please try again later.",
    };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: email,
    subject: `New contact form message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || "—"}\n\n${message}`,
  });

  if (error) {
    console.error("Resend send failed:", error);
    return {
      status: "error",
      message: "Your message couldn't be sent. Please try again later.",
    };
  }

  return {
    status: "success",
    message: "Thanks for reaching out — we'll be in touch soon.",
  };
}
