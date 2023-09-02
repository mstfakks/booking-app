"use client";
import { companies } from "@/constants";
import Image from "next/image";

export default function Companies() {
  return (
    <div className="flex flex-row px-44 justify-center items-center h-40 w-full gap-44 bg-[#868686]/50">
      {companies.map((company) => (
        <div className="flex-shrink-0">
          <Image
            key={company.id}
            src={company.imgUrl}
            width={140}
            height={50}
            alt="company logo"
          />
        </div>
      ))}
    </div>
  );
}
