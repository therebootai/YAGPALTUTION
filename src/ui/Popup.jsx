import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Popup({ children, isOpen, onClose }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowModal(true), 10); // Small delay to trigger transition
    } else {
      setShowModal(false);
    }
  }, [isOpen]);

  return (
    <main
      className={`fixed inset-0 flex items-center justify-center bg-black/50 z-[1000] 
        transition-opacity duration-300 backdrop-blur-xs ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className={`relative w-[95%] md:w-[60%] lg:w-[45%] xl:w-[40%] xxl:w-[30%]   rounded-md  shadow-site-primary transition-all duration-700 ease-in-out bg-site-primary ${
          showModal ? "scale-100 translate-y-0" : "scale-95 translate-y-5"
        }`}
      >
        <div
          className={`absolute w-full h-full bg-cover bg-center rounded-md
        `}
        >
          <div className="absolute w-full h-full bg-defined-green bg-opacity-50 rounded-md"></div>
        </div>
        <div className="md:px-8 px-4 pt-16 pb-8 relative bg-custom-darkblue">
          <button
            className="absolute top-2 right-3 bg-gray-200 text-gray-700 p-2 rounded-md hover:bg-gray-300 transition-all"
            onClick={onClose}
          >
            <IoClose size={22} />
          </button>
          <div className="relative p-4">{children}</div>
        </div>
      </div>
    </main>
  );
}
