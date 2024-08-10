"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useStore } from "@/contexts/context";
import { ContentType } from "@/types/type";

const page = () => {
  const [text, setText] = useState("");
  const { inputStore, setInputStore } = useStore();

  const handleChange = () => {
    setInputStore({ projectDetail: `${text}` } as ContentType);
    setText("");
  };

  return (
    <div className="text-center pt-10 px-4">
      <p>業務内容またはプロジェクト概要を簡単に記入してください</p>
      <div className="bg-gray-500">
        <p>{inputStore.projectDetail}</p>
      </div>
      <form>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="入力してください"
          className="w-full my-10 mx-auto"
        />
        <Button className="bg-black mr-10" asChild>
          <Link href={"/"} className="text-white">
            戻る
          </Link>
        </Button>
        <Button
          type="submit"
          className="bg-green-500"
          onClick={handleChange}
          asChild
        >
          <Link href="/strengths">次へ</Link>
        </Button>
      </form>
    </div>
  );
};

export default page;
