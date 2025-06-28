import React from "react";

const features = [
  {
    title: "Everything is on time",
    description: "Compliance with all terms of delivery of your cargo",
  },
  {
    title: "Peculiarity",
    description: "We provide the highest level of service and services",
  },
  {
    title: "Professionalism",
    description: "More than 5 years of experience in logistics in Uzbekistan",
  },
  {
    title: "Team",
    description: "17 professionals with extensive experience",
  },
  {
    title: "Experience",
    description: "More than 700 deliveries completed on time",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#331f61] py-16">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-8 px-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full text-center text-white sm:w-[calc(50%-40px)] md:w-[calc(33.333%-40px)]"
          >
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <div className="my-4 mx-auto h-[1px] w-[50px] bg-[#5a448d]"></div>
            <p className="text-base leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
