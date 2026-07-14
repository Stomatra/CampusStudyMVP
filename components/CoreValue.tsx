import { SectionHeader } from "@/components/SectionHeader";

const values = [
  {
    title: "AI 拆题",
    description: "把零散往年题按知识点、题型和难度整理清楚。",
  },
  {
    title: "AI 总结",
    description: "提炼高频考点、常考套路、解题模板和易错点。",
  },
  {
    title: "AI 出题",
    description: "根据原题生成同类变式题，配套答案和解析，方便反复练习。",
  },
];

export function CoreValue() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="核心卖点"
          title="别人给你资料，我们帮你把题练会。"
          description="核心不是堆资料，而是把往年题拆清楚、总结成方法，再生成能反复练的变式题。"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {values.map((value, index) => (
            <article
              key={value.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-sm font-semibold text-blue-700">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                {value.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
