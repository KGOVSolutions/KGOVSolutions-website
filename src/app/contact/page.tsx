import type { Metadata } from "next";

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

      <form className="mt-10 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-gray-900 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-gray-900 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-gray-900 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
