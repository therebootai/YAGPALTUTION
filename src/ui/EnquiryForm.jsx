import { useActionState, useEffect, useState } from "react";

export default function EnquiryForm({ currentClass = "" }) {
  const [selectedClass, setSelectedClass] = useState(currentClass);
  const handleSubmit = (prevState, formData) => {
    const name = formData.get("name");
    const number = formData.get("number");
    const message = formData.get("message");
    const requiredClass = formData.get("class");
    let whatsappMessage = `Name: ${name}\nMobile: ${number}\nClasses Needed:  ${requiredClass}\nMessage: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=+919832014758&text=${encodedMessage}`
      : `https://api.whatsapp.com/send?phone=+919832014758&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    return { ...prevState, class: selectedClass };
  };

  const [formState, formAction] = useActionState(handleSubmit, {
    class: currentClass,
  });

  useEffect(() => {
    setSelectedClass(currentClass); // Sync prop changes
  }, [currentClass]);

  return (
    <div className="flex flex-col md:items-center gap-4 xlg:gap-5 flex-1">
      <h1 className="text-white xl:text-3xl md:text-2xl text-xl font-bold text-center">
        Admission Going On
      </h1>
      <p className="text-white xl:text-lg text-base text-center">
        We are variations of passages the have suffered.
      </p>
      <form className="flex flex-col gap-4 xl:gap-6" action={formAction}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          required
          className="rounded-[20px] rounded-bl-none placeholder:text-white text-base bg-white/40 py-2.5 xl:px-5 md:px-4 px-3 focus:outline-none text-white md:min-w-sm"
        />
        <input
          type="tel"
          minLength={10}
          maxLength={10}
          name="number"
          required
          placeholder="Mobile Number"
          className="rounded-[20px] rounded-bl-none placeholder:text-white text-base bg-white/40 py-2.5 xl:px-5 md:px-4 px-3 focus:outline-none text-white md:min-w-sm"
        />
        <select
          name="class"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="rounded-[20px] rounded-bl-none placeholder:text-white text-base bg-white/40 py-2.5 xl:px-5 md:px-4 px-3 focus:outline-none text-white md:min-w-sm"
        >
          <option value="" className="text-gray-600">
            Select Class
          </option>
          <option value="Class I" className="text-gray-600">
            Class I
          </option>
          <option value="Class II" className="text-gray-600">
            Class II
          </option>
          <option value="Class III" className="text-gray-600">
            Class III
          </option>
          <option value="Class IV" className="text-gray-600">
            Class IV
          </option>
          <option value="Class V" className="text-gray-600">
            Class V
          </option>
          <option value="Class VI" className="text-gray-600">
            Class VI
          </option>
          <option value="Class VII" className="text-gray-600">
            Class VII
          </option>
          <option value="Class VIII" className="text-gray-600">
            Class VIII
          </option>
          <option value="Class IX" className="text-gray-600">
            Class IX
          </option>
          <option value="Class X" className="text-gray-600">
            Class X
          </option>
          <option value="Class XI" className="text-gray-600">
            Class XI
          </option>
          <option value="Class XII" className="text-gray-600">
            Class XII
          </option>
        </select>
        <textarea
          name="message"
          rows={5}
          placeholder="Message"
          className="rounded-[20px] rounded-bl-none placeholder:text-white text-base bg-white/40 py-2.5 xl:px-5 md:px-4 px-3 focus:outline-none text-white md:min-w-sm resize-none"
        ></textarea>
        <button
          type="submit"
          className="text-white bg-site-secondary rounded-full shadow-site-primary font-semibold py-2.5 w-1/2 transition-colors duration-500 self-center"
        >
          Enroll Now
        </button>
      </form>
    </div>
  );
}
