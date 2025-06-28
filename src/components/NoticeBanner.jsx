import React, { useState, useEffect } from "react";

const NoticeBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // In a real app, you would check cookies/localStorage here
    setIsVisible(true);
  }, []);

  const closeNotice = () => {
    setIsVisible(false);
    // In real app: set cookie/localStorage here
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-5 max-w-[400px] z-[1000]">
      <div className="relative p-5 bg-white rounded shadow-md">
        {/* Close button */}
        <button
          onClick={closeNotice}
          className="absolute p-1 cursor-pointer top-2 right-2"
          aria-label="Close notification"
        >
          <svg viewBox="0 0 23 23" width="10" height="10">
            <rect
              x="10.3"
              y="-3.7"
              width="2"
              height="30"
              transform="rotate(-45 11.3 11.3)"
              className="fill-[#331f61]"
            />
            <rect
              x="10.3"
              y="-3.7"
              width="2"
              height="30"
              transform="rotate(-315 11.3 11.3)"
              className="fill-[#331f61]"
            />
          </svg>
        </button>

        {/* Notice text */}
        <div className="mb-4 text-[13px] leading-snug">
          <strong className="text-[18px]">Important Notice!</strong>
          <br />
          <br />
          We work only with legal entities and specialize in delivering large
          freight. Parcels from individuals are not accepted.
        </div>

        {/* Action button */}
        <button
          onClick={closeNotice}
          className="
            px-4 py-2 text-white bg-[#331f61] rounded
            border-none cursor-pointer
            transition-colors duration-200 ease-in
            hover:bg-[#1f0e47]
          "
        >
          Got It! Close message.
        </button>
      </div>
    </div>
  );
};

export default NoticeBanner;
