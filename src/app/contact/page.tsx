import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — KGOVSolutions",
  description: "Get in touch with KGOVSolutions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Contact</h1>
      <p className="mt-6 text-lg text-gray-600">
        Reach out to learn how KGOVSolutions can support your agency. Placeholder
        copy — replace with real contact details.
      </p>

      <ContactForm />
    </div>
  );
}
