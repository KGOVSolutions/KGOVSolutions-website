type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-b from-slate-50 to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
