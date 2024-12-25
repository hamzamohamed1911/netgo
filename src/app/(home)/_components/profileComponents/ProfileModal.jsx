"use client";

import React from "react";

const ProfileModal = ({
  show,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  cancelText,
  icon,
  confirmButtonColor,
  cancelButtonColor,
  iconColor,
}) => {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 flex flex-col justify-center items-center rounded-3xl lg:w-[550px] lg:h-[400px] w-auto h-auto m-4 gap-4">
        <div className="flex justify-center mb-4">
          {icon && <div className={`text-3xl ${iconColor}`}>{icon}</div>}
        </div>
        <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
        <p className="text-center mb-6 !leading-relaxed text-lg font-medium max-w-sm text-[#5C5C5C]">{message}</p>
        <div className="flex gap-3">
          <button
            className={`py-5 w-40 font-medium rounded-full ${confirmButtonColor} text-white`}
            onClick={onConfirm} 
          >
            {confirmText || "تأكيد"}
          </button>
          <button
            className={`lg:py-5 py-3 lg:w-40 w-32 font-medium rounded-full ${cancelButtonColor} text-white`}
            onClick={onClose} 
          >
            {cancelText || "إلغاء"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
