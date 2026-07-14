import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tlb.rinyuki.com"),
  title: "题练帮 · 课程冲刺训练包 | MVP 内测版",
  description:
    "题练帮是 AI 往年题拆解与同类题训练工具，帮助大学生从看懂答案变成会做变式。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth antialiased">
      <body>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
