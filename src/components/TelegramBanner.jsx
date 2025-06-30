import React from "react";

const TelegramBanner = () => {
  return (
    <section className="py-16 bg-[#331f61] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row justify-between items-center relative">
        {/* Banner Content */}
        <div className="max-w-2xl z-[2] text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="text-2xl sm:text-[25px] md:text-[30px] text-white font-semibold leading-snug mb-8 font-sans">
            Subscribe to news in our Telegram channel
          </h2>
          <a
            href="https://t.me/M_Odiljonov001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#ff131a] text-white font-semibold rounded-xl hover:bg-[#d90007] transition-colors duration-200 text-base sm:text-[16px]"
          >
            Subscribe
          </a>
        </div>

        {/* Telegram Icon */}
        <div className="lg:absolute lg:right-5 relative lg:w-[240px] md:w-[200px] w-[150px] sm:w-[150px] z-[1] animate-zoomIn">
          <img
            src="https://static.tildacdn.one/tild6435-3961-4035-a437-613462303030/Group_19.svg"
            alt="Telegram Icon"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-zoomIn {
          animation: zoomIn 1.3s ease 0.2s both;
        }
      `}</style>
    </section>
  );
};

export default TelegramBanner;
