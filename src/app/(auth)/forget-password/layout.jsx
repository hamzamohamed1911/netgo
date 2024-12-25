import Image from "next/image";
import { mainLogo } from "../../../../public";

const ForgetPasswordLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] p-4">
      <div className="w-full max-w-lg border-[1px]  md:px-12 px-6 py-6 bg-white rounded-3xl  font-bold ">
        <div dir="rtl" >
          <div className="flex items-center justify-center my-4">
            <Image
              src={mainLogo}
              alt="Net Go Main Logo"
              width={120}
              height={40}
            />
          </div>

          <main className="relative">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordLayout;
