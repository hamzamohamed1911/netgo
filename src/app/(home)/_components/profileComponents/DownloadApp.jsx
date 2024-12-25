import Image from "next/image";
import React from "react";
import {
  appleStore,
  downloadAppIphone,
  googlePlay,
} from "../../../../../public";

const DownloadApp = () => {
  return (
    <section className="h-full w-full my-8">
      <div className="grid lg:grid-cols-12 grid-cols-1 w-full container mx-auto justify-center items-center lg:p-0 p-4">
        <div className="lg:col-span-6 col-span-1 max-w-xl flex-col space-y-4">
          <h2 className="text-[#171196] font-medium lg:text-4xl  text-3xl lg:!leading-relaxed !leading-normal ">
            هل ترغب في تغيير طريقتك في البقاء على اتصال مع من تحب؟ جرّب بطاقات
            eSIM الآن!
          </h2>
          <p className="text-[#242424] lg:text-2xl text-xl lg:!leading-relaxed !leading-normal">
            قم بتنزيل تطبيق Net Go لشراء بطاقات eSIM، وإدارتها، وشحن رصيدك في أي
            وقت ومن أي مكان، بكل سهولة وسرعة!
          </p>
          <div className="flex gap-2 lg:w-full  md:w-96 w-auto">
            <button className="md:w-auto w-36">
              <Image width={220} src={googlePlay} alt="Google Play" />
            </button>
            <button className="md:w-auto w-36">
              <Image width={220} src={appleStore} alt="Apple Store" />
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-1">
          <Image src={downloadAppIphone} alt="i phone image 14" />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
