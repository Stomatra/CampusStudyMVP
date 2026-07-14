import Link from "next/link";
import { PageHero } from "@/components/PageHero";

const selectionPath = [
  {
    label: "学院",
    value: "电子科学与工程学院",
    note: "先从电子信息与集成电路相关课程开始打磨。",
  },
  {
    label: "专业",
    value: "集成电路设计与集成系统",
    note: "优先整理大二阶段最容易卡住的基础课和专业基础课。",
  },
  {
    label: "年级 / 学期",
    value: "大二上",
    note: "按当前学期推荐更适合冲刺训练的课程。",
  },
];

export default function MajorsPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <PageHero
        eyebrow="专业选择"
        title="选择你的专业，查看推荐课程"
        description="按学院 / 专业 / 年级 / 学期推荐课程。第一版先做静态展示入口，不做真实筛选功能。"
        actions={
          <Link
            href="/majors/integrated-circuit"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            查看集成电路大二上推荐
          </Link>
        }
      />

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {selectionPath.map((item, index) => (
              <article
                key={item.label}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-sm font-semibold text-blue-700">
                  {index + 1}
                </span>
                <p className="mt-5 text-sm font-semibold text-slate-500">
                  {item.label}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950">
                  {item.value}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.note}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center">
            <p className="text-base font-semibold text-slate-950">
              更多学院 / 专业 / 学期推荐正在整理中
            </p>
            <p className="mt-2 text-sm text-slate-600">
              目前不接入后端，课程推荐先通过静态占位数据维护，方便快速验证需求。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
