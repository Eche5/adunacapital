import Image from "next/image";
import React from "react";
import enviro from "../../Assets/Image 20.png";
import social from "../../Assets/Image 21.png";
import govern from "../../Assets/Image 11.png";

function Policy() {
  return (
    <section className=" font-Montserrat">
      {" "}
      <div className=" text-center p-20">
        <div>
          <h1 className=" text-customGrey text-[48px] text-center font-bold">
            ESG Policy
            <span className=" text-customRed">.</span>
          </h1>
          <p className=" text-[20px] font-medium">
            Environmental, Social, and Governance (ESG) principles are at the
            core of<br></br> our investment philosophy. We recognize that
            sustainable and responsible<br></br> investments are crucial for
            long-term value creation. Our ESG policy reflects<br></br> a
            commitment to:
          </p>
        </div>
        <div className=" flex justify-between text-customGrey p-20">
          <div className="flex flex-col items-center">
            <Image alt="#" src={enviro} />
            <h1 className=" text-[32px] font-bold py-4">
              Environmental<br></br> Stewardship
            </h1>
            <p className=" text-[16px] font-medium">
              Investing in companies that minimize<br></br> environmental impact
              and contribute to a<br></br> sustainable future.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image alt="#" src={social} />
            <h1 className=" text-[32px] font-bold py-4">
              Social<br></br> Responsibility
            </h1>
            <p className=" text-[16px] font-medium">
              Supporting startups that drive positive social<br></br> change,
              promote equality, and improve<br></br> community well-being.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image alt="#" src={govern} />
            <h1 className=" text-[32px] font-bold py-4">
              Governance<br></br> Structure{" "}
            </h1>
            <p className=" text-[16px] font-medium">
              Ensuring that our portfolio companies adhere to<br></br> the
              highest standards of ethics, transparency,<br></br> and
              accountability.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-customBackground text-center p-20 text-customGrey">
        <h1 className=" text-[40px] font-bold">
          Ensuring that our portfolio<br></br> companies adhere to the highest
          <br></br> standards of ethics, transparency,<br></br> and
          accountability.
        </h1>
        <p className=" text-[black] font-normal text-[18px]">
          Aduna Capital's investment philosophy drives growth and creates
          positive impact for African<br></br> startups and the economy.
        </p>
      </div>
      <div className=" text-center p-20">
        <h1 className=" text-customGrey text-[40px] font-bold">
          Join Our <span className=" text-customRed">Journey.</span>
        </h1>{" "}
        <p>
          We invite you to explore our portfolio and learn more about our
          investment<br></br> philosophy. If you are an entrepreneur seeking a
          partner for growth or an investor<br></br> looking to make a
          difference, Aduna Capital is ready to embark on this journey with you.
        </p>
        <div className=" flex justify-center gap-[40px] p-10">
          <button className=" bg-[#E02942] text-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
            Our Portfolio
          </button>
          <button className=" text-[#E02942] border-2 border-customRed bg-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Policy;
