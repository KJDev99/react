import React from "react";

const MissionSection = () => {
  return (
    <section
      className="relative flex h-[70vh] items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat text-center"
      style={{
        backgroundImage:
          "url('https://static.tildacdn.one/tild3862-3666-4339-a537-613033663730/multimodal2_copy.jpg')",
        backgroundPosition: "center bottom",
      }}
    >
      {/* Qorong'u overlay */}
      <div className="absolute inset-0 bg-[#331f61] opacity-50"></div>

      {/* Kontent */}
      <div className="relative z-10 max-w-3xl px-5 text-white animate-fadeInUp">
        <h2 className="mb-5 text-3xl font-bold md:text-5xl">Our Mission</h2>
        <div className="mx-auto mb-5 h-[2px] w-[100px] bg-white" />
        <p className="text-base leading-relaxed md:text-lg">
          Our main goal is to provide the best logistics services and guarantee
          the best quality of these services.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
