"use client";
import { FiEdit3 } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { BiLock } from "react-icons/bi";
import VideoServices from "../../_components/VideoServices";
import ProfileLayout from "../ProfileLayout";
import DownloadApp from "../../_components/profileComponents/DownloadApp";

const AccountInfo = () => {
  return (
    <>
      <ProfileLayout>
        <section className="w-full h-full ">
          <div className="bg-[#F9F9F9] w-full lg:h-[60vh] h-auto rounded-xl lg:mx-8 mx-0 md:p-0 p-4">
            <div className="w-full h-full lg:p-12 md:p-8 p-4 ">
              <div>
                <form>
                  <div className="">
                    <label className="font-medium text-sm" htmlFor="name">
                      الاسم الكامل
                    </label>

                    <div className="w-full flex   gap-3 justify-center items-center mt-2 relative">
                      <input
                        placeholder="الاسم الكامل"
                        name="name"
                        className="bg-white w-full py-4  ps-14 rounded-2xl border-[2px] border-gray-200  text-[#A0A0A0] outline-none"
                      />
                      <div className="bg-[#171196] p-2 rounded-full text-white absolute start-2">
                        <CgProfile size={20} />
                      </div>
                      <button className="bg-[#171196] p-4 text-white rounded-xl">
                        <FiEdit3 size={25} />
                      </button>
                    </div>
                  </div>
                  <div className=" pt-4">
                    <label className="font-medium text-sm" htmlFor="email">
                      البريد الالكتروني
                    </label>

                    <div className="w-full flex   gap-3 justify-center items-center mt-2 relative">
                      <input
                        name="email"
                        className="bg-white w-full py-4  ps-14 rounded-2xl border-[2px] border-gray-200  text-[#A0A0A0] outline-none"
                      />
                      <div className="bg-[#171196] p-2 rounded-full text-white absolute start-2">
                        <MdOutlineEmail size={20} />
                      </div>
                      <button className="bg-[#171196] p-4 text-white rounded-xl">
                        <FiEdit3 size={25} />
                      </button>
                    </div>
                  </div>
                  <div className=" pt-4">
                    <label className="font-medium text-sm" htmlFor="password">
                      كلمة المرور الحالية
                    </label>

                    <div className="w-full flex   gap-3 justify-center items-center mt-2 relative">
                      <input
                        name="password"
                        className="bg-white w-full py-4  ps-14 rounded-2xl border-[2px] border-gray-200  text-[#A0A0A0] outline-none"
                      />
                      <div className="bg-[#171196] p-2 rounded-full text-white absolute start-2">
                        <BiLock size={20} />
                      </div>
                      <button className="bg-[#171196] p-4 text-white rounded-xl">
                        <FiEdit3 size={25} />
                      </button>
                    </div>
                    <div className="flex justify-between my-4 ">
                      <span className="flex items-center gap-2 lg:text-md text-sm text-[#A3A3A3] !leading-tight font-light">
                        <input
                          type="checkbox"
                          id="receive_ads"
                          name="receive_ads"
                          className="w-4 h-4 InputPrimary shrink-0"
                        />
                        <label htmlFor="receive_ads" cl>
                          أرغب في تلقي رسائل إلكترونية ترويجية
                        </label>
                      </span>
                      <button className="lg:w-48 md:w-40 w-28 py-3 bg-[#020202] hover:bg-[#242424]  text-white rounded-xl lg:me-[69px] md:me-5 me-0">
                        حفظ التغييرات
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </ProfileLayout>
      <DownloadApp/>
      <VideoServices />

    </>
  );
};

export default AccountInfo;
