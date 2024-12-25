import { useFormik } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import * as Yup from "yup";
import { LuLoader } from "react-icons/lu";
import { useState } from "react";

export async function resetPasswordAction(email) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${apiUrl}/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Error resetting password");
  }

  return await response.json();
}

const SendResetCode = ({ setIsCodeSent }) => {
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("البريد الإلكتروني غير صالح")
        .required("البريد الإلكتروني مطلوب"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setError(""); 
        localStorage.setItem("email", values.email);
        await resetPasswordAction(values.email);
        setIsCodeSent(true);
      } catch (error) {
        setError("حدث خطأ أثناء إرسال رمز التحقق. الرجاء المحاولة مرة أخرى.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={formik.handleSubmit} dir="rtl" className="space-y-4">
        <p className="font-medium my-4 text-[#020202A6] md:text-xl text-lg">
          برجاء التأكد من البريد الالكتروني لارسال رمز التحقق
        </p>
        <div className="relative font-medium">
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 py-4 rounded-xl block w-full pr-16 border-[2px] border-gray-200 focus:ring-[#171196] focus:border-[#171196]"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#171196] rounded-full p-2">
            <AiOutlineMail className="text-white" size={18} />
          </div>
        </div>
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm mt-2">{formik.errors.email}</div>
        )}
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

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
    </div>
  );
};

export default SendResetCode;
