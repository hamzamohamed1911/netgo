import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { iphone15 } from "../../../../public";

const ContactUsForm = () => {
  return (
    <div className="bg-[#4412BF] h-full w-full text-white relative">
      <div className="grid xl:grid-cols-12 grid-cols-2 w-full container mx-auto">
        <div className="xl:col-span-6 col-span-12 xl:m-16 lg:m-8 md:m-6 m-6 max-w-2xl relative z-10">
          <h1 className="md:text-5xl text-4xl">تواصل معنا!</h1>
          <div className="bg-white md:w-24 w-16 rounded-full md:h-[7px] h-[5px] my-6 mb-8" />
          <form className="pt-8">
          <div className="flex lg:flex-row flex-col gap-4 my-4 z-50">
              <div>
                <label htmlFor="name">الاسم الثلاثي</label>
                <input
                  placeholder="الاسم الثلاثي"
                  name="name"
                  className="bg-white w-full py-6 px-6 rounded-full mt-3 text-[#A0A0A0] outline-none"
                />
              </div>
              <div>
                <label htmlFor="email">البريد الالكتروني</label>
                <input
                  name="email"
                  placeholder="البريد الالكتروني"
                  className="bg-white w-full py-6 px-6 rounded-full mt-3 text-[#A0A0A0] outline-none relative z-20"
                />
              </div>
            </div>
            <div className="py-4">
              <label htmlFor="message_title">موضوع الرسالة</label>
              <input
                name="message_title"
                placeholder="موضوع الرسالة"
                className="bg-white w-full py-6 px-6 rounded-full mt-3 text-[#A0A0A0] outline-none"
              />
            </div>
            <div className="py-4 relative">
              <label htmlFor="message_title">اكتب رسالتك</label>
              <textarea
                name="message_title"
                placeholder="اكتب هنا..."
                className="bg-white w-full py-6 px-6 rounded-3xl mt-3 text-[#A0A0A0] outline-none min-h-44"
              />
              <div className="absolute left-5 bottom-8">
                <button className="bg-[#171196] px-7 py-3 rounded-full flex gap-3 justify-center items-center">
                  ارســال
                  <FaArrowLeftLong size={12} />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="xl:col-span-6 col-span-12 h-full absolute left-0 bottom-0 top-0 xl:block hidden overflow-hidden">
          <Image className="object-contain" height={820} alt="i phone 15" src={iphone15} />
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
