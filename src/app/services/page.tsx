import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — KGOV Solutions",
  description:
    "Hands-on management consulting that helps federal agencies plan smarter, operate efficiently, and build capable teams.",
};

const services = [
  {
    title: "Strategic Planning",
    body: "We help agencies define long-term goals, align resources, and build roadmaps that turn vision into action. Our approach ensures your strategy is executable, measurable, and tied to mission outcomes.",
  },
  {
    title: "Program & Project Management",
    body: "From initiation through closeout, we provide the structure, oversight, and accountability to keep programs on track and on budget. We bring discipline without bureaucracy.",
  },
  {
    title: "Acquisition & Procurement Support",
    body: "We guide agencies through the acquisition lifecycle — market research, requirements development, source selection support, and contract administration. We help you buy smarter.",
  },
  {
    title: "Organizational Development",
    body: "We assess structures, workflows, and culture to help agencies build high-performing organizations ready for current and future challenges.",
  },
  {
    title: "Process Improvement & Lean Six Sigma",
    body: "We identify inefficiencies and implement data-driven solutions that reduce waste, improve quality, and accelerate outcomes. Continuous improvement, not one-time fixes.",
  },
  {
    title: "Training & Leadership Development",
    body: "We design and deliver training programs that build technical skills and develop the next generation of government leaders. Practical, relevant, and mission-focused.",
  },
  {
    title: "Facilities & Construction Management Consulting",
    body: "Drawing on real-world Seabee experience, we advise on facility planning, construction oversight, and infrastructure project execution. We've built things — we know what works.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Management Consulting for the Federal Government
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        KGOV Solutions provides hands-on consulting services that help agencies
        plan smarter, operate efficiently, and build capable teams.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border border-gray-200 p-6"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {service.title}
            </h2>
            <p className="mt-2 text-gray-600">{service.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
