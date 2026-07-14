import Link from "next/link";
import { FORM_LINKS } from "@/lib/links";

const navigation = [
  { href: "/", label: "首页" },
  { href: "/majors", label: "专业推荐" },
  { href: "/courses", label: "全部课程" },
  { href: "/pricing", label: "套餐" },
  { href: "/about", label: "关于" },
  { href: "/feedback", label: "反馈" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className="text-base font-semibold text-slate-950">题练帮</span>
          <span className="text-xs font-medium text-slate-500">
            AI 往年题拆解与同类题训练工具
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={FORM_LINKS.signup}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-700 transition hover:text-blue-800"
          >
            预约内测
          </a>
        </nav>
      </div>
    </header>
  );
}
