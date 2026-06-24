import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — KGOV Solutions",
  description: "Get in touch with KGOV Solutions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Get in Touch
      </h1>
      <p className="mt-6 text-lg text-gray-600">
        Ready to discuss how KGOV Solutions can support your agency? We&apos;d
        like to hear from you.
      </p>

      <h2 className="mt-12 text-xl font-semibold text-gray-900">
        Send a Message
      </h2>
      <ContactForm />
    </div>
  );
}
