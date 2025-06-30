import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      icon: "https://static.tildacdn.one/tild6661-6435-4637-b139-343266306237/ph_truck-fill.svg",
      key: "automobile",
    },
    {
      icon: "https://static.tildacdn.one/tild6632-3133-4664-b262-636161323431/mdi_airplane.svg",
      key: "aviation",
    },
    {
      icon: "https://static.tildacdn.one/tild6364-3664-4861-b232-653338653033/bxs_ship.svg",
      key: "sea",
    },
    {
      icon: "https://static.tildacdn.one/tild6339-3838-4336-a162-626331306436/mdi_transit-connecti.svg",
      key: "multimodal",
    },
    {
      icon: "https://static.tildacdn.one/tild3337-3231-4566-b235-313464636432/ic_baseline-train.svg",
      key: "rail",
    },
    {
      icon: "https://static.tildacdn.one/tild3933-3132-4136-a636-616334633430/bxs_package.svg",
      key: "combined",
    },
  ];

  return (
    <section className="py-16 bg-[#331f61]" id="services">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2
          className="text-4xl md:text-[46px] text-white text-center font-bold mb-24 md:mb-[90px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {t("services.title")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-5"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={service.icon}
                alt={t(`services.${service.key}`)}
                className="w-14 h-14 md:w-16 md:h-16"
              />
              <h3 className="text-white text-base uppercase font-sans m-0">
                {t(`services.${service.key}`)}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
