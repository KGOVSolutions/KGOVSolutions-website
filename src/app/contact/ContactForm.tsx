"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  return (
    <form action={formAction} className="mt-10 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-800">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </div>
      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-semibold text-slate-800"
        >
          Organization
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      {state.status !== "idle" && (
        <p
          aria-live="polite"
          className={
            state.status === "success"
              ? "text-sm font-medium text-green-700"
              : "text-sm font-medium text-red-700"
          }
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-700/20 transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
