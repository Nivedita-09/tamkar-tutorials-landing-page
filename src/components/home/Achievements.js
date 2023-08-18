import React from "react";
import Image from "next/image";
export default function Achievements() {
  return (
    <>
      <div className="bg-secondary w-full my-28">
        <div className="mx-auto w-4/5 py-8 ">
          <div className="w-1/4 flex flex-row justify-evenly ">
            <div className="w-2 h-12 bg-black"></div>
            <div className="self-center text-3xl font-bold text-white ">
              Achievements
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-around " >
            <div className="flex w-1/3 h-52 justify-center ">
              <div className="self-center w-1/3 relative">
              <div className="absolute w-full h-18 justify-center text-center  mx-auto  self-center top-0 left-0 right-0 text-2xl">
                  <div className=" w-2/3 py-5 mx-auto bg-black text-center text-white text-2xl font-bold">

                  25 + 
                  </div>
              </div>
              <div className=" w-full h-28 mt-10 text-center mx-auto   bg-white">
                <div className="w-full py-12   text-black text-2xl font-bold ">

                    AWARDS
                </div>
              </div>
              </div>
            </div>
            <div className="flex w-1/3 h-52 justify-center ">
              <div className="self-center w-1/3 relative">
              <div className="absolute w-full h-18 justify-center text-center  mx-auto  self-center top-0 left-0 right-0 text-2xl">
                  <div className=" w-2/3 py-5 mx-auto bg-black text-center text-white text-2xl font-bold">

                  100 + 
                  </div>
              </div>
              <div className=" w-full h-28 mt-10 text-center mx-auto   bg-white">
                <div className="w-full py-12   text-black text-2xl font-bold ">

                    STUDENTS
                </div>
              </div>
              </div>
            </div>
            <div className="flex w-1/3 h-52 justify-center ">
              <div className="self-center w-1/3 relative">
              <div className="absolute w-full h-18 justify-center text-center  mx-auto  self-center top-0 left-0 right-0 text-2xl">
                  <div className=" w-2/3 py-5 mx-auto bg-black text-center text-white text-2xl font-bold">

                  25 + 
                  </div>
              </div>
              <div className=" w-full h-28 mt-10 text-center mx-auto   bg-white">
                <div className="w-full py-12   text-black text-2xl font-bold ">

                    ACTIVITIES
                </div>
              </div>
              </div>
            </div>
            
            
            
        </div>
      </div>
    </>
  );
}
