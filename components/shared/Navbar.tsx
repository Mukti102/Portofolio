import React, { useEffect, useState } from "react";
import { Arizonia } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const satisfy = Arizonia({
  subsets: ["latin"],
  weight: "400",
});

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Player",
    href: "/player",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

function Navbar() {
  const pathname = usePathname();
  const [windowY, setWindowY] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setWindowY(window.scrollY);
    };
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sm:py-4 py-3 flex z-[100] items-center justify-between sm:px-12 px-5 right-0 top-0 bg-secondary bg-opacity-30 left-0 fixed ${
        windowY >= 100
          ? "border-b-[.7px] backdrop-blur-md dark:border-slate-800 border-slate-300"
          : null
      }`}
    >
      <span className={`${satisfy.className} sm:text-4xl text-2xl`}>MuktI</span>
      <ul className="sm:flex hidden w-1/3 justify-evenly font-semibold sm:text-[1rem]">
        {navLinks.map((item, idx) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={idx}
              href={item?.href}
              className={`${isActive ? "active" : null} underline-animation`}
            >
              {item?.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
