import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

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
    <div>
      <PageHero
        eyebrow="Services"
        title="Management Consulting for the Federal Government"
        description="KGOV Solutions provides hands-on consulting services that help agencies plan smarter, operate efficiently, and build capable teams."
      />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 2) * 90}>
              <div className="group h-full rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-sm font-bold text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h2>
                </div>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
