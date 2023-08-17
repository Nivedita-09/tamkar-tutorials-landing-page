import React from "react";
import GalleryImg1 from "../../img/GalleryImg1.png";
import GalleryImg2 from "../../img/GalleryImg2.png";
import GalleryImg3 from "../../img/GalleryImg3.png";
import GalleryImg4 from "../../img/GalleryImg4.png";
import Image from "next/image";
export default function Gallery() {
  return (
    <>
      <div className="bg-secondary w-full h-5/6 my-28">
        <div className="mx-auto w-4/5 py-10 ">
          <div className="w-1/6 flex flex-row justify-around ">
            <div className="w-2 h-12 bg-black"></div>
            <div className="self-center text-3xl font-bold text-white ">
              Our Gallery
            </div>
          </div>
          <div className="flex flex-row w-full justify-around my-4">
            <div>
              <Image src={GalleryImg1} alt="GalleryImg1" height={300} />
            </div>
            <div>
              <Image src={GalleryImg2} alt="GalleryImg2" height={300} />
            </div>
            <div>
              <Image src={GalleryImg3} alt="GalleryImg3" height={300} />
            </div>
            <div>
              <Image src={GalleryImg4} alt="GalleryImg4" height={300}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
