import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LuCodeXml } from "react-icons/lu";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import Modal from "./Modal";
import { mainLogo } from "../../../../public";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AuthGoFARegister from "./AuthGoFARegister";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    password_confirmation: false,
  });
const router = useRouter()
  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      referral_code: "",
      receive_ads: false, 
      acceptance_of_conditions: false, 
    },
    validationSchema: Yup.object({
      name: Yup.string().required("الاسم مطلوب"),
      email: Yup.string()
        .email("البريد الإلكتروني غير صحيح")
        .required("البريد الإلكتروني مطلوب"),
      password: Yup.string()
        .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل")
        .required("كلمة المرور مطلوبة"),
      password_confirmation: Yup.string()
        .oneOf([Yup.ref("password")], "كلمة المرور غير متطابقة")
        .required("تأكيد كلمة المرور مطلوب"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      setSubmitting(true);
      try {
        const response = await fetch(`${apiUrl}/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            type:1,
            receive_ads: values.receive_ads ? 1 : 0,
            acceptance_of_conditions: values.acceptance_of_conditions ? 1 : 0,

          }),
        });
        const data = await response.json();
        if (data.success){
           localStorage.setItem("email" ,values.email);
          router.push('/account-verification')
        }
        if (!data.success) {
          if (data.data) {
            const validationErrors = {};
            for (const key in data.data) {
              validationErrors[key] = data.data[key][0];
            }
            setErrors(validationErrors);
          } else {
            alert(data.message || "حدث خطأ ما، حاول مرة أخرى.");
          }
        } 
      } catch (error) {
        console.log("فشل الاتصال بالخادم، حاول مرة أخرى لاحقًا.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} dir="rtl" className="space-y-4 h-full">
        <div className="relative font-medium">
          <input
            type="text"
            placeholder="الاسم الكامل"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 py-4 rounded-xl block w-full pr-16 border-[2px] border-gray-200 focus:ring-[#171196] focus:border-[#171196]"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#171196] rounded-full p-2">
            <FaRegCircleUser className=" text-white" size={18} />
          </div>
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>

        <div className="relative font-medium">
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 py-4 rounded-xl block w-full pr-16 border-[2px] border-gray-200 focus:ring-[#171196] focus:border-[#171196]"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#171196] rounded-full p-2">
            <MdOutlineEmail className=" text-white" size={18} />
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        <div className="relative font-medium">
          <input
            type={showPassword.password ? "text" : "password"}
            placeholder="كلمة المرور"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="mt-1 py-4 rounded-xl block w-full pr-16 border-[2px] border-gray-200 focus:ring-[#171196] focus:border-[#171196]"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#171196] rounded-full p-2">
            <MdOutlineLock className=" text-white" size={18} />
          </div>
          <div
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer text-lg"
            onClick={() => togglePasswordVisibility("password")}
          >
            {showPassword.password ? <BsEyeSlash /> : <BsEye />}
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>

        <div className="relative font-medium">
          <input
            type={showPassword.password_confirmation ? "text" : "password"}
            placeholder="إعادة كتابة كلمة المرور"
            id="password_confirmation"
            name="password_confirmation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password_confirmation}
            className="mt-1 py-4 rounded-xl block w-full pr-16 border-[2px] border-gray-200 focus:ring-[#171196] focus:border-[#171196]"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#171196] rounded-full p-2">
            <MdOutlineLock className=" text-white" size={18} />
          </div>
          <div
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer text-lg"
            onClick={() => togglePasswordVisibility("password_confirmation")}
          >
            {showPassword.password_confirmation ? <BsEyeSlash /> : <BsEye />}
          </div>
          {formik.touched.password_confirmation &&
            formik.errors.password_confirmation && (
              <div className="text-red-500 text-sm">
                {formik.errors.password_confirmation}
              </div>
            )}
        </div>

        <div className="relative font-medium">
          <input
            type="text"
            placeholder="رمز الإحالة أو القسيمة (اختياري)"
            id="referral_code"
            name="referral_code"
            onChange={formik.handleChange}
            value={formik.values.referral_code}
            className="mt-1 py-4 rounded-xl block w-full pr-16 border-[2px] border-gray-200 focus:ring-[#171196] focus:border-[#171196]"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#171196] rounded-full p-2">
            <LuCodeXml className=" text-white" size={18} />
          </div>
        </div>

        <span className="flex items-center gap-2 text-md text-[#A3A3A3] !leading-tight font-light">
          <input
            type="checkbox"
            id="receive_ads"
            name="receive_ads"
            onChange={formik.handleChange}
            checked={formik.values.receive_ads}
            className="w-4 h-4 InputPrimary"
          />
          <label htmlFor="receive_ads">
            أرغب في تلقي رسائل إلكترونية ترويجية
          </label>
        </span>

        <button
        onClick={()=>setIsModalOpen(true)}
        type="button"
          className="w-full bg-[#171196] text-white py-3 px-4 rounded-xl hover:bg-[#4943ca]"
        >
          الموافقة والتسجيل
        </button>
        <AuthGoFARegister/>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex items-center justify-center my-10">
          <Image
            src={mainLogo}
            alt="Net Go Main Logo"
            width={120}
            height={40}
          />
        </div>
        <p className=" text-center text-[#020202A6] text-xl font-medium">
          من خلال تحديد "نعم، أوافق"، فإنك توافق على <span className="text-[#171196]"> شروط خدمة  </span> Net go و  <span className="text-[#171196]">سياسة الخصوصية</span>.
        </p>
        <span className="flex items-start gap-3 text-lg !leading-snug font-medium my-6 text-[#020202A6]">
          <span>
          <input
  type="checkbox"
  id="acceptance_of_conditions"
  name="acceptance_of_conditions"
  onChange={formik.handleChange}
  checked={formik.values.acceptance_of_conditions}
  className="w-4 h-4 mt-1 InputPrimary"
/>
          </span>
          <label>
            أوافق على تلقي الرسائل الإلكترونية من شركة AffinityClick Inc. فيما
            يتعلق بمنتجاتها وخدماتها والتحديثات الأخرى. وأتفهم أنه يمكنني سحب
            موافقتي في أي وقت.
          </label>
        </span>

        <button type="submit" className="mt-4 text-xl w-full bg-[#4412BF] text-white py-5 px-4 rounded-2xl hover:bg-[#4943ca]">
          نعم، أنا أوافق
        </button>
      </Modal>
      </form>
    
    </>
  );
};

export default RegisterForm;
