import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Strategic Planning",
    body: "Defining goals, aligning resources, and building actionable roadmaps.",
    icon: (
      <path d="M3 3v18h18M7 14l3-4 3 3 4-6" />
    ),
  },
  {
    title: "Program Management",
    body: "Structure, oversight, and accountability from initiation to closeout.",
    icon: <path d="M9 11l3 3 8-8M21 12a9 9 0 11-6.2-8.5" />,
  },
  {
    title: "Process Improvement",
    body: "Lean Six Sigma solutions that reduce waste and accelerate outcomes.",
    icon: (
      <path d="M3 12a9 9 0 019-9 9 9 0 016.7 3M21 4v4h-4M21 12a9 9 0 01-9 9 9 9 0 01-6.7-3M3 20v-4h4" />
    ),
  },
  {
    title: "Leadership Development",
    body: "Training programs that build the next generation of government leaders.",
    icon: (
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 7a4 4 0 100 .01M22 21v-2a4 4 0 00-3-3.85" />
    ),
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-b from-slate-50 to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-red-600/5 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            SERVICE-DISABLED VETERAN-OWNED SMALL BUSINESS
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Mission-Ready Consulting.{" "}
            <span className="text-blue-700">Veteran-Led Results.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            KGOV Solutions delivers management consulting services to federal
            agencies. Founded by a U.S. Navy Seabee, we bring military
            discipline, construction expertise, and proven leadership to every
            mission.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-700/20 transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700/25"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 py-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Verified
          </span>
          {["SDVOSB Certified", "Small Business", "CAGE 20GF3"].map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
            >
              {badge}
            </span>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        {/* Can Do approach */}
        <section className="py-20">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-red-600">
              Our Approach
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              The &ldquo;Can Do&rdquo; Approach
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              From strategic planning to boots-on-the-ground program execution,
              we help government organizations operate smarter, build stronger
              teams, and deliver results. The Seabee &ldquo;Can Do&rdquo; spirit
              isn&apos;t just our heritage — it&apos;s how we work.
            </p>
          </Reveal>
        </section>

        {/* Services */}
        <section className="border-t border-slate-200 py-20">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                  Capabilities
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  What we do
                </h2>
              </div>
              <Link
                href="/services"
                className="hidden shrink-0 text-sm font-semibold text-blue-700 underline-offset-4 hover:underline sm:block"
              >
                View all services →
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="group h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link
              href="/services"
              className="text-sm font-semibold text-blue-700 underline underline-offset-4"
            >
              View all services →
            </Link>
          </div>
        </section>

        {/* CTA band */}
        <section className="pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-8 py-14 text-center sm:px-16">
              <div className="accent-bar absolute inset-x-0 top-0" />
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to support your mission?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Let&apos;s talk about how KGOV Solutions can help your agency
                plan smarter and execute with discipline.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Start a conversation
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
