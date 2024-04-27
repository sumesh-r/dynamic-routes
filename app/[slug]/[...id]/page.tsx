"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  const path = usePathname();
  const currentid = path.toString().replaceAll(",", "/");
  console.log(currentid);

  const router = useRouter();
  return (
    <div className="h-screen flex flex-col bg-blue-300 items-center justify-center">
      <div
        className="text-xl text-blue-500 font-semibold cursor-pointer"
        onClick={() => {
          router.back();
        }}
      >
        go to back
      </div>
      <div className="text-2xl">
        folder name: {params.id}
      </div>
      <div
        className="text-xl text-blue-500 font-semibold cursor-pointer"
        onClick={() => {
          router.push(`${currentid}/abc`);
        }}
      >
        go to folder abc
      </div>
    </div>
  );
}
