"use client";
import { useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ContextData } from "@/contexts/context";
import { ContentType } from "@/types/type";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "クロスSWOT分析アプリ",
//   description: "chatGPTを用いたクロスSWOT分析を行えます。",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [inputStore, setInputStore] = useState<ContentType>({} as ContentType);
  return (
    <html lang="ja" className="bg-gray-200">
      <body className={`${inter.className} bg-gray-200`}>
        <ContextData.Provider value={{ inputStore, setInputStore }}>
          <Header />
          {children}
        </ContextData.Provider>
      </body>
    </html>
  );
}
