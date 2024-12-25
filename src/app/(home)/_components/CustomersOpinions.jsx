"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { uar } from "../../../../public";
import Image from "next/image";

const opinions = [
  {
    name: "محمد أحمد",
    title: "مدير تسويق",
    profileImage: "https://via.placeholder.com/150",
    opinion: "خدمة رائعة جدًا وأفضل تجربة لي مع شريحة eSIM.",
    countryFlag: uar,
    rate: 5,
  },
  {
    name: "سارة علي",
    title: "مصممة جرافيك",
    profileImage: "https://via.placeholder.com/150",
    opinion:
      "كان العمل مع هابيسيم تجربة رائعة، فهو موقع رائع وسريع الاستجابة لعمله وصادق وذو خبرة ومتمكن من حل المشكلات. إنه يقدم كل ما لديه. أوصي به بشدة لتقديم خدمة تتجاوز الجودة العالية.",
    countryFlag: uar,
    rate: 4,
  },
  {
    name: "علي نور",
    title: "مبرمج ويب",
    profileImage: "https://via.placeholder.com/150",
    opinion: "الدعم الفني ممتاز وساعدني في حل مشكلتي بسرعة.",
    countryFlag: uar,
    rate: 5,
  },
  {
    name: "ليلى حسن",
    title: "محللة بيانات",
    profileImage: "https://via.placeholder.com/150",
    opinion: "الأسعار مناسبة جدًا مقارنة بالخدمات الممتازة المقدمة.",
    countryFlag: uar,
    rate: 4,
  },
  {
    name: "يوسف خالد",
    title: "رائد أعمال",
    profileImage: "https://via.placeholder.com/150",
    opinion:
      "كان العمل مع هابيسيم تجربة رائعة، فهو موقع رائع وسريع الاستجابة لعمله وصادق وذو خبرة ومتمكن من حل المشكلات. إنه يقدم كل ما لديه. أوصي به بشدة لتقديم خدمة تتجاوز الجودة العالية.",
    countryFlag: uar,
    rate: 5,
  },
];

const CustomersOpinions = () => {
  return (
    <section className="h-full w-full py-20 relative p-4">
      <div className="relative">
        <h1 className="lg:text-5xl text-4xl font-[600] text-center font-sans text-[#171196] py-8 my-8">
          إليـــــك مــا يقولــه <span className="text-black"> العمـــلاء</span> عنَّا
        </h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} custom-bullet"></span>`,
          }}
          breakpoints={{
            320: { // Small devices
              slidesPerView: 1,
            },
            640: { // Medium devices (tablets)
              slidesPerView: 2,
            },
            1024: { // Large devices
              slidesPerView: 3,
            },
          }}
          className="custom-swiper h-[500px] py-8 my-8"
        >
          {opinions.map((opinion, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F9F9F9] p-10 rounded-3xl h-[450px] flex flex-col overflow-hidden">
                <div className="flex gap-3 my-6">
                  <img
                    src={opinion.profileImage}
                    alt={opinion.name}
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h4 className="text-xl font-medium text-[#666666] mb-2">
                      {opinion.name}
                    </h4>
                    <p className="text-md text-[#42526B] font-normal">
                      {opinion.title}
                    </p>
                  </div>
                </div>
                <p className="text-[#666666] mb-4 text-start text-xl leading-loose flex-1">
                  {opinion.opinion}
                </p>
                <div className="flex justify-between items-end mt-auto h-full">
                  <Image
                    width={100}
                    src={opinion.countryFlag}
                    alt="Country Flag"
                    className="w-12 h-12"
                  />
                  <span className="text-lg text-[#000E55] font-semibold">
                    {opinion.rate}⭐⭐⭐⭐⭐
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomersOpinions;
