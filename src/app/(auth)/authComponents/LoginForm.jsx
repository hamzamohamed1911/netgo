"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setCookie } from "cookies-next";
import AuthGoFA from "./AuthGoFA";
import { useRouter } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
      formik.setValues({ email: savedEmail, password: savedPassword });
      setRememberMe(true); 
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("البريد الإلكتروني غير صحيح")
        .required("البريد الإلكتروني مطلوب"),
      password: Yup.string().required("كلمة المرور مطلوبة"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await fetch(`${apiUrl}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          if (data.data && data.data.email) {
            setErrors({ email: "البريد الإلكتروني المحدد غير صالح." });
          } else if (data.message === "Incorrect Email or Password") {
            setErrors({ password: " كلمة المرور غير صحيحة" });
          } else {
            setErrors({ email: data.message || "حدث خطأ ما" });
          }
          return;
        }

        const { token } = data.data;
        if (token) {
          setCookie("authToken", token, { maxAge: 60 * 60 * 24 });
          if (rememberMe) {
            localStorage.setItem("email", values.email);
            localStorage.setItem("password", values.password);
          } else {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
          }
          router.push('/');

        } else {
          alert("حدث خطأ أثناء تسجيل الدخول، لم يتم العثور على التوكن");
        }
      } catch (error) {
        alert("حدث خطأ أثناء تسجيل الدخول");
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form dir="rtl" className="space-y-4" onSubmit={formik.handleSubmit}>
      <div className="relative font-medium">
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          id="email"
          className={`mt-1 py-4 rounded-xl block w-full pr-16 border-[2px] ${
            formik.errors.email && formik.touched.email
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:ring-[#171196] focus:border-[#171196]"
          }`}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#171196] rounded-full p-2">
          <AiOutlineMail className="text-white" size={18} />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        ) : null}
      </div>

      <div className="relative font-medium">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="كلمة المرور"
          id="password"
          className={`mt-1 py-4 rounded-xl block w-full pr-16 border-[2px] ${
            formik.errors.password && formik.touched.password
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:ring-[#171196] focus:border-[#171196]"
          }`}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#171196] rounded-full p-2">
          <RiLockPasswordLine className="text-white" size={18} />
        </div>
        <div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
        </div>
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
        ) : null}
      </div>
          
      <div className="flex justify-between py-2">
        <span className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-4 h-4 InputPrimary"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">تذكرني</label>
        </span>
        <Link
          href="/forget-password"
          className="text-[#4412BF] hover:text-[#4412BF]"
        >
          هل نسيت كلمة المرور؟
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-[#171196] text-white py-3 px-4 rounded-xl hover:bg-[#4943ca]"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
      </button>

      <AuthGoFA />
    </form>
  );
};

export default LoginForm;
