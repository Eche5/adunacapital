import React from "react";

function SubPortfolio() {
  return (
    <section>
      <div className=" text-center bg-gradient-to-r from-customRed to-[neutral-500 ] p-20 ">
        <h1 className=" text-[56px] font-bold">Investing in Africa</h1>
        <p className=" font-semibold text-[18px]">
          Discover our diverse portfolio of innovative African startups driving
          change and<br></br> growth.
        </p>
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-[40px] font-bold text-customGrey ">
            Our portfolio is a testament to our<br></br> belief in the
            transformative power<br></br> of entrepreneurship.
          </h1>
          <h1 className="text-[20px] font-medium py-10">
            It showcases a diverse array of startups, each selected for their
            visionary<br></br> approach and potential for high growth. These
            companies are not just<br></br> businesses; they are beacons of
            innovation, each contributing to the<br></br> economic dynamism of
            the continent.
          </h1>
          <div className=" flex justify-center gap-[40px] p-10">
            <button className=" bg-[#E02942] text-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
              Invest with us
            </button>
            <button className=" text-[#E02942] border-2 border-customRed bg-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
              Pitch with us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubPortfolio;
