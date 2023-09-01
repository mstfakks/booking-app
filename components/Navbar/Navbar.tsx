import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { BaseButton } from "..";
export default function Navbar() {
  return (
    <header className="absolute w-full z-10 mt-16 px-80">
      <nav className=" flex items-center justify-between">
        <div>
          <p className="text-3xl pt-1 font-bold text-white pt">Travel</p>
          <div className="-rotate-4 relative left-7 -mt-3">
            <Image
              src="/arrow-05.svg"
              width={96}
              height={28}
              alt="arrow"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex gap-12">
          {navbarLinks.map((link) => (
            <Link
              href={link.path}
              className="text-white text-base font-medium"
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <BaseButton
          text="Get in Touch"
          type="button"
          styles="bg-orange-500 py-5 shadow-lg px-7 text-white rounded-lg hover:bg-orange-500/70 "
        />
      </nav>
    </header>
  );
}
