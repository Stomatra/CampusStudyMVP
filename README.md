# 题练帮 · 课程冲刺训练包 MVP

题练帮是一个面向大学生的课程复习工具 MVP 网站，副标题为“AI 往年题拆解与同类题训练工具”。第一版用于展示项目定位、第一批课程、样张占位、内测预约和用户反馈入口。

项目核心定位是用 AI 整理往年题，拆解知识点和题型，并生成同类练习题，让用户不只是看懂原题，而是真的练会变式题。

核心 slogan：别人给你资料，我们帮你把题练会。

课程体系已调整为按“学院 / 专业 / 年级 / 学期”推荐课程。当前静态示例路径为：电子科学与工程学院 → 集成电路设计与集成系统 → 大二上。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- 静态导出，适合后续部署到 Cloudflare Pages、Vercel 或其他静态托管服务

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000` 查看页面。

## 构建静态文件

```bash
npm run build
```

项目已在 `next.config.ts` 中启用 `output: "export"`。构建后会生成 `out` 目录，可作为静态站点部署。

## 部署域名

后续准备部署到子域名：

```text
https://tlb.rinyuki.com
```

## 表单链接

内测预约、课程需求和课程资料贡献链接集中放在 `lib/links.ts`：

```ts
export const FORM_LINKS = {
  signup: "https://docs.qq.com/form/page/DV1BWb3NMTWxYcnRY",
  courseDemand: "https://docs.qq.com/form/page/DV1BWb3NMTWxYcnRY",
  contribution: "https://docs.qq.com/form/page/DV3FEdnhMdGVwdGhs",
} as const;
```

如果后续更换腾讯文档表单地址，只需要修改这个文件。

## 页面结构

主要页面在 `app/page.tsx`，模块拆分在 `components` 目录：

- `Hero`：首页首屏与产品预览
- `CoreValue`：AI 拆题、AI 总结、AI 出题三个核心卖点
- `Features`：训练包功能
- `Courses`：专业路径与推荐课程入口
- `SamplePreview`：样张占位
- `Participate`：内测预约和课程资料贡献入口
- `Footer`：页脚说明

## 静态页面

- `/majors`：学院 / 专业选择入口
- `/majors/integrated-circuit`：集成电路设计与集成系统 · 大二上推荐课程
- `/courses`：全部课程，按公共基础课、工科基础课、专业基础课展示，当前为占位数据
- `/courses/analog-electronics`：模拟电子技术详情页
- `/courses/college-physics-b2`：大学物理 BII 详情页
- `/pricing`：内测套餐结构展示，暂不接入支付
- `/about`：MVP 阶段说明和项目边界
- `/feedback`：内测预约 / 课程需求、课程资料贡献两个表单入口

课程信息集中维护在 `data/courses.ts`，每门课包含 `id`、`name`、`category`、`status`、`tags`、`suitableFor`、`semester` 和 `description`。

## 后续可扩展方向

- 增加真实样张 PDF 或图片预览
- 为更多课程增加独立详情页
- 接入邮件订阅或更多表单服务
- 增加更多学院、专业、年级和学期的静态推荐路径
- 增加课程优先级投票
- 增加用户反馈看板
- 后续再接入登录、支付、会员、题库或更完整的 AI 生成能力
