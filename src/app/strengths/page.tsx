"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { useStore } from "@/contexts/context";
import { ContentType } from "@/types/type";

export const Page = () => {
  const { inputStore, setinputStore } = useStore();

  const handleChange = () => {
    setinputStore({ projectDetail: "変更" } as ContentType);
  };

  return (
    <div className="text-center">
      <p>強み</p>
      <p>{inputStore.projectDetail}</p>
      <div>
        <button>
          <Link href={"/projectDetail"} className="bg-green-500 p-2 mr-2">
            戻る
          </Link>
        </button>
        <button onClick={handleChange} className="p-2 bg-green-500">
          change
        </button>
      </div>
    </div>
  );
};

export default Page;
