import React from "react";

function Faq() {
  return (
    <div className=" font-Montserrat text-center">
      <h1 className=" text-[40px] font-bold">
        FAQ<span className=" text-customRed">s</span>
      </h1>
      <p className=" text-[18px] font-medium">
        Have questions? We&apos;ve got answers. Check out our FAQs for quick
        information on<br></br> our investment process, what we look for, and
        how we support our portfolio companies.
      </p>
      <div className=" px-80 py-20">
        <div>
          <hr />
          <div className=" flex justify-between py-4 gap-40">
            <h1>What is your investment criteria?</h1>
            <span>+</span>
          </div>
          <hr />
        </div>
        <div>
          <div className=" flex justify-between py-4 gap-40">
            <h1>What support do you offer?</h1>
            <span>+</span>
          </div>
          <hr />
        </div>
        <div>
          <div className=" flex justify-between py-4 gap-40">
            <h1>How can I collaborate?</h1>
            <span>+</span>
          </div>
          <hr />
        </div>
        <div>
          <div className=" flex justify-between py-4 gap-40">
            <h1>How can I apply?</h1>
            <span>+</span>
          </div>
          <hr />
        </div>
        <div>
          <div className=" flex justify-between py-4 gap-40">
            <h1>What is your process?</h1>
            <span>+</span>
          </div>
          <hr />
        </div>
      </div>
      <div>
        <h1 className=" text-[32px] font-bold text-customGrey">
          Still have questions<span className=" text-customRed">?</span>
        </h1>
        <p className=" text-[18px] font-medium">
          Reach out to us for further assistance and information.
        </p>
        <button className=" bg-[#E02942] text-[16px] font-bold text-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Faq;
