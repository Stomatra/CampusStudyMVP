import { PageHero } from "@/components/PageHero";
import { FORM_LINKS } from "@/lib/links";

const plans = [
  {
    name: "免费版",
    price: "0 元",
    features: ["课程样张", "部分知识点", "少量同类题", "课程避坑指南"],
  },
  {
    name: "基础版",
    price: "9.9 元",
    features: ["知识点总结", "高频题型归纳", "少量同类题", "考前速背版"],
  },
  {
    name: "训练版",
    price: "19.9 元",
    features: [
      "完整题型拆解",
      "同类变式题",
      "标准答案解析",
      "易错点总结",
      "7 天冲刺计划",
    ],
  },
  {
    name: "同步跟学版",
    price: "29.9 元 / 学期内测价",
    features: [
      "每周知识点总结",
      "每周同类题",
      "阶段小测",
      "期中 / 期末冲刺更新",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <PageHero
        eyebrow="套餐结构"
        title="题练帮 · 课程冲刺训练包内测套餐"
        description="当前仅展示内测阶段的价格方案，不接入登录、支付、订单或会员系统。想参与内测可以先填写预约表。"
        actions={
          <a
            href={FORM_LINKS.signup}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            预约内测
          </a>
        }
      />

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex min-h-80 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-blue-700">
                {plan.name}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                {plan.price}
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
