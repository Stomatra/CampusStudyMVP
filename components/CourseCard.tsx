import Link from "next/link";
import type { Course } from "@/data/courses";

const detailLinks: Record<string, string> = {
  "analog-electronics": "/courses/analog-electronics",
  "college-physics-b2": "/courses/college-physics-b2",
};

export function CourseCard({ course }: { course: Course }) {
  const href = detailLinks[course.id];
  const content = (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {course.category} · 占位数据
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-950">
            {course.name}
          </h3>
        </div>
        <span
          className={
            course.status === "重点筹备中"
              ? "shrink-0 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white"
              : "shrink-0 rounded-md bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-600"
          }
        >
          {course.status}
        </span>
      </div>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
        {course.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {course.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs font-medium text-slate-500">
        适合：{course.suitableFor} · {course.semester}
      </p>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}
