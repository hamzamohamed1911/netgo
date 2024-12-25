import Image from "next/image";
import React from "react";
import {
  iphonMembership1,
  iphonMembership2,
  iphonMembership3,
} from "../../../../../public";
import { FaArrowLeftLong } from "react-icons/fa6";

const MembershipFeatures = () => {
  return (
    <section className="h-full w-full my-8 ">
       <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 container mx-auto lg:p-0 p-6 justify-center items-center lg:min-h-[50vh] h-full my-8">
       <div className="lg:col-span-6 col-span-1 max-w-xl flex-col space-y-5">
          <h2 className="text-[#171196] font-medium lg:text-4xl  text-3xl lg:!leading-relaxed !leading-normal ">
            ارتقِ بتجربتك إلى مستوى جديد مع عضوياتنا المميزة!
          </h2>
          <p className="text-[#242424] lg:text-2xl text-xl lg:!leading-relaxed !leading-normal">
            احصل على حالة مسافر فضي، ذهبي، أو بلاتيني، واستمتع بمزايا لا تضاهى
            مع مستويات العضوية الجديدة لدينا.
          </p>
          <div className="flex gap-2 w-auto">
            <button className="bg-[#4412BF] lg:text-lg text-md lg:w-44 w-40 font-semibold py-4 rounded-full flex gap-3 justify-center  items-center text-white group">
              اقـــرأ المزيــــد
              <FaArrowLeftLong
                size={16}
                className="transition-transform transform group-hover:-translate-x-3"
              />
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-1 xl:w-[600px] w-auto">
          <Image className="object-cover" width={600} src={iphonMembership1} alt="i phone image 14" />
        </div>
       </div>
       
      <div className=" bg-slate-50">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 container mx-auto lg:p-0 p-6 justify-center items-center lg:min-h-[60vh] h-full my-8">
      <div className="lg:col-span-6 col-span-1 lg:order-1 order-2 xl:w-[600px] w-auto">
          <Image className="object-cover" width={600} src={iphonMembership2} alt="i phone image 14" />
        </div>
        <div className="lg:col-span-6 col-span-1 max-w-xl flex-col space-y-5  lg:order-2 order-1">
          <h2 className="text-[#171196] font-medium lg:text-4xl  text-3xl lg:!leading-relaxed !leading-normal ">
            استمتع بمكافآت استرداد نقدي جديدة
          </h2>
          <p className="text-[#242424] lg:text-2xl text-xl lg:!leading-relaxed !leading-normal">
            استمتع بمكافآت استرداد نقدي جديدة مع كل ترقية في المستوى، وزد من
            فرصك في ربح المزيد من Net Go.
          </p>
          <div className="flex gap-2 w-auto">
            <button className="bg-[#4412BF] lg:text-lg text-md lg:w-44 w-40 font-semibold py-4 rounded-full flex gap-3 justify-center text-lg items-center text-white group">
              اقـــرأ المزيــــد
              <FaArrowLeftLong
                size={16}
                className="transition-transform transform group-hover:-translate-x-3"
              />
            </button>
          </div>
        </div>
       </div>
      </div>



      <div className="grid lg:grid-cols-12 grid-cols-1 container gap-6 mx-auto lg:p-0 p-6 justify-center items-center lg:min-h-[50vh] h-full my-8">
      <div className="lg:col-span-6 col-span-1 max-w-xl flex-col space-y-5">
          <h2 className="text-[#171196] font-medium lg:text-4xl  text-3xl lg:!leading-relaxed !leading-normal ">
            اكتشف مستوى عضويتك الآن وابدأ في جني المكافآت التي تستحقها!
          </h2>
          <p className="text-[#242424] lg:text-2xl text-xl lg:!leading-relaxed !leading-normal">
            كلما ارتقيت في مستويات العضوية، زادت فرصك في الاستمتاع بمزايا حصرية
            واسترداد نقدي أكبر. لا تفوت الفرصة لزيادة مكافآتك مع كل خطوة.
          </p>
          <div className="flex gap-2 w-auto">
            <button className="bg-[#4412BF] lg:text-lg text-md lg:w-44 w-40 font-semibold py-4 rounded-full flex gap-3 justify-center text-lg items-center text-white group">
              اقـــرأ المزيــــد
              <FaArrowLeftLong
                size={16}
                className="transition-transform transform group-hover:-translate-x-3"
              />
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-1 xl:w-[600px] w-auto">
          <Image src={iphonMembership3} width={600} alt="i phone image 14" />
        </div>
      </div>
    </section>
  );
};

export default MembershipFeatures;
