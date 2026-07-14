import { SectionHeader } from "@/components/SectionHeader";

const sampleItems = [
  "往年题题型整理",
  "知识点拆解示例",
  "高频题型归纳",
  "标准解题模板",
  "同类变式题生成",
  "答案与解析示例",
  "易错点整理",
  "考前速背版",
];

export function SamplePreview() {
  return (
    <section id="sample" className="bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="样张预览"
          title="《高数 / 微积分期末冲刺训练包》样张制作中"
          description="当前还没有真实往年题资料，样张先用占位结构展示：后续会替换为原题拆解、知识点、题型、解题模板和同类变式题。"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-700">预计包含</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {sampleItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <span className="h-2 w-2 shrink-0 rounded-sm bg-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-blue-100 bg-blue-50 p-6 shadow-sm">
            <div className="rounded-lg border border-blue-100 bg-white p-5">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <p className="text-sm font-semibold text-blue-700">
                    样张占位
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">
                    原题拆解与变式训练
                  </h3>
                </div>
                <span className="rounded-md bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
                  Preview
                </span>
              </div>
              <div className="mt-5 space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-medium text-slate-700">
                    <span>极限计算</span>
                    <span>AI 拆题</span>
                  </div>
                  <div className="mt-2 h-2 rounded-sm bg-slate-100">
                    <div className="h-2 w-[88%] rounded-sm bg-blue-600" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium text-slate-700">
                    <span>导数应用</span>
                    <span>AI 总结</span>
                  </div>
                  <div className="mt-2 h-2 rounded-sm bg-slate-100">
                    <div className="h-2 w-[76%] rounded-sm bg-slate-950" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium text-slate-700">
                    <span>积分计算</span>
                    <span>AI 出题</span>
                  </div>
                  <div className="mt-2 h-2 rounded-sm bg-slate-100">
                    <div className="h-2 w-[68%] rounded-sm bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
