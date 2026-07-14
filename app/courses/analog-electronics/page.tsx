import type { Metadata } from "next";
import { CourseDetail } from "@/components/CourseDetail";
import { getRequiredCourseById } from "@/data/courses";

export const metadata: Metadata = {
  title: "模拟电子技术 | 题练帮 · 课程冲刺训练包",
  description:
    "模拟电子技术详情页，强调电路分析套路和同类题训练。",
};

const course = getRequiredCourseById("analog-electronics");

export default function AnalogElectronicsPage() {
  return (
    <CourseDetail
      course={course}
      headline="模电不是只看答案就能会，而是要掌握电路分析套路和同类题训练。"
      lead="重点会放在电路分析步骤、常见放大电路题型、反馈判断和同类变式练习。"
      focusPoints={[
        "把二极管、三极管、放大电路等原题拆成固定分析步骤。",
        "总结常见电路题的判断套路和标准作答模板。",
        "根据原题生成同类变式题，反复练到能独立分析。",
      ]}
    />
  );
}
