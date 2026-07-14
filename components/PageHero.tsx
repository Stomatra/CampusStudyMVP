import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-blue-700">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
