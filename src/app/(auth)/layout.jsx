import Image from "next/image";
import AuthNavBar from "./authComponents/AuthNavBar";
import { Ellipse1, Ellipse2, Ellipse3 } from "../../../public";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <Image
        className="absolute right-1/4 top-1/2 "
        src={Ellipse1}
        width={30}
        height={30}
        alt="Ellipse1"
      />
      <Image
        className="absolute left-1/4 top-1/4 "
        src={Ellipse2}
        width={30}
        height={30}
        alt="Ellipse2"
      />
      <Image
        className="absolute left-1/4 bottom-1/4  "
        src={Ellipse3}
        width={30}
        height={30}
        alt="Ellipse3"
      />

      <AuthNavBar />
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default AuthLayout;
