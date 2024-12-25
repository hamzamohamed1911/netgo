import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      dir="rtl"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
        <div className="flex justify-between items-center  ">
          <span className="text-2xl font-semibold">قبول الشروط</span>
          <div className="flex justify-center items-center bg-[#F4F4F4] rounded-xl w-10 h-10">
            <button
              onClick={onClose}
              className="text-[#1C355E] hover:text-gray-800 font-bold text-xl"
            >
              <IoMdClose />
            </button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
