import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeader } from "@/components/SectionHeader";
import { integratedCircuitRecommendedCourses } from "@/data/courses";

const pathItems = [
  "电子科学与工程学院",
  "集成电路设计与集成系统",
  "大二上",
];

export function Courses() {
  return (
    <section id="courses" className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="专业推荐"
          title="选择你的专业，查看推荐课程"
          description="第一版先用静态示例展示推荐逻辑：按学院 / 专业 / 年级 / 学期整理最需要冲刺训练包的课程。"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-5 shadow-sm">
            <p className="text-sm font-semibold text-blue-700">示例路径</p>
            <div className="mt-5 space-y-3">
              {pathItems.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-sm font-semibold text-blue-700">
                    {index + 1}
                  </span>
                  <span className="text-base font-medium text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/majors/integrated-circuit"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                查看该专业推荐
              </Link>
              <Link
                href="/majors"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-blue-200 bg-white px-5 text-sm font-semibold text-blue-700 transition hover:border-blue-300"
              >
                进入专业选择
              </Link>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  集成电路设计与集成系统 · 大二上
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                  推荐优先筹备课程
                </h3>
              </div>
              <Link
                href="/courses"
                className="text-sm font-semibold text-blue-700 transition hover:text-blue-800"
              >
                查看全部课程
              </Link>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {integratedCircuitRecommendedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
