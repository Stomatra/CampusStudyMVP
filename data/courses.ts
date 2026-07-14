export type CourseCategory = "公共基础课" | "工科基础课" | "专业基础课";

export type CourseStatus = "重点筹备中" | "样张制作中" | "即将上线" | "规划中";

export type Course = {
  id: string;
  name: string;
  category: CourseCategory;
  status: CourseStatus;
  tags: string[];
  suitableFor: string;
  semester: string;
  description: string;
};

export const courses: Course[] = [
  {
    id: "calculus",
    name: "高数 / 微积分",
    category: "公共基础课",
    status: "样张制作中",
    tags: ["极限", "导数", "积分", "公共课"],
    suitableFor: "理工科低年级学生",
    semester: "大一上 / 大一下",
    description: "适合按题型整理极限、导数应用、积分计算和级数等常见考点。",
  },
  {
    id: "linear-algebra",
    name: "线性代数",
    category: "公共基础课",
    status: "即将上线",
    tags: ["矩阵", "行列式", "向量空间"],
    suitableFor: "理工科低年级学生",
    semester: "大一下 / 大二上",
    description: "围绕矩阵运算、线性方程组、特征值与二次型进行题型训练。",
  },
  {
    id: "probability-statistics",
    name: "概率论与数理统计",
    category: "公共基础课",
    status: "即将上线",
    tags: ["随机变量", "分布", "参数估计"],
    suitableFor: "电子信息、计算机、自动化等专业",
    semester: "大二上",
    description: "适合按分布模型、数字特征、统计推断和常见计算题进行训练。",
  },
  {
    id: "college-physics",
    name: "大学物理",
    category: "公共基础课",
    status: "即将上线",
    tags: ["力学", "电磁学", "波动"],
    suitableFor: "理工科低年级学生",
    semester: "大一下 / 大二上",
    description: "帮助学生把公式、模型和典型题型对应起来，减少只背公式的低效复习。",
  },
  {
    id: "college-physics-b2",
    name: "大学物理 BII",
    category: "公共基础课",
    status: "重点筹备中",
    tags: ["电磁学", "波动光学", "公式模型"],
    suitableFor: "集成电路设计与集成系统 · 大二上",
    semester: "大二上",
    description: "题型相对固定，适合按模型、公式和题型进行训练。",
  },
  {
    id: "c-programming",
    name: "C 语言程序设计",
    category: "公共基础课",
    status: "即将上线",
    tags: ["语法", "数组", "指针", "程序题"],
    suitableFor: "理工科低年级学生",
    semester: "大一上 / 大一下",
    description: "适合把语法点、经典程序题和易错输出题拆成可练习的模板。",
  },
  {
    id: "python-data-analysis",
    name: "Python 数据分析基础",
    category: "公共基础课",
    status: "即将上线",
    tags: ["Python", "数据处理", "可视化"],
    suitableFor: "集成电路设计与集成系统 · 大二上",
    semester: "大二上",
    description: "围绕基础语法、数据处理流程和常见分析题整理练习路径。",
  },
  {
    id: "marxism-principles",
    name: "马克思主义基本原理",
    category: "公共基础课",
    status: "即将上线",
    tags: ["公共课", "概念辨析", "简答题"],
    suitableFor: "本科公共课学生",
    semester: "大二上",
    description: "适合整理重点概念、常见辨析题、简答题模板和考前速背内容。",
  },
  {
    id: "xi-thought",
    name: "习近平新时代中国特色社会主义概论",
    category: "公共基础课",
    status: "即将上线",
    tags: ["公共课", "重点概念", "速背"],
    suitableFor: "本科公共课学生",
    semester: "大二上",
    description: "适合按章节重点、关键词和常见问答题进行考前复习整理。",
  },
  {
    id: "circuit-analysis",
    name: "电路分析",
    category: "工科基础课",
    status: "即将上线",
    tags: ["KCL", "KVL", "等效电路", "暂态"],
    suitableFor: "电子信息类、集成电路类专业",
    semester: "大一下 / 大二上",
    description: "适合按电路模型、分析方法和典型题型进行模板化训练。",
  },
  {
    id: "digital-logic",
    name: "数字逻辑",
    category: "工科基础课",
    status: "即将上线",
    tags: ["逻辑代数", "组合逻辑", "时序逻辑"],
    suitableFor: "电子信息类、计算机类、集成电路类专业",
    semester: "大二上",
    description: "围绕逻辑化简、组合电路和时序电路整理高频题型。",
  },
  {
    id: "analog-electronics",
    name: "模拟电子技术",
    category: "工科基础课",
    status: "重点筹备中",
    tags: ["二极管", "三极管", "放大电路", "反馈"],
    suitableFor: "集成电路设计与集成系统 · 大二上",
    semester: "大二上",
    description: "不是只看答案就能会，而是要掌握电路分析套路和同类题训练。",
  },
  {
    id: "signals-systems",
    name: "信号与系统",
    category: "工科基础课",
    status: "即将上线",
    tags: ["卷积", "傅里叶变换", "拉普拉斯变换"],
    suitableFor: "电子信息类、自动化类专业",
    semester: "大二下 / 大三上",
    description: "适合按变换、系统响应和典型计算题拆解训练。",
  },
  {
    id: "complex-functions",
    name: "复变函数与积分变换",
    category: "工科基础课",
    status: "即将上线",
    tags: ["复变函数", "积分变换", "留数"],
    suitableFor: "集成电路设计与集成系统 · 大二上",
    semester: "大二上",
    description: "适合把公式、变换规则和常考计算题整理成考前训练包。",
  },
  {
    id: "electromagnetic-fields",
    name: "电磁场与电磁波",
    category: "工科基础课",
    status: "即将上线",
    tags: ["麦克斯韦方程", "边界条件", "电磁波"],
    suitableFor: "电子信息类、集成电路类专业",
    semester: "大二下 / 大三上",
    description: "适合按物理模型、公式使用条件和计算题型进行训练。",
  },
  {
    id: "semiconductor-physics",
    name: "半导体物理",
    category: "专业基础课",
    status: "规划中",
    tags: ["能带", "载流子", "PN 结"],
    suitableFor: "集成电路设计与集成系统",
    semester: "大二下 / 大三上",
    description: "后续会围绕集成电路专业基础知识补充题型训练。",
  },
  {
    id: "integrated-circuit-process",
    name: "集成电路工艺基础",
    category: "专业基础课",
    status: "规划中",
    tags: ["工艺流程", "光刻", "刻蚀"],
    suitableFor: "集成电路设计与集成系统",
    semester: "大三上",
    description: "后续会补充工艺流程、概念辨析和典型简答题整理。",
  },
  {
    id: "digital-ic-design",
    name: "数字集成电路基础",
    category: "专业基础课",
    status: "规划中",
    tags: ["CMOS", "时序", "版图"],
    suitableFor: "集成电路设计与集成系统",
    semester: "大三上 / 大三下",
    description: "后续会优先整理数字 IC 设计常见概念和基础题型。",
  },
];

export const courseCategories: CourseCategory[] = [
  "公共基础课",
  "工科基础课",
  "专业基础课",
];

export const integratedCircuitRecommendedIds = [
  "analog-electronics",
  "college-physics-b2",
  "probability-statistics",
  "complex-functions",
  "python-data-analysis",
  "marxism-principles",
  "xi-thought",
] as const;

export const integratedCircuitRecommendedCourses = integratedCircuitRecommendedIds
  .map((id) => courses.find((course) => course.id === id))
  .filter((course): course is Course => Boolean(course));

export function getCourseById(id: string) {
  return courses.find((course) => course.id === id);
}

export function getRequiredCourseById(id: string) {
  const course = getCourseById(id);

  if (!course) {
    throw new Error(`Missing course: ${id}`);
  }

  return course;
}

export function getCoursesByCategory(category: CourseCategory) {
  return courses.filter((course) => course.category === category);
}
