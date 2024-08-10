"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const StartButton = () => {
  return (
    <div className="py-10">
      <Button
        className="bg-green-600 text-slate-100 w-1/4 hover:bg-green-500"
        asChild
      >
        <Link href="/projectDetail">START</Link>
      </Button>
    </div>
  );
};

export default StartButton;
