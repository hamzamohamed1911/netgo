import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const AuthGoFARegister = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleRegister = async (email, name, type) => {
    try {
      const response = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          type, 
          password: "12345678",
          password_confirmation: "12345678",
          receive_ads: 1,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        setError(data.message || "حدث خطأ ما");
        return;
      }

      const { token } = data.data;
      if (token) {
        setCookie("authToken", token, { maxAge: 60 * 60 * 24 });
        router.push("/");
      } else {
        setError("حدث خطأ أثناء تسجيل الدخول، لم يتم العثور على التوكن");
      }
    } catch (err) {
      setError("حدث خطأ أثناء تسجيل الدخول");
      console.error(err);
    }
  };

  useEffect(() => {
    if (session) {
        const provider = session.provider || "google";
        const type = provider === "facebook" ? 3 : 2;

      handleRegister(session.user.email, session.user.name, type);
    }
  }, [status, session]);

  return (
    <>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <div className="flex justify-center items-center w-full mt-6">
        <span className="relative text-center px-4">
          <span className="absolute -left-28 top-1/2 transform -translate-y-1/2 w-28 border-t border-gray-300"></span>
          أو سجِّل الدخول باستخدام
          <span className="absolute -right-28 top-1/2 transform -translate-y-1/2 w-28 border-t border-gray-300"></span>
        </span>
      </div>

      <div className="flex gap-2 justify-center items-center mt-4">
        <button
          type="button"
          onClick={() => signIn("google")}
          className="border-[2px] rounded-full p-3"
        >
          <FcGoogle className="text-white" size={30} />
        </button>
        <button
          type="button"
          className="bg-[#1877F2] rounded-full p-3"
          onClick={() => signIn("facebook")}
        >
          <FaFacebook className="text-white" size={30} />
        </button>
      </div>
    </>
  );
};

export default AuthGoFARegister;
