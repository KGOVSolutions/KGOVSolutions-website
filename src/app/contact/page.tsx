import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact — KGOV Solutions",
  description: "Get in touch with KGOV Solutions.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Ready to discuss how KGOV Solutions can support your agency? We'd like to hear from you."
      />
      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Send a Message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
