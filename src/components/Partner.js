import React from "react";
import place from "@/Images/PlaceholderImage0.png";
import Image from "next/image";
import tailor from "@/Images/image12.png";
import geda from "@/Images/image13.png";
import market from "@/Images/image14.png";
import growth from "@/Images/image15.png";

function Partner() {
  return (
    <div className=" flex justify-center items-center gap-[80px] font-Montserrat p-20 bg-customBackground">
      <Image alt="#" src={place} />
      <div className=" grid grid-cols-2 gap-8">
        <div>
          <Image alt="#" src={tailor} />
          <h1 className=" text-[24px] font-bold text-customGrey py-4">
            Tailored Investment
          </h1>
          <p className=" text-[16px] font-medium">
            We provide capital that aligns with<br></br> your growth stage and
            business<br></br>
            needs.
          </p>
        </div>
        <div>
          <Image alt="#" src={geda} />
          <h1 className=" text-[24px] font-bold text-customGrey py-4">
            Tailored Investment
          </h1>
          <p className=" text-[16px] font-medium">
            We provide capital that aligns with<br></br> your growth stage and
            business<br></br>
            needs.
          </p>
        </div>
        <div>
          <Image alt="#" src={market} />
          <h1 className=" text-[24px] font-bold text-customGrey py-4">
            Tailored Investment
          </h1>
          <p className=" text-[16px] font-medium">
            We provide capital that aligns with<br></br> your growth stage and
            business<br></br>
            needs.
          </p>
        </div>
        <div>
          <Image alt="#" src={growth} />
          <h1 className=" text-[24px] font-bold text-customGrey py-4">
            Tailored Investment
          </h1>
          <p className=" text-[16px] font-medium">
            We provide capital that aligns with<br></br> your growth stage and
            business<br></br>
            needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Partner;
