import Image from "next/image";
import Link from "next/link";
import {
  applePay,
  appleStore,
  googlePay,
  googlePlay,
  mainLogo,
  Mastercard,
  paypal,
  visePay,
} from "../../../../public";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const PopularCountries = [
  { id: 1, path: "/united-states-esim", label: "الولايات المتحدة الأمريكية" },
  { id: 2, path: "/united-kingdom-esim", label: "المملكة المتحدة" },
  { id: 3, path: "/turkey-esim", label: "تركيا" },
  { id: 4, path: "/united-states-esim", label: "فرنسا" },
  { id: 5, path: "/united-states-esim", label: "ايطاليا" },
  { id: 6, path: "/spain-esim", label: "اسبانيا" },
  { id: 7, path: "/canada-esim", label: "كندا" },
  { id: 8, path: "/japan-esim", label: "اليابان" },
  {
    id: 9,
    path: "/united-arab-emirates-esim",
    label: "الإمارات العربية المتحدة",
  },
];
const aboutUs = [
  { id: 1, path: "/about-us", label: "من نحن" },
  { id: 2, path: "/our-values", label: "قيمنا" },
  { id: 3, path: "/impact", label: "التأثير" },
  { id: 4, path: "/news", label: "غرفة الاخبار" },
  { id: 5, path: "/media-center", label: "المركز الاعلامي" },
];
const AdditionalInfo = [
  { id: 1, path: "/help-center", label: "مركز المساعدة" },
  { id: 2, path: "/contact-us", label: "تواصل معنا" },
  { id: 3, path: "/blog", label: "المدونة" },
  { id: 4, path: "/affiliate-Marketing", label: "التسويق بالعمولة" },
  { id: 5, path: "/privacy-tools", label: "إدارة ملفات تعريف الارتباط" },
  { id: 6, path: "/esim-activation", label: "كيفية تفعيل بطاقة esim" },
];
const socialIcons = [
  { id: 1, icon: <FaFacebook size={20} />, name: "facebook", href: "#" },
  { id: 2, icon: <FaInstagram size={20} />, name: "instagram", href: "#" },
  { id: 3, icon: <FaTiktok size={20} />, name: "tiktok", href: "#" },
  { id: 4, icon: <FaXTwitter size={20} />, name: "x", href: "#" },
  { id: 5, icon: <FaLinkedinIn size={20} />, name: "linkedin", href: "#" },
];
const payment = [
  { id: 1, name: "applePay", image: applePay },
  { id: 2, name: "googlePay", image: googlePay },
  { id: 3, name: "payPay", image: paypal },
  { id: 4, name: "masterCard", image: Mastercard },
  { id: 5, name: "visa", image: visePay },
];

const Footer = () => {
  return (
    <footer className="h-full my-8">
      <div className="grid md:grid-cols-12 grid-cols-2  justify-between mx-auto w-full max-w-screen-2xl  gap-8 p-4">
        <div className="md:col-span-4 col-span-1 flex flex-col gap-4 max-w-xs">
          <Link href="/" className="flex-shrink-0 my-4 w-36">
            <Image src={mainLogo} alt="Main Logo" width={130} />
          </Link>
          <p className="text-[#8F8F8F] md:!leading-9 !leading-7 font-semibold   text-md">
            نت قو حيث التواصل مستمر مع احبابك لتستمتع بسفرك اينما كنت بتغطية
            انترنت مميزة دون انقطاع
          </p>
          <div>
            <h2 className="md:text-xl text-lg text-[#000E55] font-semibold">
              حمل تطبيقنا الان واستمتع الان
            </h2>
          </div>
          <div className="flex gap-2 w-full">
            <button className="w-full">
              <Image src={googlePlay} />
            </button>
            <button className="w-full">
              <Image src={appleStore} />
            </button>
          </div>
        </div>
        <div className="md:col-span-3 col-span-1 gap-4  max-w-xs">
          <div className="text-[#171196] md:my-6 my-4">
            <p className="md:text-2xl text-xl  font-semibold">
              البلدان الشائعة
            </p>
            <div className="bg-[#171196] w-10 rounded-full md:h-[5px] h-[3px] my-1" />
          </div>
          <ul className="   ">
            {PopularCountries.map((country) => (
              <li key={country.id} className="mb-2">
                <Link
                  href={country.path}
                  className=" text-md  font-[600] text-[#8F8F8F]"
                >
                  {country.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3 col-span-1 gap-4  max-w-xs">
          <div className="text-[#171196] my-6">
            <p className="md:text-2xl text-xl  font-semibold">نبذة عنا</p>
            <div className="bg-[#171196] w-10 rounded-full md:h-[5px] h-[3px] my-1" />
          </div>
          <ul className=" ">
            {aboutUs.map((about) => (
              <li key={about.id} className="mb-2">
                <Link
                  href={about.path}
                  className="md:text-lg text-md font-[600] text-[#8F8F8F]"
                >
                  {about.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 col-span-1 gap-4  max-w-xs">
          <div className="text-[#171196] my-6">
            <p className="md:text-2xl text-xl  font-semibold">معلومات إضافية</p>
            <div className="bg-[#171196] w-10 rounded-full md:h-[5px] h-[3px] my-1" />
          </div>
          <ul className="   ">
            {AdditionalInfo.map((info) => (
              <li key={info.id} className="mb-2">
                <Link
                  href={info.path}
                  className=" text-md font-[600] text-[#8F8F8F]"
                >
                  {info.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-[#F3F3F3] w-full  my-4 h-auto flex justify-center items-center">
        <div className="w-full flex justify-between flex-wrap mx-auto max-w-screen-2xl  gap-8 p-4">
          <ul className=" flex gap-4 items-center justify-center ">
            {socialIcons.map((scoial) => (
              <li key={scoial.id} className="rounded-full bg-white md:p-4 p-3">
                <Link
                  href={scoial.href}
                  className=" md:text-md text-sm font-[600] text-[#000E55]"
                >
                  {scoial.icon}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[#171196]  text-lg font-semibold flex justify-center items-center">
            © جميع الحقوق محفوظة نت قو 2024
          </p>

       <div className="md:w-1/3 w-full flex lg:gap-5 gap-2">
       {payment.map((pay) => (
            <div className="flex gap-2 bg-white lg:py-2 py-1 lg:px-4 px-2 w-32 rounded-md justify-center" key={pay.id}>
              <Image className="w-auto"  alt={pay.name} src={pay.image} />
            </div>
          ))}
       </div>
        </div>
       
      </div>
      <div className=" w-full  my-6 h-auto flex justify-between items-center mx-auto max-w-screen-2xl text-[#8F8F8F] text-xl px-4">
          <p>
          سياسة الخصوصية وملفات تعريف الارتباط
          </p>
          <p>
          الشروط والأحكام
          </p>
        </div>
    </footer>
  );
};

export default Footer;
