import React from "react";

const CertificateSection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-5 md:flex-row md:gap-0">
        {/* Rasm */}
        <div className="flex-1">
          <img
            src="https://static.tildacdn.one/tild6538-6636-4764-a134-623364643030/92222.jpg"
            alt="JCTrans Certificate"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Matn */}
        <div className="flex-1 md:pl-10">
          <h2 className="mb-5 text-3xl font-bold text-neutral-900 md:text-5xl">
            JCTrans Certificate
          </h2>
          <p className="max-w-[500px] text-base leading-relaxed text-neutral-900">
            Our company provides reliable and high‑quality cargo transportation
            at any distance. For our clients, we offer only the best transport
            solutions, and we also guarantee the safety of your cargo.
            Reliability and quality are the main principles of our work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
