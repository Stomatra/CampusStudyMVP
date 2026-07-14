import Link from "next/link";
import type { Course } from "@/data/courses";
import { FORM_LINKS } from "@/lib/links";

type CourseDetailProps = {
  course: Course;
  headline: string;
  lead: string;
  focusPoints: string[];
};

export function CourseDetail({
  course,
  headline,
  lead,
  focusPoints,
}: CourseDetailProps) {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <section className="border-b border-slate-200 bg-white px-5 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-700">
              {course.category} · {course.semester}
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {course.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {headline}
            </p>
            <p className="mt-4 max-w-3xl rounded-md border border-blue-100 bg-blue-50 px-4 py-3 text-base font-semibold text-blue-800">
              {lead}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
              当前页面为 MVP 占位结构，不包含真实往年题或真实课程资料。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={FORM_LINKS.signup}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                预约内测
              </a>
              <Link
                href="/courses"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-base font-semibold text-slate-950 transition hover:border-blue-300 hover:text-blue-700"
              >
                返回全部课程
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <p className="text-sm font-semibold text-blue-700">
                  训练包状态
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                  {course.status}
                </h2>
              </div>
              <span className="rounded-md bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
                MVP
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              适合：{course.suitableFor}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {focusPoints.map((point, index) => (
              <article
                key={point}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-sm font-semibold text-blue-700">
                  {index + 1}
                </span>
                <p className="mt-5 text-base font-semibold leading-7 text-slate-800">
                  {point}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-blue-700">样张会优先展示</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["原题拆解", "知识点总结", "解题模板", "同类变式题"].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
