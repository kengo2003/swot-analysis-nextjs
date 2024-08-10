"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { useStore } from "@/contexts/context";
import { ContentType } from "@/types/type";
import { Button } from "@/components/ui/button";

export const Page = () => {
  const { inputStore, setInputStore } = useStore();

  const handleChange = () => {
    setInputStore({ projectDetail: "変更" } as ContentType);
  };

  return (
    <div className="text-center">
      <p>強み</p>
      <p>{inputStore.projectDetail}</p>

      <button onClick={handleChange} className="p-2 bg-green-500">
        change
      </button>
      <div>
        <Button className="bg-black mr-10" asChild>
          <Link href={"/projectDetail"} className="text-white">
            戻る
          </Link>
        </Button>
        <Button type="submit" className="bg-green-500" asChild>
          <Link href="#">次へ</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
