import allClasses from "@/lib/classLibrary";
import DescriptionCard from "@/ui/DescriptionCard";
import EnquiryForm from "@/ui/EnquiryForm";
import Popup from "@/ui/Popup";
import { useState } from "react";

export default function ClassTabs() {
  const [activeTab, setActiveTab] = useState("junior");
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [currentClass, setCurrentClass] = useState("");

  const toggleAppointmentModal = () =>
    setIsAppointmentModalOpen(!isAppointmentModalOpen);

  return (
    <div className="flex flex-col items-center justify-center gap-4 xl:gap-6">
      <div className="flex mb-6">
        <button
          className={`px-6 py-3 relative ${
            activeTab === "junior"
              ? "bg-site-secondary text-white rounded-full translate-x-[12%] z-10"
              : "bg-white text-site-primary rounded-l-full translate-0"
          }  transition-all duration-300 hover:bg-site-secondary hover:text-white border border-site-secondary`}
          onClick={() => setActiveTab("junior")}
        >
          Junior Classes
        </button>
        <button
          className={`px-6 py-3 relative ${
            activeTab === "senior"
              ? "bg-site-secondary text-white rounded-full -translate-x-[12%] z-10"
              : "bg-white text-site-primary rounded-r-full translate-0"
          } transition-all duration-300 hover:bg-site-secondary hover:text-white border border-site-secondary`}
          onClick={() => setActiveTab("senior")}
        >
          Senior Classes
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6 place-items-stretch">
        {allClasses[activeTab].map((item, index) => (
          <DescriptionCard
            key={index}
            heading={item.class_name}
            description={item.content}
            cover={item.bgcover}
            showBtn={true}
            btnClick={() => {
              toggleAppointmentModal();
              setCurrentClass(item.class_name);
            }}
          />
        ))}
      </div>
      <Popup isOpen={isAppointmentModalOpen} onClose={toggleAppointmentModal}>
        <EnquiryForm currentClass={currentClass} />
      </Popup>
    </div>
  );
}
