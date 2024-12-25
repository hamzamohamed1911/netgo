"use client";

import { useState } from "react";
import Image from "next/image";
import VideoServices from "../../_components/VideoServices";
import ProfileLayout from "../ProfileLayout";
import { membershipNetgoBg, simImage } from "../../../../../public";
import { TbMenu3 } from "react-icons/tb";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import MembershipFeatures from "../../_components/profileComponents/MembershipFeatures";
import { LuCodeXml } from "react-icons/lu";

const NetgoMembership = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(open=>!open);

  return (
    <>
      <ProfileLayout>
        <section className="w-full h-full ">
          <div className="bg-[#F9F9F9] w-full h-auto rounded-xl lg:mx-8 mx-0 md:p-0 p-4">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-4 w-full lg:p-10 md:p-8 p-4 justify-center items-center mx-auto ">
              <div className="md:col-span-6 col-span-1 w-full">
                <div className="relative rounded-xl w-full">
                  <Image
                    alt="card background"
                    className="object-cover"
                    src={membershipNetgoBg}
                  />

                  <div className="absolute top-0 left-0 p-6 w-full flex justify-between items-center">
                    <div className="flex flex-col gap-4">
                      <h2 className="text-white md:text-lg text-md font-medium">
                        مسافر
                      </h2>
                      <p className="text-white text-sm">
                        استرجاع الأموال بنسبة 5%
                      </p>
                    </div>
                    <Image alt="sim image" width={50} src={simImage} />
                  </div>
                  <div className="absolute bottom-0 h-1/3 justify-center flex bg-transparent text-white w-full rounded-b-xl border-t-[1px]">
                    <div className="flex justify-between w-full p-6 items-center">
                      <p className="text-md font-semibold">رصيد Net Go</p>
                      <p className="text-3xl font-medium">USD $0.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-1 w-full h-full">
                <div className="relative rounded-xl w-full h-full bg-[#FFFFFF] lg:p-8 p-4">
                  <div className="flex justify-between lg:my-4 my-2">
                    <p className="text-lg font-medium">حالة العضوية</p>
                    <TbMenu3 size={35} color="#D9D9D9" />
                  </div>
                  <div className="flex justify-between">
                    <p>المستوى التالي</p>
                    <p>مسافر فضي </p>
                  </div>
                  <div className="w-full bg-[#F2F2F2] h-[9px] rounded-full lg:my-5 my-3" />
                  <div className="flex flex-col lg:gap-6 md:gap-4 gap-2 text-md text-center font-medium">
                    <h2>$20.00 USD</h2>
                    <span className="flex gap-2 text-center justify-center items-center">
                      عمليات الشراء المتبقية
                      <AiOutlineExclamationCircle size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-4 w-full lg:px-10 md:px-8 p-4 mx-auto">
              <div className="lg:col-span-6 col-span-1 w-full flex flex-col gap-4 font-medium">
                <h2 className="text-[#020202] text-xl">
                  هل لديك رمز قسيمة Airmoney أو eSIM؟
                </h2>
                <p className="text-lg text-gray-700">
                  يمكنك استرداد رمز القسيمة لإضافة Airmoney أو eSIM إلى حسابك.
                </p>
                <button
                  className="lg:w-52 lg:text-xl text-md md:w-40 w-36 py-4 bg-[#020202] hover:bg-[#242424] text-white rounded-xl"
                  onClick={toggleModal} 
                >
                  استرداد القسيمة
                </button>
              </div>
              <div className="lg:col-span-6 col-span-1 w-full flex flex-col gap-4 font-medium">
                <h2 className="text-[#000000] text-xl">سجل معاملات net Go </h2>
                <p className="text-lg text-gray-700">
                  ليس لديك أي معاملة برصيد Airmoney بعد.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ProfileLayout>
      <MembershipFeatures />
      <VideoServices />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl lg:w-[450px] w-96">
            <div className="flex justify-between">
            <h3 className="text-xl font-semibold mb-4 text-[#3D3D3D]">استرداد القسيمة</h3>
            <button
                className="text-[#1C355E] bg-[#F4F4F4] py-2 px-5 rounded-xl font-medium"
                onClick={toggleModal} 
              >
                X
              </button>
            </div>
            <p className="font-medium text-[#3D3D3D] text-md">يُرجى إدخال رمز القسيمة للاسترداد‎.</p>
            
                    <div className="relative font-medium my-6">
                      <input
                        type="text"
                        placeholder="رمز الإحالة أو القسيمة (اختياري)"
                        id="referral_code"
                        name="referral_code"
                        className="mt-1 py-4 rounded-xl block w-full pr-16 border-[2px] border-gray-200 focus:ring-[#171196] focus:border-[#171196]"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#171196] rounded-full p-2">
                        <LuCodeXml className=" text-white" size={18} />
                      </div>
                    </div>
              
              <button className="bg-[#4412BF] text-white py-4 px-6 rounded-2xl w-full ">
                استرداد
              </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NetgoMembership;
