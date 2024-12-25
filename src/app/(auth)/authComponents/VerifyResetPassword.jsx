import { useState } from "react";
import { LuLoader } from "react-icons/lu"; 
import { useFormik } from "formik";
import * as Yup from "yup";

export async function VerifyResetPasswordAction(email, otp) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/check-verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, otp }),
  });

  if (!response.ok) {
    throw new Error("Error verifying reset otp");
  }

  return await response.json();
}

const validationSchema = Yup.object({
  otp: Yup.array()
    .of(Yup.string().length(1, "Each digit must be a single character").matches(/^[0-9]$/, "Only digits are allowed"))
    .required("OTP is required")
    .min(4, "Please enter all 4 digits"),
});

const VerifyResetPassword = ({ setIsResettingPassword }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [focusIndex, setFocusIndex] = useState(null); 
  const email = localStorage.getItem("email");

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
          const response = await VerifyResetPasswordAction(email, otpString);
          if (response.success) {
            setIsResettingPassword(true);
          } else {
            setErrorMessage(response.message || "الرمز غير صحيح. حاول مرة أخرى.");
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
    return formik.values.otp[index] === "" && focusIndex !== index ? "-" : formik.values.otp[index];
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={formik.handleSubmit} dir="rtl" className="space-y-4">
        <h2 className="font-semibold my-4 text-[#020202A6] md:text-2xl text-2xl text-center">
          تأكيد الرمز
        </h2>
        <div className="flex flex-col justify-center items-center text-[#525252]">
          <span className="block">تم إرسال بريد إلكتروني إلى:</span>
          <span className="block text-[#171196]">{email}</span>
        </div>
        <p className="font-medium my-4 text-[#020202A6] md:text-xl text-lg text-start">
          ادخل رمز التحقق لتتمكن من استعادة كلمة المرور
        </p>

        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}

        <div className="flex gap-4 justify-center py-4">
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
                          ${focusIndex === index || formik.values.otp[index] !== "" ? "border-[#0166FF] text-[#0166FF]" : "border-[#8F8F8F] text-[#8F8F8F]"} 
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
            "تأكيد"
          )}
        </button>
      </form>
    </div>
  );
};

export default VerifyResetPassword;
