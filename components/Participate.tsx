import { SectionHeader } from "@/components/SectionHeader";
import { FORM_LINKS } from "@/lib/links";

const actions = [
  {
    title: "预约内测",
    description:
      "告诉我们你的年级、专业和最想要的课程，我们会根据需求优先制作课程训练包。",
    button: "填写内测预约表",
    href: FORM_LINKS.signup,
    primary: true,
  },
  {
    title: "贡献课程资料",
    description:
      "如果你有往年题、作业题、老师重点、课件或笔记，可以提交给我们。有效资料后续可获得内测资格或优惠。",
    button: "提交课程资料",
    href: FORM_LINKS.contribution,
    primary: false,
  },
];

export function Participate() {
  return (
    <section id="participate" className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="加入共创"
          title="参与内测 / 贡献资料"
          description="现在还在 MVP 内测阶段，我们会根据课程需求和资料情况，优先制作更有用的课程训练包。"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {actions.map((action) => (
            <article
              key={action.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h3 className="text-2xl font-semibold text-slate-950">
                {action.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {action.description}
              </p>
              <a
                href={action.href}
                target="_blank"
                rel="noreferrer"
                className={
                  action.primary
                    ? "mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    : "mt-8 inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-base font-semibold text-slate-950 transition hover:border-blue-300 hover:text-blue-700"
                }
              >
                {action.button}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
