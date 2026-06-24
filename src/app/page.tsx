import Link from "next/link";

const highlights = [
  { title: "Modernization", body: "Placeholder description of legacy system modernization services." },
  { title: "Security & Compliance", body: "Placeholder description of security and compliance offerings." },
  { title: "Advisory", body: "Placeholder description of strategy and advisory services." },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="py-20 sm:py-28">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Solutions that help government agencies serve the public.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          KGOVSolutions partners with public-sector teams to deliver reliable,
          secure, and modern technology. Placeholder copy — replace with your
          real value proposition.
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

      <section className="border-t border-gray-200 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          What we do
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
