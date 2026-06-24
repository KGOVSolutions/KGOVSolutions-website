import Link from "next/link";

const services = [
  {
    title: "Strategic Planning",
    body: "Defining goals, aligning resources, and building actionable roadmaps.",
  },
  {
    title: "Program Management",
    body: "Structure, oversight, and accountability from initiation to closeout.",
  },
  {
    title: "Process Improvement",
    body: "Lean Six Sigma solutions that reduce waste and accelerate outcomes.",
  },
  {
    title: "Leadership Development",
    body: "Training programs that build the next generation of government leaders.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="py-20 sm:py-28">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Mission-Ready Consulting. Veteran-Led Results.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          KGOV Solutions is a Service-Disabled Veteran-Owned Small Business
          delivering management consulting services to federal agencies. Founded
          by a U.S. Navy Seabee, we bring military discipline, construction
          expertise, and proven leadership to every mission.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            Get in touch
          </Link>
          <Link
            href="/services"
            className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
          >
            Explore services
          </Link>
        </div>
      </section>

      <section className="border-t border-gray-200 py-6">
        <p className="text-sm font-medium tracking-wide text-gray-600">
          SDVOSB Certified <span className="text-gray-300">|</span> Small Business{" "}
        </p>
      </section>

      <section className="border-t border-gray-200 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          The &ldquo;Can Do&rdquo; Approach
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-600">
          From strategic planning to boots-on-the-ground program execution, we
          help government organizations operate smarter, build stronger teams,
          and deliver results. The Seabee &ldquo;Can Do&rdquo; spirit isn&apos;t
          just our heritage — it&apos;s how we work.
        </p>
      </section>

      <section className="border-t border-gray-200 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          What we do
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600"
          >
            View all services
          </Link>
        </div>
      </section>
    </div>
  );
}
