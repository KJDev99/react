import React, { useState, useEffect } from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] pt-[105px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[1]"
        style={{
          backgroundImage:
            "url('https://static.tildacdn.one/tild6331-6266-4535-b138-373665616435/2017-03-24-12-30-35_.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(51,31,97,0.4)] to-[rgba(26,9,64,0.7)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-[2] flex max-w-[1200px] mx-auto px-5 h-full items-center lg:flex-row flex-col lg:justify-start justify-center lg:pt-0 pt-[75px] pb-[75px]">
        {/* Text Content */}
        <div className="lg:flex-1 lg:pr-10 lg:mb-0 mb-10 text-white lg:text-left text-center animate-fadeInUp">
          <h1 className="font-bold lg:text-[48px] md:text-[36px] text-[28px] leading-tight mb-5 font-sans">
            Freight
            <br className="lg:block hidden" />
            forwarding company
            <br className="lg:block hidden" />
            in Uzbekistan
          </h1>
          <p className=" md:text-[20px] text-[18px] leading-normal opacity-90 animate-fadeInUp animation-delay-300">
            We optimize and organize cargo transportation of any complexity for
            your business
          </p>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[2] animate-bounce">
        <svg viewBox="0 0 38.417 18.592" width="20" height="10">
          <path
            d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"
            fill="white"
          />
        </svg>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes lightEffect {
          20% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-lightEffect {
          animation: lightEffect 4s ease infinite;
        }
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-20px) translateX(-50%);
          }
          60% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
