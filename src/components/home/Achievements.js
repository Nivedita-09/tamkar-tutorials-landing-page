import React from "react";
import Image from "next/image";
export default function Achievements() {
  return (
    <>
      <div className="bg-secondary w-full h-5/6 my-28">
        <div className="mx-auto w-4/5 py-10 ">
          <div className="w-1/3 flex flex-row justify-around ">
            <div className="w-2 h-12 bg-black"></div>
            <div className="self-center text-3xl font-bold text-white ">
              Achievements
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-around my-4" >
            <div className="w-1/3 bg-green relative ">
                <div className="absolute bg-black w-1/6 h-16 text-white">25+</div>
                <div className="absolute bg-white w-1/3 h-10">AWARDS</div>
            </div>
        </div>
      </div>
    </>
  );
}
