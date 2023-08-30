import { BaseButton, Companies } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <div className="absolute left-0 top-0">
          <Image
            src="/travel.svg"
            width={1920}
            height={976}
            alt="travel image"
            className="object-cover"
          />
        </div>
        <div className="ml-80 z-10 absolute mt-56 ">
          <div className="w-20 h-4 ">
            <Image
              src="/vector-1.svg"
              width={78}
              height={15}
              alt="zigzag border"
              className="object-contain"
            />
          </div>
          <div className="max-w-2xl mt-3">
            <p className=" text-white text-6xl font-bold ">
              No matter where you're going to, we'll take you there
            </p>
          </div>
          <div className="bg-neutral-100/60 backdrop-blur-md rounded-md mt-7">
            <div className="flex min-h-[102px] w-[844px] flex-row items-center justify-around">
              <p className="text-white text-lg font-normal">Where to ?</p>
              <div className="w-[3px] rounded-3xl h-12 bg-gray-200" />
              <p className="text-white text-lg font-normal">Travel Type</p>
              <div className="w-[3px] rounded-3xl h-12 bg-gray-200" />
              <p className="text-white text-lg font-normal">Duration</p>
              <BaseButton
                text="Search"
                type="submit"
                styles="bg-orange-500 py-4 shadow-lg px-14 text-white rounded-xl hover:shadow-none"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Companies />
      </section>
    </main>
  );
}
