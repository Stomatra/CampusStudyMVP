import { PageHero } from "@/components/PageHero";
import { FORM_LINKS } from "@/lib/links";

const entries = [
  {
    title: "预约内测 / 课程需求",
    description:
      "告诉我们你的年级、专业和最想要的课程，我们会根据需求优先制作课程训练包。",
    button: "填写内测预约表",
    href: FORM_LINKS.signup,
    primary: true,
  },
  {
    title: "课程资料贡献",
    description:
      "如果你有往年题、作业题、老师重点、课件或笔记，可以提交给我们。有效资料后续可获得内测资格或优惠。",
    button: "提交课程资料",
    href: FORM_LINKS.contribution,
    primary: false,
  },
];

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <PageHero
        eyebrow="参与内测"
        title="预约内测或贡献课程资料"
        description="当前阶段主要收集课程需求和可用资料。你可以选择预约内测，也可以提交课程资料帮助我们更快制作训练包。"
      />

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {entries.map((entry) => (
            <article
              key={entry.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-slate-950">
                {entry.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {entry.description}
              </p>
              <a
                href={entry.href}
                target="_blank"
                rel="noreferrer"
                className={
                  entry.primary
                    ? "mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    : "mt-8 inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-base font-semibold text-slate-950 transition hover:border-blue-300 hover:text-blue-700"
                }
              >
                {entry.button}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
