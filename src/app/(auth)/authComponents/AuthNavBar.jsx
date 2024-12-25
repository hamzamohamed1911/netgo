import Image from "next/image";
import { mainLogo } from "../../../../public";
import { IoIosArrowBack } from "react-icons/io";

const AuthNavBar = () => {
  return (
    <nav className="flex justify-between items-center h-24 px-4 mx-auto container ">
      <button className="flex items-center bg-[#F6F6F6] justify-center p-3 rounded-lg">
        <IoIosArrowBack size={34} />
      </button>
      <div className="flex items-center">
        <Image src={mainLogo} alt="Net Go Main Logo" width={120} height={40} />
      </div>
    </nav>
  );
};

export default AuthNavBar;
