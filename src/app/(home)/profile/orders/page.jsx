"use client";

import VideoServices from "../../_components/VideoServices";
import ProfileLayout from "../ProfileLayout";
import DownloadApp from "../../_components/profileComponents/DownloadApp";
import { visaCard } from "../../../../../public";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";


const Orders = () => {
  return (
    <>
      <ProfileLayout>
        <section className="w-full h-full ">
          <div className="bg-[#F9F9F9] w-full lg:h-[60vh] h-auto rounded-xl lg:mx-8 mx-0 md:p-0 p-4">
            <div className="w-full h-full lg:p-12 md:p-8 p-4 flex justify-center items-center flex-col gap-6">
              <div>
              <Image className="object-cover" alt="visa Card Image" src={visaCard}/>

              </div>
              <p className="text-[#020202] text-xl font-medium">
              ليس لديك أي بطاقات محفوظة حتى الآن‎.
              </p>
              <p className="text-[#3D3D3D] text-md font-medium">
              عند إضافة بطاقة جديدة، سترى تفاصيل بطاقتك المحفوظة هنا‎.
              </p>
              <button
                  className="lg:w-64 lg:text-lg text-md md:w-40 flex justify-center items-center gap-2 w-36 py-3 bg-[#020202] hover:bg-[#242424] text-white rounded-xl"
                >
                   إضافة بطاقة جديدة
                   <IoMdAdd size={25} />
                </button>
            </div>
          </div>
        </section>
      </ProfileLayout>
      <DownloadApp/>
      <VideoServices />

    </>
  );
};

export default Orders;
