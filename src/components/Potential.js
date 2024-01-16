import Image from "next/image";
import React from "react";
import placeholder from "@/Assets//Placeholder4.png";
function Potential() {
  return (
    <section className=" flex justify-center items-center gap-[80px] p-20 font-Montserrat bg-customBackground">
      <div>
        <h1 className=" text-customGrey text-[40px] font-bold">
          Unlocking Potential Through<br></br> Mentorship and Capacity<br></br>
          Building
          <span className=" text-customRed">.</span>
        </h1>
        <p className=" font-medium text-[20px]">
          We prioritize ventures that leverage technology to address critical
          challenges in sectors such as fintech, healthtech, agritech, and
          beyond. Our geographical lens sharpens on Northern Nigeria, with a
          commitment to fostering growth in this burgeoning entrepreneurial hub,
          while also maintaining a significant presence across Africa.
        </p>
      </div>
      <Image alt="#" src={placeholder} />
    </section>
  );
}

export default Potential;
