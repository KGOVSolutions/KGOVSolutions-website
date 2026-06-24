import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Government Capabilities — KGOV Solutions",
  description:
    "KGOV Solutions is registered and certified to do business with the federal government. View our credentials and core competencies.",
};

const credentials = [
  { label: "UEI", value: "GX98QNHTPBFP3" },
  { label: "CAGE Code", value: "20GF3" },
  {
    label: "NAICS Code",
    value:
      "541611 — Administrative Management and General Management Consulting Services",
  },
  {
    label: "Certifications",
    value:
      "Service-Disabled Veteran-Owned Small Business (SDVOSB), Small Business",
  },
  { label: "Location", value: "Sidney, Michigan" },
];

const competencies = [
  "Strategic Planning",
  "Program & Project Management",
  "Acquisition & Procurement Support",
  "Organizational Development",
  "Process Improvement & Lean Six Sigma",
  "Training & Leadership Development",
  "Facilities & Construction Management Consulting",
];

export default function CapabilitiesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Government Capabilities"
        title="Ready to Support Your Mission"
        description="KGOV Solutions is registered and certified to do business with the federal government, delivering high-quality consulting services that meet the unique needs of government agencies."
      />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Credentials
        </h2>
        <dl className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {credentials.map((credential, i) => (
            <div
              key={credential.label}
              className={`grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-3 sm:gap-4 ${
                i % 2 === 1 ? "bg-slate-50/60" : ""
              }`}
            >
              <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {credential.label}
              </dt>
              <dd className="text-slate-800 sm:col-span-2">
                {credential.value}
              </dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900">
          Core Competencies
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {competencies.map((competency, i) => (
            <Reveal as="li" key={competency} delay={(i % 2) * 70}>
              <span className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-700 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-700"
                  aria-hidden
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {competency}
              </span>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 rounded-xl border border-blue-100 bg-blue-50/60 p-7">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Capability Statement
          </h2>
          <p className="mt-3 text-slate-600">
            Download our capability statement for a complete overview of KGOV
            Solutions&apos; credentials, competencies, and past performance.
          </p>
        </div>
      </div>
    </div>
  );
}
