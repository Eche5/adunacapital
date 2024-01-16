import Image from "next/image";
import React from "react";
import idea from "@/Images/image5.png";
import integrity from "@/Images/image6.png";
import impact from "@/Images/image7.png";
import inclusivity from "@/Images/image8.png";

function SubAbout() {
  return (
    <section className="font-Montserrat">
      <div className=" text-center bg-gradient-to-r from-customRed to-[neutral-500 ] p-20 ">
        <h1 className=" text-[56px] font-bold">About us</h1>
        <p className=" font-semibold text-[18px]">
          Aduna Capital is a visionary investment firm dedicated to unlocking
          the transformative potential of African startups.
        </p>
      </div>
      <div className=" text-center p-20">
        <h1 className=" text-customRed text-[16px]">Promoting empowerment</h1>
        <h2 className=" text-customGrey text-[40px]">
          Unleashing Potential<span className=" text-customRed">.</span>
        </h2>
        <p className=" text-customGrey text-[20px]">
          Transforming African startups through visionary investments
        </p>
      </div>

      <div className=" flex justify-center items-center  gap-[80px] p-20">
        <div className="bg-gradient-to-r from-customRed rounded-[30px] to-[neutral-500 ] w-[50%] p-10">
          <h1 className="text-[16px] text-customBackground font-semibold">
            Our Mission
          </h1>
          <h2 className=" text-[40px] font-bold">
            Driving Growth and Impact in Africa
            <span className=" text-customRed">.</span>
          </h2>
          <p>
            Aduna Capital is a pioneering investment firm dedicated to unlocking
            the potential of early-stage, tech-enabled startups and
            infrastructure projects across Africa. With a strategic focus on
            underserved regions, including Northern Nigeria, Ghana, Senegal,
            Uganda, and Kenya, we are committed to catalyzing innovation,
            driving sustainable growth, and building the foundations for future
            development. Our commitment extends to supporting female founders,
            recognizing their crucial role in shaping the future of technology
            and business.
          </p>
        </div>
        <div className="bg-gradient-to-r from-customRed to-[neutral-500 ] rounded-[30px] w-[50%] p-10">
          <h1 className="text-[16px] text-customBackground font-semibold">
            Our Vision
          </h1>
          <h2 className=" text-[40px] font-bold">
            Supporting Entrepreneurs and Fueling Innovation
            <span className=" text-customRed">.</span>
          </h2>
          <p>
            Our vision at Aduna Capital is to be at the forefront of nurturing
            groundbreaking startups and infrastructure projects that are poised
            to redefine the technological and economic landscape in Africa and
            beyond.
          </p>
        </div>
      </div>
      <h1 className=" text-customGrey text-[40px] text-center font-bold">
        Unlocking the transformative<br></br> potential of African startups
        <br></br> through visionary investments
        <span className=" text-customRed">.</span>
      </h1>
      <div className="flex justify-center items-center gap-20 p-20 text-center">
        <div className="flex flex-col items-center">
          <Image alt="#" src={idea} />
          <div className="mt-4">
            <h1 className="text-2xl font-bold py-8 text-customGrey">
              Innovation
            </h1>
            <p>
              Championing cutting-edge
              <br /> solutions.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image alt="#" src={integrity} />
          <h1 className="text-2xl font-bold py-8 text-customGrey">Integrity</h1>
          <p>
            Upholding transparency and ethical<br></br> investment practices.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image alt="#" src={impact} />
          <h1 className="text-2xl font-bold py-8 text-customGrey">Impact</h1>
          <p>
            Committing to long-term,<br></br> sustainable development.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image alt="#" src={inclusivity} />
          <h1 className="text-2xl font-bold py-8 text-customGrey">
            Inclusivity
          </h1>
          <p>
            Ensuring diverse representation and<br></br> equitable
            opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SubAbout;
