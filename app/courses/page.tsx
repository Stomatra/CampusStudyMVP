import { CourseCard } from "@/components/CourseCard";
import { PageHero } from "@/components/PageHero";
import { courseCategories, getCoursesByCategory } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <PageHero
        eyebrow="课程库"
        title="全部课程"
        description="这里先用占位课程数据展示结构，按公共基础课、工科基础课、专业基础课分组。当前不依赖真实往年题或课程资料。"
      />

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {courseCategories.map((category) => {
            const categoryCourses = getCoursesByCategory(category);

            return (
              <section key={category}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-blue-700">
                      {categoryCourses.length} 门课程
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      {category}
                    </h2>
                  </div>
                  {category === "专业基础课" ? (
                    <p className="max-w-xl text-sm leading-6 text-slate-500">
                      暂时先以集成电路设计与集成系统相关课程作为占位示例，后续再扩展。
                    </p>
                  ) : null}
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
