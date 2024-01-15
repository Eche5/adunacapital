import React from "react";
import placholde from "../../Assets/Placeholder.png";
import placholder1 from "../../Assets/Placeholder1.png";
import placholder2 from "../../Assets/Placeholder2.png";
import logo1 from "../../Assets/Logo.png";
import logo2 from "../../Assets/Logo=2, Color=Dark.png";

import Image from "next/image";
function Investment() {
  return (
    <div className="  font-Montserrat bg-customBackground">
      <h1 className=" text-[16px] text-center font-semibold text-customRed">
        Investments
      </h1>
      <h2 className=" text-[40px] text-center font-bold text-customGrey">
        Transformative African Startup Investments
        <span className=" text-customRed">.</span>
      </h2>
      <p className="text-center">
        Our team has a collective track record of successful angel investments
        <br></br>
        spanning various sectors, demonstrating broad and seasoned expertise in
        <br></br>
        early-stage ventures.
      </p>
      <div className=" flex justify-center gap-40 p-20">
        <div>
          <Image alt="#" src={placholde} />
          <h1 className=" text-[24px] font-bold">Stylebitt</h1>
          <p className=" text-[16px] font-medium">
            Company 1 is a leading agric start-up innovating solutions across
            Africa
          </p>
          <div className=" flex justify-start gap-5 py-5">
            <p className=" bg-[#EEEEEE]">Tech</p>
            <p className=" bg-[#EEEEEE]">Agriculture</p>
            <p className=" bg-[#EEEEEE]">Healthcare</p>
          </div>
          <p className=" text-customRed text-[16px] font-medium">
            Learn more..
          </p>
        </div>
        <div>
          <Image alt="#" src={placholder1} />
          <h1 className=" text-[24px] font-bold">Nearpays</h1>
          <p className=" text-[16px] font-medium">
            Company 2 is a leading tech startup disrupting the industry.
          </p>
          <div className=" flex justify-start gap-5 py-5">
            <p className=" bg-[#EEEEEE]">Tech</p>
            <p className=" bg-[#EEEEEE]">Finance</p>
            <p className=" bg-[#EEEEEE]">Healthcare</p>
          </div>
          <p className=" text-customRed text-[16px] font-medium">
            Learn more..
          </p>
        </div>
        <div>
          <Image alt="#" src={placholder2} />
          <h1 className=" text-[24px] font-bold">kamel</h1>
          <p className=" text-[16px] font-medium">
            Company 3 is revolutionizing the finance sector with its innovative
            solutions.
          </p>
          <div className=" flex justify-start gap-5 py-5">
            <p className=" bg-[#EEEEEE]">Tech</p>
            <p className=" bg-[#EEEEEE]">Code</p>
            <p className=" bg-[#EEEEEE]">Healthcare</p>
          </div>
          <p className=" text-customRed text-[16px] font-medium">
            Learn more..
          </p>
        </div>
      </div>
      <div className=" flex justify-center pb-20">
        <button className=" bg-[#E02942] text-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
          View all
        </button>
      </div>

      <div className=" text-center ">
        <h1 className=" text-[20px] font-semibold">
          Other startups we’ve invested in
        </h1>
        <div className=" flex justify-center gap-20 py-20">
          <Image alt="#" src={logo1} />
          <Image alt="#" src={logo2} />
        </div>
      </div>
    </div>
  );
}

export default Investment;
