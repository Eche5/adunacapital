"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/Images/image1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavBar() {
  const pathname = usePathname();
  return (
    <div className=" flex justify-between items-center m-4 font-Montserrat">
      <Link href="/">
        <Image alt="#" src={Logo} className=" w-[296px] h-[72px]" />
      </Link>
      <ul className=" flex justify-between gap-8 font-bold">
        <Link
          href="/AboutUs"
          className={pathname == "/AboutUs" ? "text-customRed" : "text-[black]"}
        >
          About Us
        </Link>
        <Link
          href="/Portfolio"
          className={
            pathname == "/Portfolio" ? "text-customRed" : "text-[black]"
          }
        >
          Portfolio
        </Link>
        <Link
          href="/Commitment"
          className={
            pathname == "/Commitment" ? "text-customRed" : "text-[black]"
          }
        >
          Our commitment
        </Link>
        <Link
          href="/Entrepreneur"
          className={
            pathname == "/Entrepreneur" ? "text-customRed" : "text-[black]"
          }
        >
          For Enterpreneurs
        </Link>
      </ul>
      <button className=" bg-[#E02942] text-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
        Join Our Mission
      </button>
    </div>
  );
}

export default NavBar;
