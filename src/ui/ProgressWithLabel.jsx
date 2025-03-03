import { useEffect, useRef, useState } from "react";

export default function ProgressWithLabel({ label, value }) {
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setProgress(value); // Animate when in view
          // observer.disconnect(); // Stop observing once triggered
        } else {
          setProgress(0); // Reset progress when not in view
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the component is visible
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="flex flex-col gap-3" ref={progressRef}>
      <div className="flex justify-between">
        <h3 className="text-white xl:text-xl md:text-lg text-base">{label}</h3>
        <h4 className="text-white xl:text-xl md:text-lg text-base">{value}%</h4>
      </div>
      <div className="w-full bg-white h-2">
        <div
          className="bg-site-secondary h-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
