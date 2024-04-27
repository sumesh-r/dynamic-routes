"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const currentSlug = params.slug
    .toString()
    .replaceAll(",", "/");

  console.log(params.slug);

  const router = useRouter();
  return (
    <div className="h-screen flex flex-col bg-red-300 items-center justify-center">
      <div
        className="text-xl text-blue-500 font-semibold cursor-pointer"
        onClick={() => {
          router.back();
        }}
      >
        go to back
      </div>
      <div className="text-2xl">
        folder name: {params.slug}
      </div>
      <div
        className="text-xl text-blue-500 font-semibold cursor-pointer"
        onClick={() => {
          router.push(`/${currentSlug}/abc`);
        }}
      >
        go to folder abc
      </div>
    </div>
  );
}
