import React, { useState } from "react";

const CallSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-8">
      {/* Call Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-12 right-8 z-50 h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-[#199c68] bg-transparent p-0 transition hover:scale-105 active:scale-95 sm:bottom-5 sm:right-5"
      >
        <div className="h-full w-full overflow-hidden rounded-full">
          <img
            src="https://static.tildacdn.one/tild3261-3261-4935-a537-616631386339/da23.jpg"
            alt="Call"
            className="h-full w-full object-cover"
          />
        </div>
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed bottom-12 right-8 z-50 w-[300px] rounded-lg bg-white shadow-lg sm:bottom-5 sm:right-5 sm:w-[calc(100%-40px)]">
          <div className="relative">
            {/* Close Button */}
            <div className="flex justify-end p-2">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:scale-105"
              >
                <svg
                  viewBox="0 0 23 23"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M0 1.414 1.415 0l21.213 21.213-1.414 1.414z"
                    fill="#000"
                  />
                  <path
                    d="m21.213 0 1.414 1.415L1.414 22.628 0 21.214z"
                    fill="#000"
                  />
                </svg>
              </button>
            </div>

            {/* Popup Content */}
            <div className="flex flex-col px-5 pb-5">
              <div className="mb-4 h-[150px] w-full overflow-hidden rounded-md">
                <img
                  src="https://static.tildacdn.one/tild3261-3261-4935-a537-616631386339/da23.jpg"
                  alt="Call"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="mb-2 text-lg font-semibold">
                  Call to UTI-TRANSIT
                </h4>
                <p className="text-sm text-gray-600">
                  <strong>Working Hours:</strong> Mon-Fri (9:00–19:00)
                </p>
                <a
                  href="tel:+998781139997"
                  className="mt-4 block text-lg font-bold text-[#199c68]"
                >
                  +998 78 113‑99‑97
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CallSection;
