import { FORM_LINKS } from "@/lib/links";

const previewItems = [
  "AI 拆解原题",
  "高频题型归纳",
  "同类变式练习",
  "答案解析配套",
];

const roadmap = [
  { day: "Step 1", task: "用 AI 整理往年题，拆出知识点和题型" },
  { day: "Step 2", task: "提炼模板、套路和常见易错点" },
  { day: "Step 3", task: "生成同类变式题，练到真正会做" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              题练帮 · MVP 内测版
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              往年题不只是拿来看，而是要拿来练
            </h1>
            <p className="mt-4 text-base font-semibold text-blue-700">
              AI 往年题拆解与同类题训练工具
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              用 AI 整理往年题，拆解知识点和题型，并生成同类练习题，帮你从“看懂答案”变成“会做变式”。
            </p>
            <p className="mt-4 max-w-2xl rounded-md border border-blue-100 bg-blue-50 px-4 py-3 text-base font-semibold text-blue-800">
              别人给你资料，我们帮你把题练会。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/courses"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                查看课程
              </a>
              <a
                href={FORM_LINKS.signup}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-base font-semibold text-slate-950 transition hover:border-blue-300 hover:text-blue-700"
              >
                预约内测
              </a>
              <a
                href="#sample"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-blue-200 bg-blue-50 px-6 text-base font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
              >
                领取样张
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-5">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-medium text-blue-700">
                    占位样张
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                    AI 变式训练包
                  </h2>
                </div>
                <span className="rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                  MVP
                </span>
              </div>

              <div className="grid gap-3 py-5 sm:grid-cols-2">
                {previewItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-slate-100 pt-5">
                {roadmap.map((item, index) => (
                  <div key={item.day} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-sm font-semibold text-blue-700">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        {item.day}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        {item.task}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
