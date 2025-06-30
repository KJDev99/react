import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MissionSection = () => {
  const { t } = useTranslation();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative flex h-[70vh] items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat text-center"
      style={{
        backgroundImage:
          "url('https://static.tildacdn.one/tild3862-3666-4339-a537-613033663730/multimodal2_copy.jpg')",
        backgroundPosition: "center bottom",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#331f61] opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-5 text-white"
        variants={container}
      >
        <motion.h2
          className="mb-5 text-3xl font-bold md:text-5xl"
          variants={item}
        >
          {t("mission.title")}
        </motion.h2>

        <motion.div
          className="mx-auto mb-5 h-[2px] w-[100px] bg-white"
          variants={item}
          transition={{ delay: 0.2 }}
        />

        <motion.p
          className="text-base leading-relaxed md:text-lg"
          variants={item}
          transition={{ delay: 0.4 }}
        >
          {t("mission.description")}
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default MissionSection;
