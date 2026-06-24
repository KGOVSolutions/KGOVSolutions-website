import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

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
    <div>
      <PageHero
        eyebrow="About KGOV"
        title="Built on Service. Driven by Results."
      />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6 text-lg leading-relaxed text-slate-600">
          <p>
            KGOV Solutions was founded by a U.S. Navy Seabee who learned
            firsthand that mission success depends on strong leadership, smart
            planning, and the ability to adapt under pressure.
          </p>
          <p>
            The Seabees have a motto: <em>&ldquo;Can Do.&rdquo;</em> That mindset
            — resourceful, relentless, and ready — is the foundation of
            everything we do at KGOV Solutions.
          </p>
          <p>
            Today, we bring that same discipline to federal consulting. Whether
            helping an agency streamline operations, manage complex programs, or
            develop its workforce, we approach every engagement like a mission:
            with clear objectives, accountability, and a commitment to
            delivering results.
          </p>
          <p>
            Based in Sidney, Michigan, KGOV Solutions is proud to serve the
            agencies that serve our nation.
          </p>
        </div>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900">
          Our Values
        </h2>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60">
                <dt className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                  <span className="h-4 w-1 rounded-full bg-blue-700" />
                  {value.title}
                </dt>
                <dd className="mt-2 text-slate-600">{value.body}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </div>
  );
}
