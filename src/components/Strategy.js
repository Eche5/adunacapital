import React from "react";
import placeholder from "@/Images/PlaceholderImage5.png";
import Image from "next/image";

function Strategy() {
  return (
    <div className=" flex justify-center items-center gap-[80px] p-20 font-Montserrat">
      <di>
        <h1 className=" text-[16px] text-customRed font-semibold">
          Investment Focus
        </h1>
        <h2 className=" text-[40px] font-bold text-customGrey">
          Targeted Investment<br></br> Strategy
          <span className=" text-customRed">.</span>
        </h2>
        <p>
          Our strategy is twofold: we invest in tech-driven solutions and
          infrastructure projects that are crucial for the continent&apos;s
          growth. By supporting startups that develop innovative infrastructure
          – whether in transportation, telecommunications, energy, or other
          essential sectors – we aim to lay the groundwork for Africa&apos;s
          future development. Our investments in tech-enabled businesses
          complement this by driving digital transformation and economic
          diversification.
        </p>
      </di>
      <Image alt="#" src={placeholder} />
    </div>
  );
}

export default Strategy;
