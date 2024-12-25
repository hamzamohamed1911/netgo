"use client";

import { useState, useEffect } from "react";
import LocalSim from "./LocalSim";
import GlobalSim from "./GlobalSim";
import { FiLoader } from "react-icons/fi";

const SimCards = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const tabs = [
    { label: "بطاقات esim محلية" },
    { label: "بطاقات esim إقليمية" },
    { label: "شرائح esim عالمية" },
  ];

  const fetchToken = async () => {
    try {
      const response = await fetch("/api/fetchToken", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.data.token_type) {
        setToken(data.data.access_token);
      } else {
        throw new Error("Access token not found in the response");
      }
    } catch (err) {
      console.error("Error fetching token:", err.message);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FiLoader className="animate-spin text-2xl" />
      </div>
    );
  }

  return (
    <section className="w-full h-auto my-24">
      <div className="h-full relative z-50">
        <h1 className="lg:text-6xl text-5xl font-[500] text-center font-sans text-[#171196]">
          بطاقــــات <span className="text-black"> SIM</span> قــابلة للتحميــل
        </h1>
        <div className="bg-[#F9F9F9] my-4">
          <div className="flex justify-between mx-auto max-w-xl container p-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full py-3 md:px-4 px-1 rounded-lg text-center font-semibold ${
                  activeTab === index
                    ? "text-white bg-[#4412BF] w-auto"
                    : "bg-transparent text-[#666666]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 p-4 container mx-auto">
          {activeTab === 0 && <LocalSim token={token} />}
          {activeTab === 1 && <GlobalSim token={token} />}
          {activeTab === 2 && <p>هذا هو محتوى تبويب "شرائح esim عالمية".</p>}
        </div>
      </div>
    </section>
  );
};

export default SimCards;
