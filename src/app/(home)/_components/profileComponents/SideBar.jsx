"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa"; 
import ProfileModal from "./ProfileModal";
import { FaRegTrashAlt } from "react-icons/fa";

const ProfilenavLinks = [
  { id: 1, url: "/profile/account-info", title: "معلومات الحساب" },
  { id: 2, url: "/profile/netgo-membership", title: "نــت غو و العضوية" },
  { id: 3, url: "/profile/saved-cards", title: "البطاقات المحفوظة" },
  { id: 4, url: "/profile/affiliate-marketing", title: "التسويق بالعمولة" },
  { id: 5, url: "/profile/orders", title: "الطلبات" },
];

const SideBar = () => {
  const [showModal, setShowModal] = useState(false); 
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    confirmText: "",
    cancelText: "",
    onConfirm: null,
    icon: null, 
    confirmButtonColor: "", 
    cancelButtonColor: "", 
    iconColor: "", 
  });

  const pathName = usePathname();

  const handleLogout = () => {
    setModalContent({
      title: "هل تريد تسجيل الخروج؟",
      message: "لن تتمكن من الوصول إلى حسابك حتى تسجل الدخول مرة أخرى.",
      confirmText: "تسجيل الخروج",
      cancelText: "إلغاء",
      onConfirm: () => {
        console.log("Logging out...");
        setShowModal(false);
      },
      icon: <FaSignOutAlt />, 
      confirmButtonColor: "bg-[#4412BF]", 
      cancelButtonColor: "bg-black", 
      iconColor: "text-[#4412BF]",
    });
    setShowModal(true); 
  };

  const handleDeleteAccount = () => {
    setModalContent({
      title: "هل تريد حذف حسابك؟",
      message: "يرجى ملاحظة أن حذف الحساب سيؤدي إلى فقدان جميع بياناتك بشكل دائم. لا يمكن استعادة الحساب بعد الحذف.",
      confirmText: "حذف الحساب",
      cancelText: "إلغاء",
      onConfirm: () => {
        console.log("Account deleted...");
        setShowModal(false); 
      },
      icon: <FaRegTrashAlt />, 
      confirmButtonColor: "bg-[#FF0A0E]", 
      cancelButtonColor: "bg-black", 
      iconColor: "text-[#FF0A0E]", 
    });
    setShowModal(true); 
  };

  const handleCancel = () => {
    setShowModal(false); 
  };

  return (
    <aside className="lg:w-80 w-full h-auto bg-[#F9F9F9] rounded-xl flex lg:flex-col lg:justify-between">
      <div className="m-6 lg:block hidden">
        <span className="bg-white rounded-3xl my-3 px-4 font-semibold py-2">
          مسافر
        </span>
        <h2 className="text-[#171196] font-semibold text-xl my-3">
          ali djawad Tebboune
        </h2>
      </div>
      <div className="bg-gray-300 w-full h-[2px] my-2 hidden lg:block" />

      <ul className="lg:space-y-4 lg:gap-0 text-xl gap-2 space-x-reverse lg:flex lg:flex-col flex lg:mt-4 mt-0 overflow-x-auto lg:overflow-hidden whitespace-nowrap lg:whitespace-normal flex-grow hide-scrollbar m-6">
        {ProfilenavLinks.map((link, index) => (
          <Link
            href={link.url}
            key={index}
            className={`relative cursor-pointer text-md  font-medium px-4 py-1 inline-block lg:block w-auto lg:w-full ${
              pathName === link.url
                ? "text-[#171196] active-link"
                : "text-[#020202] inactive-link"
            }`}
          >
            <span className="link-title">{link.title}</span>
          </Link>
        ))}
        <div className="lg:flex lg:flex-col lg:justify-end ">
          <li
            className="flex cursor-pointer lg:text-md text-lg font-medium px-4 py-1 items-center w-full inactive-link relative"
            onClick={handleDeleteAccount} 
          >
            حذف الحساب
          </li>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-end ">
          <li
            className="flex cursor-pointer lg:text-md text-lg font-medium px-4 py-1 items-center w-full lg:mb-4 mb-0 inactive-link relative"
            onClick={handleLogout} 
          >
            تسجيل الخروج
          </li>
        </div>
      </ul>

      <ProfileModal
        show={showModal} 
        onClose={handleCancel} 
        onConfirm={modalContent.onConfirm} 
        title={modalContent.title} 
        message={modalContent.message} 
        confirmText={modalContent.confirmText} 
        cancelText={modalContent.cancelText} 
        icon={modalContent.icon} 
        confirmButtonColor={modalContent.confirmButtonColor} 
        cancelButtonColor={modalContent.cancelButtonColor} 
        iconColor={modalContent.iconColor}  
      />
    </aside>
  );
};

export default SideBar;
