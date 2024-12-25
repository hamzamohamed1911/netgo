import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { LuLoader } from "react-icons/lu";
import { MdOutlineLock } from "react-icons/md";
import * as Yup from "yup";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function resetPassword({ email, password, password_confirmation }) {
  const response = await fetch(`${apiUrl}/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, password_confirmation }),
  });

  if (!response.ok) {
    throw new Error("Error resetting password");
  }

  return await response.json();
}

const ResetPassword = () => {
  const email = localStorage.getItem("email"); 
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState({
    password: false,
    password_confirmation: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("يرجى إدخال كلمة المرور الجديدة")
        .min(8, "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل"), 
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "كلمة المرور غير متطابقة")
        .required("يرجى تأكيد كلمة المرور"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setMessage("");
      try {
        await resetPassword({
          email,
          password: values.password,
          password_confirmation: values.confirmPassword,
        });
        localStorage.removeItem("email");
        setMessage("تم تحديث كلمة المرور بنجاح");
        router.push("/auth");
      } catch (error) {
        setMessage("حدث خطأ أثناء تحديث كلمة المرور");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={formik.handleSubmit} dir="rtl" className="space-y-4 w-full">
        <h2 className="font-semibold my-4 text-[#020202A6] md:text-2xl text-2xl text-center">
          تغيير كلمة المرور
        </h2>

        <p className="font-medium my-4 text-[#020202A6] md:text-xl text-lg text-start">
          يجب أن تكون كلمة المرور الجديدة فريدة من نوعها عن تلك المستخدمة سابقًا
        </p>

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
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-600 text-sm">{formik.errors.password}</div>
          )}
        </div>

        <div className="relative font-medium">
          <input
            type={showPassword.password_confirmation ? "text" : "password"}
            placeholder="اعادة كتابة كلمة المرور"
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
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
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <div className="text-red-600 text-sm">{formik.errors.confirmPassword}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#0166FF] text-white py-3 text-xl px-4 rounded-xl hover:bg-[#75a4eb]"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <div className="flex justify-center items-center">
              <LuLoader className="animate-spin" />
            </div>
          ) : (
            "تأكيد"
          )}
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 text-center p-3 rounded-xl ${
            message.includes("نجاح") ? "text-green-500" : "text-red-500"
          } text-white`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
