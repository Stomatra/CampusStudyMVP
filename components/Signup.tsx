import { FORM_LINKS } from "@/lib/links";

export function Signup() {
  return (
    <section id="signup" className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-10">
        <p className="text-sm font-semibold text-blue-700">内测预约</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          想第一时间看到样张和课程更新？
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          先填写预约问卷，我们会根据课程需求优先制作更多训练包。
        </p>
        <a
          href={FORM_LINKS.signup}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          填写预约问卷
        </a>
        <p className="mt-4 text-sm text-slate-500">
          表单会同步收集课程需求，方便我们优先制作训练包。
        </p>
      </div>
    </section>
  );
}
