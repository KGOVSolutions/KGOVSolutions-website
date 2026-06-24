import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — KGOV Solutions",
  description:
    "KGOV Solutions was founded by a U.S. Navy Seabee and built on service, leadership, and the Seabee \"Can Do\" spirit.",
};

const values = [
  {
    title: "Integrity",
    body: "We do what we say and say what we mean.",
  },
  {
    title: "Excellence",
    body: "Good enough isn't. We deliver quality work.",
  },
  {
    title: "Adaptability",
    body: "Conditions change. We adjust and execute.",
  },
  {
    title: "Service",
    body: "We're here to support your mission, not our ego.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Built on Service. Driven by Results.
      </h1>
      <div className="mt-6 space-y-6 text-lg text-gray-600">
        <p>
          KGOV Solutions was founded by a U.S. Navy Seabee who learned firsthand
          that mission success depends on strong leadership, smart planning, and
          the ability to adapt under pressure.
        </p>
        <p>
          The Seabees have a motto: <em>&ldquo;Can Do.&rdquo;</em> That mindset —
          resourceful, relentless, and ready — is the foundation of everything we
          do at KGOV Solutions.
        </p>
        <p>
          Today, we bring that same discipline to federal consulting. Whether
          helping an agency streamline operations, manage complex programs, or
          develop its workforce, we approach every engagement like a mission:
          with clear objectives, accountability, and a commitment to delivering
          results.
        </p>
        <p>
          Based in Sidney, Michigan, KGOV Solutions is proud to serve the
          agencies that serve our nation.
        </p>
      </div>

      <h2 className="mt-14 text-xl font-semibold text-gray-900">Our Values</h2>
      <dl className="mt-6 grid gap-8 sm:grid-cols-2">
        {values.map((value) => (
          <div key={value.title}>
            <dt className="text-lg font-medium text-gray-900">{value.title}</dt>
            <dd className="mt-2 text-gray-600">{value.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
