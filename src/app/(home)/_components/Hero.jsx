"use client";
import Image from "next/image";
import { HeroImg, heroMap } from "../../../../public";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
<section className="bg-[#3106C7] xl:h-[50vh] h-full lg:w-full lg:h-[100%-110px] md:mt-32 mb-20 relative">
<div className="mx-auto container grid lg:grid-cols-12 grid-cols-1 h-full relative z-50">
        <div className="col-span-5 justify-center flex  flex-col text-white p-4 max-w-xl">
          <div className="xl:text-5xl lg:text-3xl text-3xl font-medium lg:gap-4 gap-2 xl:space-y-4 lg:space-y-2 flex  flex-col">
            <p> ابـــــــــق على تواصـــــل دائــــــــــم</p>
            <p>مــــــــع احبابـــــــك في سفـــــــــــرك</p>
            <p>عــــــــــبر شــــــرائحنا المــــــــدمجة</p>
          </div>
          <p className="xl:text-2xl lg:text-xl md:text-lg xl:!leading-10 !leading-6 my-4">
            بطاقات eSIM لدينا نالت ثقة أكثر من 10,000,000 شخص في جميع أنحاء
            العالم...
          </p>
          <div className="flex justify-center  text-[#9C9C9C] font-medium text-xl bg-white p-2  rounded-xl relative">
            <div className="flex w-full   ">
              <div className="transform translate-y-1/2 absolute right-4">
                <FiSearch size={25} />
              </div>

              <input
                type="text"
                placeholder="ماهو البلد الذي ستسافر اليه؟"
                className="flex-1 ms-10 py-2 rounded-md focus:outline-none  focus:ring-none bg-white w-full"
              />

              <div className="absolute left-4 py-2 px-6 flex justify-center items-center rounded-xl bg-[#4412BF] text-white">
                <FiSearch size={25} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7  h-full lg:my-0 my-20">
          <Image src={heroMap} alt="Hero Map" className="w-full h-auto object-contain" />
          <Image
            src={HeroImg}
            alt="Hero Image"
            className="absolute bottom-0 z-10  xl:h-auto lg:h-full h-auto shrink-0 object-contain"
          />
        </div>

        <div className="hero"></div>
      </div>
    </section>
  );
};

export default Hero;
