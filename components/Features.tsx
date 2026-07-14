import { SectionHeader } from "@/components/SectionHeader";

const features = [
  {
    title: "往年题题型整理",
    description: "把原题按题型归类，先看清考试最常出现的问题类型。",
  },
  {
    title: "针对性知识点总结",
    description: "围绕原题提炼对应知识点，减少无效翻书和盲目复习。",
  },
  {
    title: "高频题型归纳",
    description: "找出值得优先练的高频题型，把复习顺序排清楚。",
  },
  {
    title: "同类变式题生成",
    description: "基于原题生成相近题目，帮你从会看答案过渡到会做题。",
  },
  {
    title: "标准解题模板",
    description: "把常见作答步骤拆清楚，练习时可以对照模板检查。",
  },
  {
    title: "易错点总结",
    description: "提前标记常见坑点，避免同一种错误反复出现。",
  },
  {
    title: "自测练习",
    description: "用轻量练习检查薄弱环节，及时调整复习重点。",
  },
  {
    title: "考前速背版",
    description: "最后快速回看公式、模板、题型套路和易错点。",
  },
];

export function Features() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="产品功能"
          title="围绕往年题，完成从拆题到练题的闭环"
          description="第一版先展示核心内容结构，让你判断 AI 整理、总结和出题是否真的能提升复习效率。"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              <div className="mb-5 h-1.5 w-12 rounded-sm bg-blue-600" />
              <h3 className="text-lg font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
