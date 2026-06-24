import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — KGOVSolutions",
  description: "Services KGOVSolutions offers to government agencies.",
};

const services = [
  { title: "System Modernization", body: "Placeholder description of legacy modernization and cloud migration services." },
  { title: "Security & Compliance", body: "Placeholder description of security assessments, FedRAMP, and compliance support." },
  { title: "Data & Analytics", body: "Placeholder description of data platform and analytics services." },
  { title: "Advisory & Strategy", body: "Placeholder description of technology strategy and advisory services." },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Services</h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        How KGOVSolutions supports government agencies. Placeholder copy — replace
        with your real offerings.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900">{service.title}</h2>
            <p className="mt-2 text-gray-600">{service.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
