"use client";
import React from "react";

export const Header = () => {
  return (
    <div className="bg-green-500 text-center">
      <h1 className="text-3xl font-bold pt-20">クロスSWOT分析アプリ</h1>
      <p className="py-5">
        入力した「強み・弱み・機会・脅威」を基にchatGPTを用いてクロスSWOT分析を行います。
      </p>
    </div>
  );
};

export default Header;
