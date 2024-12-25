"use client";
import { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LuLoader } from "react-icons/lu";
import { useRouter } from "next/navigation";

export async function VerifyEmailAction(email, otp) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/check-verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, otp }),
  });

  if (!response.ok) {
    throw new Error("Error verifying reset OTP");
  }

  return await response.json();
}

const validationSchema = Yup.object({
  otp: Yup.array()
    .of(
      Yup.string()
        .length(1, "Each digit must be a single character")
        .matches(/^[0-9]$/, "Only digits are allowed")
    )
    .required("OTP is required")
    .min(4, "Please enter all 4 digits"),
});

const VerifyAccount = () => {
  const [focusIndex, setFocusIndex] = useState(null);
  const email = typeof window !== "undefined" ? localStorage.getItem("email") : "";
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      otp: ["", "", "", ""],
    },
    validationSchema,
    onSubmit: async (values) => {
      const otpString = values.otp.join("");

      if (otpString.length === 4) {
        setLoading(true);
        setErrorMessage("");

        try {
          const response = await VerifyEmailAction(email, otpString);
          if (response && response.success === true) {
            localStorage.removeItem("email");
            router.push("/auth");
          } else {
            setErrorMessage(
              response.message || "الرمز غير صحيح. حاول مرة أخرى."
            );
          }
        } catch (error) {
          setErrorMessage("الرمز غير صحيح. حاول مرة أخرى.");
        } finally {
          setLoading(false);
        }
      }
    },
  });

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    formik.setFieldValue(`otp[${index}]`, value);

    if (value && index < formik.values.otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleFocus = (index) => setFocusIndex(index);
  const handleBlur = () => setFocusIndex(null);

  const getInputValue = (index) => {
    return formik.values.otp[index] === "" && focusIndex !== index
      ? "-"
      : formik.values.otp[index];
  };

  return (
    <div className="flex items-center justify-center h-[90vh] p-4">
      <div className="w-full max-w-lg border-[1px] md:px-12 px-6 py-6 bg-white rounded-3xl font-bold">
        <div dir="rtl">
          <div className="flex flex-col items-center justify-center">
            <form onSubmit={formik.handleSubmit} dir="rtl">
              <h2 className="font-semibold my-4 text-[#020202A6] md:text-2xl text-2xl text-center">
                التحقق من الحساب
              </h2>
              <p className="font-medium my-4 md:text-xl text-lg text-start text-[#A3A3A3]">
                أدخل رمز التحقق من بريدك الإلكتروني للتحقق من حسابك.
              </p>
              <div className="h-[1px] bg-[#A3A3A3] w-full my-8"></div>
              {errorMessage && (
                <p className="text-red-500 text-center">{errorMessage}</p>
              )}
              <div className="py-8">
                <div className="flex flex-col justify-center items-center space-y-2 text-[#525252]">
                  <span className="block">تم إرسال بريد إلكتروني إلى:</span>
                  <span className="block text-[#171196]">{email}</span>
                </div>
                <div className="flex gap-4 justify-center my-6">
                  {formik.values.otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      name={`otp[${index}]`}
                      value={getInputValue(index)}
                      onChange={(e) => handleChange(e, index)}
                      onFocus={() => handleFocus(index)}
                      onBlur={handleBlur}
                      maxLength="1"
                      className={`w-14 h-14 text-center text-xl font-bold border-[2px] rounded-full focus:outline-none text-[#0166FF]  
                          ${
                            focusIndex === index ||
                            formik.values.otp[index] !== ""
                              ? "border-[#0166FF] text-[#0166FF]"
                              : "border-[#8F8F8F] text-[#8F8F8F]"
                          } 
                          focus:border-[#0166FF] focus:text-[#0166FF]`}
                    />
                  ))}
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0166FF] text-white py-3 text-xl px-4 rounded-xl hover:bg-[#75a4eb]"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex justify-center items-center">
                      <LuLoader className="animate-spin" />
                    </div>
                  ) : (
                    "متابعة"
                  )}
                </button>
                <div className="my-6 text-center w-full font-semibold text-xl text-[#A3A3A3]">
                  لم تستلم الرمز؟
                  <Link className="text-[#020202]" href="#">
                    أرسل مرة أخرى
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
