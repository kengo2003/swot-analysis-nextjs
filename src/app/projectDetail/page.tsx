"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useStore } from "@/contexts/context";

const page = () => {
  const { inputStore, setinputStore } = useStore();
  
  return (
    <div className="text-center pt-10 px-4">
      <p>業務内容またはプロジェクト概要を簡単に記入してください</p>
      <p>{inputStore.projectDetail}</p>
      <form>
        <Input
          type="text"
          placeholder="入力してください"
          className="w-full my-10 mx-auto"
        />
        <button className="bg-green-500 p-2 mr-2">
          <Link href={"/"}>戻る</Link>
        </button>
        <Button type="submit" asChild>
          <Link href="/strengths">次へ</Link>
        </Button>
      </form>
    </div>
  );
};

export default page;
