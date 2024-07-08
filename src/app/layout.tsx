import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "クロスSWOT分析アプリ",
  description: "chatGPTを用いたクロスSWOT分析を行えます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="bg-gray-200">
      <body className={`${inter.className} bg-gray-200`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
