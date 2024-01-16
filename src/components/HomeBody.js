import React from "react";
import Placeholder from "@/Images/PlaceholderImage.png";
import Image from "next/image";

function HomeBody() {
  return (
    <div
      className=" justify-between flex items-center m-4 gap-[80px] py-[112px] px-[64px] font-Montserrat bg-[#FFF5F5]
"
    >
      <div>
        <h1
          className="text-[48px] font-extrabold text-[#666666]
"
        >
          Pioneering&nbsp;
          <span className="text-[#E02942]">Venture</span>
          <br></br>
          <span className="text-[#E02942]"> Capital</span> in Africa.
        </h1>

        <p className=" text-[24px]">
          Empowering innovation, driving growth, and<br></br> fostering
          sustainability
        </p>
        <button className=" bg-[#E02942]  text-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
          Join Our Mission
        </button>
      </div>
      <div>
        <Image
          alt="#"
          src={Placeholder}
          className=" w-[616px] h-[640px] rounded-[30px]"
        />
      </div>
    </div>
  );
}

export default HomeBody;
