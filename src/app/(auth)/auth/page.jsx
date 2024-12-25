"use client";

import { useState, useEffect } from "react";
import LoginForm from "../authComponents/LoginForm";
import RegisterForm from "../authComponents/RegisterForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import { mainLogo } from "../../../../public";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  const handleTabChange = (value) => {
    setActiveTab(value);
    localStorage.setItem("activeTab", value);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-lg border-[1px] px-12 py-6 bg-white rounded-3xl font-bold">
        <div className="flex items-center justify-center my-10">
          <Image
            src={mainLogo}
            alt="Net Go Main Logo"
            width={120}
            height={40}
          />
        </div>
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <div className="flex justify-center items-center mb-6">
            <TabsList className="flex justify-center text-[#A3A3A3] gap-4 bg-[#F0F0F2] p-[5px] rounded-xl w-fit">
              <TabsTrigger
                value="register"
                className="w-32 py-[6px] rounded-lg transition-colors data-[state=active]:bg-white data-[state=active]:text-[#171196] data-[state=active]:font-bold"
              >
                إنشاء حساب
              </TabsTrigger>
              <TabsTrigger
                value="login"
                className="w-32 py-[6px] rounded-lg transition-colors data-[state=active]:bg-white data-[state=active]:text-[#171196] data-[state=active]:font-bold"
              >
                تسجيل دخول
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="login">
            <LoginForm />
          </TabsContent>

          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
