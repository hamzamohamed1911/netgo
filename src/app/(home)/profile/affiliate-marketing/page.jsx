"use client";
import Image from "next/image";
import ProfileLayout from "../ProfileLayout";
import { arrowMarket, arrowRightIcon } from "../../../../../public";
import Link from "next/link";
import { LuCodeXml } from "react-icons/lu";
import { IoCopyOutline } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import NetGoAdvantages from "../../_components/profileComponents/NetGoAdvantages";

const AffiliateMarketing = () => {
  const socialIcons = [
    { id: 1, icon: <FaWhatsapp size={19} />, name: "whatsapp", href: "#" },
    { id: 2, icon: <FaFacebook size={19} />, name: "facebook", href: "#" },
    { id: 3, icon: <FaInstagram size={19} />, name: "instagram", href: "#" },
    { id: 4, icon: <FaTiktok size={19} />, name: "tiktok", href: "#" },
    { id: 5, icon: <FaXTwitter size={19} />, name: "x", href: "#" },
    { id: 6, icon: <FaLinkedinIn size={19} />, name: "linkedin", href: "#" },
    { id: 1, icon: <MdOutlineEmail size={19} />, name: "email", href: "#" },
  ];
  return (
    <>
      <ProfileLayout>
        <section className="w-full h-full ">
          <div className="bg-[#F9F9F9] w-full h-auto rounded-xl lg:mx-8 mx-0 md:p-0 p-4">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-4 w-full lg:p-10 md:p-8 p-4 justify-center items-center mx-auto ">
              <div className="md:col-span-6 col-span-1 w-full">
                <div className="w-full h-full lg:p-12 md:p-8 p-4 flex justify-center items-center flex-col gap-6">
                  <div className="flex justify-center items-center">
                    <Image
                      className="object-cover"
                      alt="arrow Image"
                      src={arrowMarket}
                    />
                  </div>
                  <p className="text-[#020202] text-xl font-medium">
                    شارك تقنية‎ eSIM ‎المذهلة مع الأصدقاء{" "}
                  </p>
                  <p className="text-[#3D3D3D] text-md font-medium">
                    امنح USD $3.00. احصل على USD $3.00.{" "}
                  </p>
                  <button className="lg:w-64 lg:text-lg text-md md:w-40 flex justify-center items-center gap-2 w-36 py-3 bg-[#020202] hover:bg-[#242424] text-white rounded-xl">
                    معرفة المزيد
                  </button>
                </div>{" "}
              </div>
              <div className="md:col-span-6 col-span-1  h-full bg-white rounded-xl w-full  text-center">
                <div className="lg:p-12 md:p-10 p-8 flex justify-center items-center flex-col lg:gap-4 gap-3">
                  <Image
                    className="object-cover"
                    alt="arrow right icon"
                    src={arrowRightIcon}
                  />
                  <h2 className="text-[#020202] text-xl font-[600]">
                    مشاركة رمز الإحالة
                  </h2>
                  <span className="!leading-loose lg:text-lg text-md font-medium text-[#3D3D3D]">
                    احصل على USD $3.00 مقابل كل صديق يسجِّل ويكمل عملية شراء.
                    سيحصل أصدقاؤك على خصم بقيمة USD $3.00 على عملية الشراء
                    الأولى لهم.
                    <Link href="#" className="text-[#171196]">
                       الشروط والأحكام
                    </Link>
                  </span>
                  <div className="flex gap-2 w-full justify-center items-center">
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
                    <button className="rounded-xl border-[2px] border-gray-200 shrink-0  w-14 h-14 py-4 flex justify-center items-center">
                      <IoCopyOutline size={20} color="#171196" />
                    </button>
                  </div>
                 <div className="w-full">
                 <ul className=" flex gap-3 items-center justify-center flex-wrap">
                    {socialIcons.map((scoial) => (
                      <li
                        key={scoial.id}
                        className="rounded-full bg-[#F2F2F2] md:p-4 p-3"
                      >
                        <Link
                          href={scoial.href}
                          className="text-md font-[600] text-[#000E55]"
                        >
                          {scoial.icon}
                        </Link>
                      </li>
                    ))}
                  </ul>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ProfileLayout>
      <NetGoAdvantages />
    </>
  );
};

export default AffiliateMarketing;
