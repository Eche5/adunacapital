import React from "react";
import one from "../../Assets/image 16.png";
import two from "../../Assets/image 17.png";
import three from "../../Assets/image 18.png";
import four from "../../Assets/image 19.png";
import divider from "../../Assets/Divider.png";

import Image from "next/image";

function Criteria() {
  return (
    <div className=" flex justify-center gap-[80px] font-Montserrat p-20">
      <div>
        <h1 className=" text-[16px] text-customRed font-semibold">
          Our Investment Criterea
        </h1>
        <h2 className=" text-[40px] font-bold text-customGrey">
          We look for the following in<br></br> our potential investees
          <span className=" text-customRed">:</span>
        </h2>
        <button className=" bg-[#E02942] text-[16px] font-bold text-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
          Pitch with us
        </button>
      </div>
      <div>
        <div className=" flex items-center gap-10">
          <Image alt="#" src={one} />
          <div>
            <h1>Innovation</h1>
            <p>Disruptive solutions with a clear technological edge.</p>
          </div>
        </div>
        <Image alt="#" src={divider} className=" m-6" />
        <div className=" flex  items-center gap-10">
          <Image alt="#" src={two} />
          <div>
            <h1>Scalability</h1>
            <p>Potential for rapid growth and expansion.</p>
          </div>
        </div>
        <Image alt="#" src={divider} className=" m-6" />

        <div className=" flex  items-center gap-10">
          <Image alt="#" src={three} />
          <div>
            <h1>Team</h1>
            <p>Passionate founders with a track record of execution.</p>
          </div>
        </div>
        <Image alt="#" src={divider} className=" m-6" />

        <div className=" flex  items-center gap-10">
          <Image alt="#" src={four} />
          <div>
            <h1>Impact</h1>
            <p>
              Businesses that address significant challenges and contribute to
              economic development..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Criteria;
