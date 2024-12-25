"use client";
import { useState } from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainLogo } from "../../../../public";
import { GrLanguage } from "react-icons/gr";
import { BiDollarCircle } from "react-icons/bi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logout from "./Logout"

const links = [
  { url: "/", title: "الــرئيسية" },
  { url: "/my-sim", title: "شرائــحي" },
  { url: "/business-sims", title: "شــرائح لــلاعمال" },
  { url: "/contact-us", title: "اتصــل بنـــا" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header className="z-50 w-full border-b-[1px] relative bg-white">
      <div className="container mx-auto w-full p-4 flex justify-between items-center transition duration-300 h-[110px]">
        <Link href="/" className="flex-shrink-0">
          <Image src={mainLogo} alt="Main Logo" width={130} />
        </Link>

        <nav className="hidden lg:flex justify-between items-center w-full mx-4">
          <ul className="flex xl:gap-6 lg:gap-4 gap-2">
            {links.map((link) => (
              <li key={link.title} data-active={pathName === link.url}>
                <Link
                  className={`cursor-pointer xl:text-lg lg:text-md text-sm font-semibold lg:px-3 px-1 py-3 transition-colors rounded-full ${
                    pathName === link.url
                      ? "bg-[#4412BF]  text-white"
                      : "text-[#171196]"
                  }`}
                  href={link.url}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 g:text-lg text-md">
            <div className="text-[#171196] flex gap-2 items-center  font-semibold border-l-[2px]  md:px-4 px-2  shrink-0">
              <BiDollarCircle size={30} />
              USD
            </div>
            <div className="text-[#171196] flex gap-2 items-center  font-semibold border-l-[2px] md:px-4 px-2 shrink-0">
              <GrLanguage size={30} />
              العربية
            </div>
            <Logout/>

          </div>
        </nav>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-[#171196] text-3xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden bg-white border-t-[1px]">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {links.map((link) => (
              <li key={link.title} data-active={pathName === link.url}>
                <Link
                  className={`cursor-pointer text-lg font-semibold px-3 py-3 transition-colors rounded-full ${
                    pathName === link.url
                      ? "text-[#4412BF] px-4 py-4 "
                      : " text-[#8F8F8F]"
                  }`}
                  href={link.url}
                  onClick={() => setIsOpen(false)} 
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 px-6 py-4 border-t-[1px]">
            <div className="text-[#171196] flex gap-2 items-center text-lg font-semibold">
              <BiDollarCircle size={30} />
              USD
            </div>
            <div className="text-[#171196] flex gap-2 items-center text-lg font-semibold">
              <GrLanguage size={28} />
              العربية
            </div>
         <Logout/>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
