"use client";

import { useState, useEffect } from "react";
import { FiArrowUpLeft } from "react-icons/fi";
import Image from "next/image";

const GlobalSim = ({ token }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(token);

  const fetchPackages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/fetchPackages?&filter[type]=global`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setPackages(data.data);
    } catch (err) {
      console.error("Error fetching packages:", err);
      setError("حدث خطأ أثناء جلب البيانات.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <section className="w-full h-auto my-24 p-4">
      <div className="h-full relative z-50">
        <h1 className="text-6xl font-[500] text-center font-sans text-[#666666]">
          المنـــــاطق
        </h1>

        <div className="mt-4 p-4 container mx-auto">
          {loading ? (
            <p>جاري تحميل البيانات...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-6 gap-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.slug}
                  className="flex flex-col justify-center p-4 rounded-2xl bg-[#F9F9F9] rounded-bl-xl relative"
                >
                  <div className="w-auto">
                    <h3 className="text-md text-[#001377] font-semibold mb-2 text-start bg-white p-2 rounded-lg inline-block">
                      {pkg.title}
                    </h3>
                  </div>
                  <div className="absolute -left-3 -bottom-3 bg-white h-16 w-16 rounded-t-full rounded-full">
                    <button className="bg-[#4412BF] rounded-full text-white h-12 w-12 flex justify-center items-center transition-transform duration-500 hover:rotate-45">
                      <FiArrowUpLeft className="text-2xl" />
                    </button>
                  </div>

                  <div className="h-20 rounded-full my-6 flex w-full justify-center items-center">
                    <Image
                      src={pkg.image.url}
                      alt={pkg.title}
                      width={100}
                      height={100}
                      className="object-cover w-20 h-20 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GlobalSim;
