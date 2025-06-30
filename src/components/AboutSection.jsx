import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
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

  const textItem = {
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

  const imageItem = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          className="flex flex-col md:flex-row"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="md:flex-1 md:pr-10 mb-10 md:mb-0"
            variants={container}
          >
            <motion.h2
              className="text-4xl md:text-[46px] font-bold mb-5 text-gray-900"
              variants={textItem}
            >
              {t("about.title")}
            </motion.h2>

            <motion.div
              className="w-24 h-0.5 bg-[#331f61] my-5"
              variants={textItem}
            />

            <motion.p
              className="text-base max-w-[500px] leading-relaxed text-gray-700"
              variants={textItem}
            >
              {t("about.paragraph1")}
            </motion.p>

            <motion.p
              className="text-base max-w-[500px] leading-relaxed text-gray-700 mt-4"
              variants={textItem}
              transition={{ delay: 0.2 }}
            >
              {t("about.paragraph2")}
            </motion.p>

            <motion.p
              className="text-base max-w-[500px] leading-relaxed text-gray-700 mt-4 font-medium"
              variants={textItem}
              transition={{ delay: 0.3 }}
            >
              {t("certificate.paragraph2")}
            </motion.p>
          </motion.div>

          <motion.div className="md:flex-1" variants={imageItem}>
            <motion.img
              src="https://static.tildacdn.one/tild6133-6366-4632-b766-376664336432/d313.jpg"
              alt={t("about.imageAlt")}
              className="w-full h-[60vh] object-cover rounded-lg shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
