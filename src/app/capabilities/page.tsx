import type { Metadata } from "next";

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
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Ready to Support Your Mission
      </h1>
      <p className="mt-6 text-lg text-gray-600">
        KGOV Solutions is registered and certified to do business with the
        federal government. We are committed to delivering high-quality
        consulting services that meet the unique needs of government agencies.
      </p>

      <h2 className="mt-14 text-xl font-semibold text-gray-900">Credentials</h2>
      <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
        {credentials.map((credential) => (
          <div
            key={credential.label}
            className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-3 sm:gap-4"
          >
            <dt className="text-sm font-medium text-gray-900">
              {credential.label}
            </dt>
            <dd className="text-gray-600 sm:col-span-2">{credential.value}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-14 text-xl font-semibold text-gray-900">
        Core Competencies
      </h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {competencies.map((competency) => (
          <li
            key={competency}
            className="flex items-start gap-2 text-gray-600"
          >
            <span aria-hidden className="mt-1 text-gray-400">
              •
            </span>
            {competency}
          </li>
        ))}
      </ul>

      <h2 className="mt-14 text-xl font-semibold text-gray-900">
        Capability Statement
      </h2>
      <p className="mt-6 text-gray-600">
        Download our capability statement for a complete overview of KGOV
        Solutions&apos; credentials, competencies, and past performance.
      </p>
    </div>
  );
}
