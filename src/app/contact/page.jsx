"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Contact() {
  const router = useRouter();

  return (
    <div
      className="flex flex-1
justify-center items-center"
    >
      <div
        className="flex flex-col bg-gray-400 border-gray-700
py-4 px-6
rounded-lg shadow border"
      >
        <p className="font-bold text-2xl text-center">Contact</p>
        <p className="text-lg">Gmail: jaine.falar@hcdc.edu.ph</p>
        <button
          onClick={() => router.push("/")}
          className="bg-amber-200 py-2 px=4 rounded-4xl shadow"
        ></button>
      </div>
    </div>
  );
}
