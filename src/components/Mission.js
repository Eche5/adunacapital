import React from "react";
import placeholder from "../../Assets/Placeholder Image3.png";
import Image from "next/image";

function Mission() {
  return (
    <div className=" flex justify-center items-center gap-[80px] p-20 font-Montserrat font-bold text-[#666666]  bg-[#FFF5F5]">
      <Image alt="#" src={placeholder} />
      <div>
        <h1 className=" text-[40px]">
          Our Mission<span className=" text-[#E02942]">.</span>
        </h1>
        <p className="text-[#666666] leading-7">
          Aduna Capital is committed to fostering a thriving African startup
          ecosystem. Our mission is to support innovative entrepreneurs with the
          capital, resources, and strategic guidance needed to scale their
          solutions and impact. We believe in creating value that transcends
          financial returns, contributing to the social and environmental
          progress of the communities we invest in.
        </p>
      </div>
    </div>
  );
}

export default Mission;
