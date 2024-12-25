import Image from "next/image";
import { appleStore, googlePlay, MobileIphone } from "../../../../public";

const MobileApplication = () => {
  return (
<section className="bg-[#4412BF] h-auto w-full text-white relative overflow-hidden ">
  <div className="mx-auto container grid lg:grid-cols-12 grid-cols-1 w-full lg:py-16 md:py-14 py-12 p-4">
  <div className="w-auto col-span-6 lg:order-last absolute bottom-0 left-28 hidden lg:block">
      <Image src={MobileIphone} alt="Mobile iPhone" />
    </div>
    <div className="flex flex-col lg:gap-6 gap-4 col-span-6 lg:order-first">
      <h2 className="lg:text-5xl text-3xl font-medium">تفضل… ســــــافر حول العالم،</h2>
      <h2 className="lg:text-5xl text-3xl font-medium">ولا تدفع رسوم التجوال أبدًا</h2>
      <div className="bg-white w-16 rounded-full md:h-[7px] h-[5px] my-3" />
      <p className="lg:text-3xl text-xl font-medium">
        تسوق من تطبيق Net Go أو عبر الإنترنــــــــــــت
      </p>
      <div className="flex gap-2 lg:w-full  md:w-96 w-auto">
        <button className="md:w-auto w-36">
          <Image width={250} src={googlePlay} alt="Google Play" />
        </button>
        <button className="md:w-auto w-36">
          <Image width={250} src={appleStore} alt="Apple Store" />
        </button>
      </div>
    </div>
  </div>
</section>
  );
};

export default MobileApplication;
