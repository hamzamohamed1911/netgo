"use client";

import { useState, useEffect } from "react";
import { FiLoader } from "react-icons/fi";
import { LuMoveLeft } from "react-icons/lu";
import { IoMdEye } from "react-icons/io";
import Image from "next/image";

const LocalSim = ({token}) => {
  const [packages, setPackages] = useState([]);
  const [visiblePackages, setVisiblePackages] = useState(15);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(token)

  const fetchPackages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/fetchPackages?limit=${visiblePackages}&filter[type]=local`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setPackages((prevPackages) => [
        ...prevPackages,
        ...data.data.filter(
          (pkg) => !prevPackages.some((p) => p.slug === pkg.slug)
        ),
      ]);
    } catch (err) {
      console.error("Error fetching packages:", err);
      setError("حدث خطأ أثناء جلب البيانات.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, [visiblePackages]);

  const loadMore = () => {
    setVisiblePackages((prev) => prev + 15);
  };

  return (
    <section className="w-full h-auto my-24 p-4">
      <div className="h-full relative z-50">
      <h1 className="text-6xl font-[500] text-center font-sans text-[#666666]">
        البلدان الشائعة
        </h1>
       
        <div className="mt-4 p-4 container mx-auto">
          {loading && visiblePackages === 15 ? (
            <p>جاري تحميل البيانات...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-6 gap-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.slug}
                  className="flex flex-col items-center justify-center p-4  rounded-2xl  bg-[#F9F9F9]"
                >
                  <div className="w-20 h-20 rounded-full my-4">
                    <Image
                      src={pkg.image.url}
                      alt={pkg.title}
                      width={100}
                      height={100}
                      className="object-cover w-20 h-20 rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{pkg.title}</h3>
                  <button className="bg-[#171196] font-medium text-white py-2 lg:px-4 px-3 rounded-xl hover:border-[#000E55] border-[2px] hover:bg-white hover:text-[#171196] flex justify-center items-center gap-2">
                    <IoMdEye size={25} />
                    مشاهدة التفاصيل
                  </button>
                </div>
              ))}
            </div>
          )}

          {loading ? (
            <div className="mt-10 flex justify-center">
              <FiLoader className="animate-spin text-2xl" />
            </div>
          ) : (
            <div className="flex justify-center mt-6">
              <button
                onClick={loadMore}
                className="text-[#000E55] border-[#000E55] border-[2px] bg-white py-3 font-semibold w-96 hover:bg-[#171196] hover:text-white rounded-2xl flex gap-4 justify-center items-center"
              >
                عرض المزيد
                <LuMoveLeft size={35} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocalSim;
