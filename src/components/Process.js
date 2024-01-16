import Image from "next/image";
import React from "react";
import engage from "../../Assets/image 201.png";
import deligence from "../../Assets/image 211.png";
import beyond from "../../Assets/image 222.png";

function Process() {
  return (
    <div className=" font-Montserrat p-20 bg-customBackground">
      <h1 className=" text-[16px] text-customRed font-semibold text-center">
        Our Process
      </h1>
      <h2 className=" font-bold text-[48px] text-customGrey text-center">
        How we work with you<span>.</span>
      </h2>
      <p className="  text-center text-[18px] leading-[39px] font-medium text-[black]">
        Upon working with founders, our process involves three simple steps to
        ensure a<br></br> smooth collaboration.
      </p>
      <div className=" flex justify-between items-center p-20">
        <div className="flex flex-col items-center">
          <Image alt="#" src={engage} />
          <h1 className=" text-customGrey text-[32px] font-bold">
            Initial Engagement
          </h1>
          <p className=" text-[16px] font-normal text-center">
            Share your business with us through a simple process.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image alt="#" src={deligence} />
          <h1 className=" text-customGrey text-[32px] font-bold">
            Due Diligence
          </h1>
          <p className=" text-[16px] font-normal text-center">
            We conduct a thorough review to understand your<br></br> business
            model, market, and potential.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image alt="#" src={beyond} />
          <h1 className=" text-customGrey text-[32px] font-bold">
            Investment & Beyond
          </h1>
          <p className=" text-[16px] font-normal text-center">
            If there&apos;s a fit, we invest and work closely with you to
            <br></br> accelerate growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
