import Link from "next/link";
import { PageHero } from "@/components/PageHero";

const principles = [
  {
    title: "不是代写",
    description:
      "我们不替学生完成作业、考试或任何需要本人独立完成的任务。",
  },
  {
    title: "不是押题保证",
    description:
      "训练包用于整理知识点、题型和练习路径，不承诺命中考试题目。",
  },
  {
    title: "帮助练会",
    description:
      "重点是把零散资料整理成可练习的结构，帮助学生理解套路并训练同类题。",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <PageHero
        eyebrow="关于项目"
        title="题练帮 · 课程冲刺训练包仍在 MVP 内测阶段"
        description="现在还没有接入真实往年题、真实后端或在线刷题系统。我们先验证学生是否需要这种课程复习结构，再逐步补齐样张和内容。"
        actions={
          <Link
            href="/feedback"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            提交反馈
          </Link>
        }
      />

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-6">
            <p className="text-base font-semibold text-blue-900">
              我们想做的是：帮助学生整理知识点、题型和同类题训练。
            </p>
            <p className="mt-3 text-sm leading-6 text-blue-800">
              未来即使接入更多 AI 能力，也会围绕复习组织、题型理解、变式练习和自测反馈展开，而不是替代学习过程。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
