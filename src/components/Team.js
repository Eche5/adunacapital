import Image from "next/image";
import React from "react";
import team1 from "../../Assets/Team1.png";
import team2 from "../../Assets/Team2.png";
import team3 from "../../Assets/Team3.png";
import team4 from "../../Assets/Team4.png";

function Team() {
  return (
    <>
      <div className=" flex justify-center gap-[80px] font-Montserrat p-20">
        <div>
          <h1 className=" text-[16px] text-customRed font-semibold">
            People of Aduna
          </h1>
          <h2 className=" text-[40px] text-customGrey font-bold">
            Advisory Team
          </h2>
          <p className=" text-[20px] font-medium">
            The Aduna Capital Advisory Team<br></br> is a distinguished group of
            <br></br> industry leaders who bring a<br></br> wealth of knowledge,
            experience,<br></br> and networks to support our<br></br> mission.
          </p>
        </div>
        <div className=" grid grid-cols-2 gap-10">
          <div>
            <Image alt="#" src={team1} className=" w-[405px] h-[405px]" />
            <h1 className=" text-[20px] text-customRed font-bold pt-8">
              John Doe
            </h1>
            <h2 className=" text-[18px] text-customGrey pb-4">
              Managing Director
            </h2>
            <p className=" text-[14px]  text-customGrey">
              Bringing expertise in financial analysis and risk<br></br>
              assessment to our team.
            </p>
          </div>
          <div>
            <Image alt="#" src={team2} />
            <h1 className=" text-[20px] text-customRed font-bold pt-8">
              Jane Smith
            </h1>
            <h2 className=" text-[18px] text-customGrey pb-4">
              Financial Analyst
            </h2>
            <p className=" text-[14px]  text-customGrey">
              Developing innovative investment strategies to drive<br></br>
              growth and maximize returns.
            </p>
          </div>
          <div>
            <Image alt="#" src={team3} />
            <h1 className=" text-[20px] text-customRed font-bold pt-8">
              Michael Johnson
            </h1>
            <h2 className=" text-[18px] text-customGrey pb-4">
              Investment Strategist
            </h2>
          </div>
          <div>
            <Image alt="#" src={team4} />
            <h1 className=" text-[20px] text-customRed font-bold pt-8">
              jack Reacher
            </h1>
            <h2 className=" text-[18px] text-customGrey pb-4">
              Marketing Manager
            </h2>
            <p className=" text-[14px]  text-customGrey">
              Providing legal expertise and ensuring compliance with<br></br>
              regulatory requirements.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center gap-[80px] font-Montserrat bg-customBackground p-20">
        <h1 className=" text-center text-customRed text-[40px] font-bold">
          Unlocking African<br></br> Potential
        </h1>
        <h1 className=" text-justify text-[20px] font-medium">
          Our advisors play a critical role in shaping our investment<br></br>
          strategy, providing mentorship to our portfolio companies,<br></br>
          and opening doors to new opportunities.
        </h1>
      </div>
      <div className=" font-Montserrat text-center p-20">
        <h1 className=" text-customGrey text-[40px] font-bold">
          Join Our <span className=" text-customRed">Journey.</span>
        </h1>
        <h2 className="text-[20px] font-medium">
          Join Us At Aduna Capital, we&apos;re always looking for like-minded
          investors<br></br> and partners who share our passion for
          transformative startups. If you&apos;re<br></br> interested in joining
          our journey, invest with us.
        </h2>
        <div className=" flex justify-center gap-[40px] p-10">
          <button className=" bg-[#E02942] text-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
            Our Portfolio
          </button>
          <button className=" text-[#E02942] border-2 border-customRed bg-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
            Invest with us
          </button>
        </div>
      </div>
    </>
  );
}

export default Team;
