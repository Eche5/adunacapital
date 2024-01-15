import React from "react";
import flow from "../../Assets/Logo=2, Color=Dark.png";
import Image from "next/image";
import avatar from "../../Assets/Avatar Image.png";
function Testimony() {
  return (
    <div className=" font-Montserrat">
      <h1 className=" text-[40px] font-bold text-center text-customGrey">
        Customer Testimonials
      </h1>
      <p className=" text-[20px] text-center font-medium">
        Read what our successful partners have to say
      </p>
      <div className=" flex justify-between items-center p-20">
        <button className=" bg-customBackground border-2 border-[black]   w-8 h-8 items-center rounded-3xl">
          &larr;
        </button>
        <div>
          <Image alt="#" src={flow} />
          <p>
            "Working with Aduna Capital has<br></br> been a game-changer for our
            <br></br>
            business. Their expertise and<br></br> support have helped us scale
            and<br></br>
            achieve new heights."
          </p>
        </div>
        <div>
          <Image alt="#" src={flow} />
          <p>
            "Aduna Capital's investment has<br></br> been instrumental in our
            growth<br></br> and expansion. We couldn't have<br></br> done it
            without them."
          </p>
        </div>
        <div>
          <Image alt="#" src={flow} />
          <p>
            "Partnering with Aduna Capital has<br></br> been a strategic move
            for us. Their<br></br> network and resources have<br></br> opened
            doors to new opportunities."
          </p>
        </div>
        <button className=" bg-customBackground border-2 border-[black]   w-8 h-8 items-center rounded-3xl">
          &rarr;
        </button>
      </div>
      <div className=" text-center p-20">
        <h1 className=" text-customGrey text-[40px] font-bold">
          Join Our <span className=" text-customRed">Journey.</span>
        </h1>
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
    </div>
  );
}

export default Testimony;