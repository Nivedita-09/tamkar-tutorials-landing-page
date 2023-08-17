import React from "react";
import TeacherImg from "../../img/teacherImg.png";
import Image from "next/image";
export default function DirectorMsg() {
  return (
    <>
      <div className="w-full my-20">
        <div className="mx-auto w-4/5 py-10 border-2 border-solid border-black flex flex-row">
          <div className="w-3/5">
            <div className="w-3/6 flex flex-row justify-evenly">
              <div className="w-2 h-20 bg-secondary"></div>
              <div className="self-center text-3xl font-bold text-black ">
                Directors Message
              </div>
            </div>
            <div className="w-4/5 mx-auto my-5 font-medium">
              Tamkar’s Tuition has been instrumental in numerous success
              stories. Tuition classes are really helpful for students to
              overcome their weaknesses .Students benefit greatly as the tutors
              assist them to learn about various topics. Home tutors help the
              students to overcome their weaknesses in subjects in which they
              struggle.
            </div>
            <div  className="w-4/5 mx-auto my-4">
              <button className="w-2/5 bg-primary text-2xl text-white rounded-md p-4 font-bold ">
                Read More
              </button>
            </div>
          </div>
          <div className="w-2/5">
            <div className="text-center ">
              <Image src={TeacherImg} alt="TeacherImg" className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
