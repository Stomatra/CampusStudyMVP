import { FORM_LINKS } from "@/lib/links";

export function Feedback() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-blue-700">反馈收集</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            你想要哪门课的复习包？
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            如果你觉得这个项目有用，或者想要某门课的复习包，可以通过内测预约表告诉我们。
          </p>
        </div>
        <a
          href={FORM_LINKS.signup}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-base font-semibold text-slate-950 transition hover:border-blue-300 hover:text-blue-700"
        >
          填写内测预约表
        </a>
      </div>
    </section>
  );
}
