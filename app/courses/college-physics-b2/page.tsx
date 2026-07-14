import type { Metadata } from "next";
import { CourseDetail } from "@/components/CourseDetail";
import { getRequiredCourseById } from "@/data/courses";

export const metadata: Metadata = {
  title: "大学物理 BII | 题练帮 · 课程冲刺训练包",
  description:
    "大学物理 BII 详情页，强调按模型、公式和题型进行训练。",
};

const course = getRequiredCourseById("college-physics-b2");

export default function CollegePhysicsB2Page() {
  return (
    <CourseDetail
      course={course}
      headline="大学物理 BII 题型相对固定，适合按模型、公式和题型进行训练。"
      lead="重点会放在公式使用条件、典型物理模型、题型拆解和同类题训练。"
      focusPoints={[
        "把常见物理模型和公式适用条件对应起来，减少盲目套公式。",
        "按电磁学、波动光学等模块整理固定题型和解题流程。",
        "围绕原题生成同类练习题，训练从识别模型到完整作答。",
      ]}
    />
  );
}
