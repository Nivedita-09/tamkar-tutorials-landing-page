import React from "react";
import Image from "next/image";
import BgPicture from "../../img/bg-picture.png";
import Icon1 from "../../img/icon1.svg";
import Icon2 from "../../img/icon2.svg";
import Icon3 from "../../img/icon3.svg";
import Icon4 from "../../img/icon4.svg";
import Icon5 from "../../img/icon5.svg";
import Icon6 from "../../img/icon6.svg";
import Gallery from "./Gallery";
import DirectorMsg from "./DirectorMsg";
import Achievements from "./Achievements";

export default function HomePage() {
  return (
    <>
      <div className="w-full ">
        <Image
          src={BgPicture}
          alt="Background Picture"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full ">
        <div className="w-4/5 mx-auto my-20 h-2/4 border-2 border-solid border-black p-5 flex flex-row">
          <div className="w-1/2">
            <div className="flex flex-row w-1/3  justify-around">
            <div className="w-2 h-12 bg-secondary"></div>
            <div className="self-center font-bold text-3xl">About Us</div>
            </div>
            <div className="w-4/5 mx-auto my-5 font-medium">
              Tamkar’s Tuition has been instrumental in numerous success
              stories. Tuition classes are really helpful for students to
              overcome their weaknesses .Students benefit greatly as the tutors
              assist them to learn about various topics. Home tutors help the
              students to overcome their weaknesses in subjects in which they
              struggle.
            </div>
            <div className="w-4/5 mx-auto my-4">
                <button className="w-1/2 bg-primary text-2xl text-white rounded-md p-4 font-bold ">Read More</button>
            </div>
          </div>
          <div className="w-1/2 self-center">
            <div className="flex flex-row h-40 self-center " >
              <div className="bg-secondary w-1/3 mx-auto text-center  ">
                <Image src={Icon1} alt="Icon 1" className="mx-auto self-center"  />
                <div className="text-white text-center w-11/12 mx-auto self-center">SSC from std 1 to 10</div>
              </div>
              <div className="bg-primary w-1/3 mx-auto text-center">
                <Image src={Icon2} alt="Icon 2"  className="mx-auto self-center"/>
                <div className="text-white text-center w-11/12 mx-auto self-center">CBSE from std 1 to 10</div>
              </div>
              <div className="bg-secondary w-1/3 mx-auto text-center">
                <Image src={Icon3} alt="Icon 3" className="mx-auto self-center" />
                <div className="text-white text-center w-11/12 mx-auto self-center"> ICSE from std 1 to 10</div>
              </div> 
            </div>
            <div className="flex flex-row h-40" >
              <div className="bg-primary w-1/3 mx-auto text-center">
                <Image src={Icon4} alt="Icon 4" className="mx-auto" />
                <div className="text-white text-center w-11/12 mx-auto">Hindi Exams - Parichay to Praveen</div>
              </div>
              <div className="bg-secondary w-1/3 mx-auto text-center ">
                <Image src={Icon5} alt="Icon 5" className="mx-auto" />
                <div className="text-white text-center w-11/12 mx-auto">Communication tuitions for English</div>
              </div>
              <div className="bg-primary w-1/3 mx-auto text-center ">
                <Image src={Icon6} alt="Icon 6" className="mx-auto" />
                <div className="text-white text-center w-11/12 mx-auto">Communication tuitions for Hindi</div>
              </div> 
            </div>
          </div>
        </div>
      </div>
      <Gallery />
      <DirectorMsg />
      <Achievements />
    </>
  );
}
