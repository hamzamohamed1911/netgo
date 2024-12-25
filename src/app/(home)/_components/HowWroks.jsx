"use client";

import Image from "next/image";
import { arrowLeft, flagIcon, messageIcon, uploadIcon } from "../../../../public";

const HowWroks = () => {
  return (
    <section className=" w-full my-20">
      <div className="mx-auto container  p-4">
        <h1 className="lg:text-6xl  text-5xl gap-4 font-[500] text-center font-sans text-[#171196] my-6 !leading-snug">
          كيــــف يعمــــل NET <span className="text-black"> GO</span>
        </h1>
        <div className="flex md:flex-row flex-col md:gap-4  gap-20 justify-center items-center py-8 ">
        <div className="flex flex-col gap-4 justify-center items-center">
            <div className="bg-[#171196] lg:w-24 lg:h-24 h-20 w-20  flex justify-center items-center rounded-full relative">
              <Image alt="flag icon" width={40} src={flagIcon} />
              <div className=" absolute lg:w-10 lg:h-10 md:w-8 md:h-8 h-6 w-6 bg-white rounded-full -right-4 flex justify-center items-center">
                <div className="bg-[#4412BF] lg:h-8 lg:w-8 md:w-6 md:h-6 h-5 w-5  text-white rounded-full p-2 text-md font-medium flex justify-center items-center">
                  1
                </div>
              </div>
            </div>
            <h2 className="lg:text-2xl md:text-lg text-md text-[#4412BF] font-[600] text-center">
              اختر الدولة &larr; الخطة
            </h2>
          </div>
          <Image 
            alt="arrow left" 
            src={arrowLeft} 
            className="w-36  md:w-40 lg:w-72 md:rotate-0 -rotate-90" 
          />          <div className="flex flex-col gap-4 justify-center items-center w-auto">
            <div className="bg-[#171196] lg:w-24 lg:h-24 h-20 w-20  flex justify-center items-center rounded-full relative">
            <Image alt="flag icon" width={40} src={uploadIcon} />
          <div className=" absolute lg:w-10 lg:h-10 md:w-8 md:h-8 h-6 w-6 bg-white rounded-full -right-4 flex justify-center items-center">
          <div className="bg-[#4412BF] lg:h-8 lg:w-8 md:w-6 md:h-6 h-5 w-5  text-white rounded-full p-2 text-md font-medium flex justify-center items-center">
          2
                </div>
              </div>
            </div>
            <h2 className="lg:text-2xl md:text-lg text-md text-[#4412BF] font-[600] text-center">
              قم بتثبيت eSIM الخاص بك
            </h2>
          </div>
          <Image 
            alt="arrow left" 
            src={arrowLeft} 
            className="w-36  md:w-40 lg:w-72 md:rotate-0 -rotate-90" 
          />          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="bg-[#171196] lg:w-24 lg:h-24 h-20 w-20  flex justify-center items-center rounded-full relative">
            <Image alt="flag icon" width={40} src={messageIcon} />
              <div className=" absolute lg:w-10 lg:h-10 md:w-8 md:h-8 h-6 w-6 bg-white rounded-full -right-4 flex justify-center items-center">
              <div className="bg-[#4412BF] lg:h-8 lg:w-8 md:w-6 md:h-6 h-5 w-5  text-white rounded-full p-2 text-md font-medium flex justify-center items-center">
              3
                </div>
              </div>
            </div>
            <h2 className="lg:text-2xl md:text-lg text-md text-[#4412BF] font-[600] text-center">
              قم بتفعيل رحلتك واستمتع بها
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWroks;
