import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const DeliverySection = () => {
  const { t } = useTranslation();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const countries = [
    { name: "China", key: "china" },
    { name: "Russia", key: "russia" },
    { name: "Lithuania", key: "lithuania" },
    { name: "Spain", key: "spain" },
    { name: "France", key: "france" },
    { name: "Italy", key: "italy" },
    { name: "Latvia", key: "latvia" },
    { name: "Belarus", key: "belarus" },
    { name: "Georgia", key: "georgia" },
    { name: "Great Britain", key: "uk" },
    { name: "Germany", key: "germany" },
    { name: "Türkiye", key: "turkey" },
  ];

  const getCountryImage = (key) => {
    return `https://static.tildacdn.one/tild${t(
      `countries.${key}.imgCode`
    )}/photo.png`;
  };

  return (
    <section className="bg-white py-16 pb-8" id="countries">
      {/* Header */}
      <motion.div
        className="mx-auto mb-14 max-w-3xl px-5 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="mb-5 text-3xl font-bold text-[#222] sm:text-4xl">
          {t("delivery.title")}
        </h2>
        <p className="text-lg leading-relaxed text-[#555]">
          {t("delivery.subtitle")}
        </p>
      </motion.div>

      {/* Countries Grid */}
      <motion.div
        className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-5 px-5"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {countries.map((country, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[calc(25%-40px)] text-center max-md:max-w-[calc(50%-40px)]"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mx-auto mb-4 h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-gray-100 shadow-sm max-md:h-20 max-md:w-20">
              <motion.img
                src={getCountryImage(country.key)}
                alt={t(`countries.${country.key}.name`)}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <h3 className="text-lg font-semibold text-[#222]">
              {t(`countries.${country.key}.name`)}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DeliverySection;
