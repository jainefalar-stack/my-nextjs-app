"use client";
import React from "react";

export default function About() {
  return (
    <div
      className="flex flex-1 justify-center items-center
    bg-blue-400"
    >
      <div
        className="bg-amber-100 pt-4 px-6
    rounded-lg shadow border border-pink-400"
      >
        <p className="font-bold text-2xl text-center">About</p>
        <img
          className="w-64 rounded-full shadow-lg"
          src="https://media.newyorker.com/photos/5dfab39dde5fcf00086aec77/master/pass/Lane-Cats.jpg"
        />
      </div>
      <button
        onClick={() => router.back()}
        className="bg-purple-500 py-2 px-4 rounded-4xl shadow mt-4"
      >
        Go Back
      </button>
    </div>
  );
}
