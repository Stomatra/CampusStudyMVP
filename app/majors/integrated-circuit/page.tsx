import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { PageHero } from "@/components/PageHero";
import { integratedCircuitRecommendedCourses } from "@/data/courses";

const pathItems = [
  "电子科学与工程学院",
  "集成电路设计与集成系统",
  "大二上",
];

export default function IntegratedCircuitMajorPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <PageHero
        eyebrow="专业推荐"
        title="集成电路设计与集成系统 · 大二上推荐课程"
        description="按学院、专业、年级和学期整理课程优先级，先帮学生知道这个阶段最值得准备哪些训练包。"
        actions={
          <>
            <Link
              href="/courses/analog-electronics"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              查看模拟电子技术
            </Link>
            <Link
              href="/courses"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-base font-semibold text-slate-950 transition hover:border-blue-300 hover:text-blue-700"
            >
              查看全部课程
            </Link>
          </>
        }
      />

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold text-blue-700">当前路径</p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {pathItems.map((item, index) => (
                <div key={item} className="px-1 py-2">
                  <p className="text-xs font-semibold text-blue-700">
                    Step {index + 1}
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-950">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integratedCircuitRecommendedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
