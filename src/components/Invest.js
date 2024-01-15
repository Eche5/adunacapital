import Image from "next/image";
import React from "react";
import placeholder from "../../Assets/Placeholder Image4.png";

function Invest() {
  return (
    <div className=" flex justify-center items-center gap-[80px] p-20 font-Montserrat bg-customBackground">
      <Image alt="#" src={placeholder} />
      <div>
        <h1 className=" text-[16px] text-customRed font-semibold">
          Why Invest with Us
        </h1>
        <h2 className=" text-[40px] font-bold text-customGrey">
          Invest with Purpose<span className=" text-customRed">.</span>
        </h2>
        <p>
          Aduna Capital is not just about venture capital; it's about venture
          impact. Our unique approach combines rigorous due diligence, a
          commitment to ESG principles, and a deep understanding of the African
          market. We offer our investors the opportunity to be part of Africa's
          growth story, contributing to a portfolio that's as diverse as it is
          dynamic.
        </p>
        <button className=" bg-[#E02942] text-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
          Invest with Aduna Capital
        </button>
      </div>
    </div>
  );
}

export default Invest;
