import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — KGOVSolutions",
  description: "Learn about KGOVSolutions and our mission.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">About us</h1>
      <p className="mt-6 text-lg text-gray-600">
        KGOVSolutions provides solutions to government agencies. Placeholder
        copy — replace with your company story.
      </p>
      <h2 className="mt-12 text-xl font-semibold text-gray-900">Our mission</h2>
      <p className="mt-3 text-gray-600">
        Placeholder mission statement describing how KGOVSolutions helps public-sector
        organizations achieve their goals.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-gray-900">Who we are</h2>
      <p className="mt-3 text-gray-600">
        Placeholder overview of the team and the experience KGOVSolutions brings to
        government engagements.
      </p>
    </div>
  );
}
