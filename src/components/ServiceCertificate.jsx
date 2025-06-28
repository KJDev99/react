import React from "react";

const ServiceCertificate = () => {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="mx-auto flex max-w-[1200px] flex-col-reverse items-center gap-10 px-5 md:flex-row md:gap-0">
        {/* Matn qismi */}
        <div className="flex-1 md:pr-10">
          <h2 className="mb-5 text-3xl font-bold text-neutral-900 md:text-5xl">
            Service Certificate
          </h2>
          <p className="max-w-[500px] text-base leading-relaxed text-neutral-900">
            We confirm the high quality of our cargo transportation and
            compliance with the requirements of regulatory authorities. This is
            a great achievement and another step towards improving our services
            for our country's clients.
          </p>
        </div>

        {/* Rasm qismi */}
        <div className="flex-1">
          <img
            src="https://static.tildacdn.one/tild3537-3765-4466-a361-373161393937/91111.jpg"
            alt="Service Certificate"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCertificate;
