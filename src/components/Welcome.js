import Image from "next/image";
import React from "react";
import placeholder from "@/Images/PlaceholderImage2.png";

function Welcome() {
  return (
    <div className=" p-20 ">
      <div className=" flex justify-around items-center">
        <h1 className=" text-[40px] w-[50%] font-bold text-[#E02942] text-center ">
          Welcome to<br></br> Aduna Capital
        </h1>

        <p className=" text-justify font-medium text-[20px] w-[50%]">
          At Aduna Capital, we specialize in identifying and investing <br></br>
          in startups that not only leverage digital technology but also
          <br></br>
          contribute to building essential infrastructure. This <br></br>
          approach addresses key challenges and seizes opportunities <br></br>
          across the continent. Our strategy combines deep market <br></br>
          insights, strategic expertise, and a commitment to <br></br>
          sustainable development, enabling us to support and <br></br>nurture
          the next generation of African entrepreneurs.
        </p>
      </div>
      <div className=" flex justify-center mt-40">
        <Image alt="#" src={placeholder} className=" w-[1312px] h-[738px]" />
      </div>
    </div>
  );
}

export default Welcome;
