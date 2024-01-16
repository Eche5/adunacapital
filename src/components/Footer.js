import Image from "next/image";
import React from "react";
import logo from "@/Assets//image 4.png";
function Footer() {
  return (
    <div className=" bg-customRed p-20  font-Montserrat">
      <div className="text-[white] flex justify-between">
        <div>
          <Image alt="#" src={logo} />
          <h1 className=" py-3">
            Contact Us Have questions or want to learn more about<br></br> Aduna
            Capital? Get in touch with our team today.
          </h1>
          <div>
            <input
              placeholder=" Enter your email"
              className=" rounded-[15px] p-[12px] w-[70%]"
            />
            <button className=" bg-[#E02942] text-[16px] font-bold text-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
              Get in Touch
            </button>
          </div>
          <p className=" text-[12px] pt-10 pb-20">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
        <div className=" flex justify-between gap-40">
          <div>
            <h1 className=" text-[16px] font-bold pb-8">Quick Links</h1>
            <ul className=" text-[14px] grid grid-cols-1 gap-10">
              <li>Link One</li>
              <li>Link Two</li>
              <li>Link Three</li>
            </ul>
          </div>
          <div>
            <h1 className=" text-[16px] font-bold pb-8">Resources</h1>
            <ul className=" text-[14px] grid grid-cols-1 gap-10">
              <li>LinkSix</li>
              <li>LinkSeven</li>
              <li>Link Eight</li>
            </ul>
          </div>
          <div>
            <h1 className=" text-[16px] font-bold pb-8">Follow Us</h1>
            <ul className=" text-[14px] grid grid-cols-1 gap-10">
              <li>Instagram</li>
              <li>X</li>
              <li>Linkedln</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex justify-between border-t-2 text-customBackground border-[#FFFFFF] pt-10">
        <p>&copy; 2024 Aduna Capital. All rights reserved.</p>
        <div className=" flex justify-between gap-8 underline">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
