import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

const HeroSection = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  const arrowVariants = {
    bounce: {
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  // Handle scroll down
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight - 130,
      behavior: "smooth",
    });
  };

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
        <motion.div
          className="lg:flex-1 lg:pr-10 lg:mb-0 mb-10 text-white lg:text-left text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="font-bold lg:text-[48px] md:text-[36px] text-[28px] leading-tight mb-5 font-sans"
            variants={itemVariants}
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            className="md:text-[20px] text-[18px] leading-normal opacity-90"
            variants={itemVariants}
            transition={{ delay: 0.3 }}
          >
            {t("hero.subtitle")}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[2] cursor-pointer"
        onClick={handleScrollDown}
        variants={arrowVariants}
        animate="bounce"
        whileHover={{ scale: 1.2 }}
      >
        <FaChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
