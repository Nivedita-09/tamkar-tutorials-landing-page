import React from "react";
import Image from "next/image";
import Logo from "../../img/Logo.png";
import Phone from "../../img/phone.svg";
import Email from "../../img/email.svg";
export default function Footer() {
  return (
    <>
      <div className="w-full bg-primary h-72 mt-20">
        <div className="flex flex-row w-full justify-evenly">
          <div className="w-1/4  text-center justify-center items-center mt-10">
            <Image src={Logo} alt="Logo" className="mx-auto self-center " />
          </div>
          <div className="w-1/3">
            <div className="flex flex-col mt-10">
              <div className="text-left text-white font-bold text-2xl my-6 ">Address Info</div>
              <div className="text-white text-xl font-semibold">
                1002, Joy Square, Kasarvadavli, Anand Nagar, Thane (W) - 400615
                Maharashtra, India
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col mt-10">
                <div className="text-left text-white font-bold text-2xl my-6 ">Contact Info</div>
                <div className="w-3/5 flex flex-row justify-evenly my-4">
                    <Image src={Phone} alt="Phone" />
                    <div className="text-white text-xl font-semibold">+91 9159914067</div>
                </div>
                <div className="w-full flex flex-row justify-evenly my-4">
                    <Image src={Email} alt="Email" />
                    <div className="text-white text-xl font-semibold">suvarnatamkar1107@gmail.com</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
