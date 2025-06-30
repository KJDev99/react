import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ServiceCertificate = () => {
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageItem = {
    hidden: { x: 20, opacity: 0 },
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
    <section className="py-16 bg-[#f9f9f9]">
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.div
          className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-0"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Text Content */}
          <motion.div className="flex-1 md:pr-10" variants={container}>
            <motion.h2
              className="mb-5 text-3xl font-bold text-neutral-900 md:text-5xl"
              variants={textItem}
            >
              {t("certificate1.title")}
            </motion.h2>

            <motion.p
              className="max-w-[500px] text-base leading-relaxed text-neutral-900"
              variants={textItem}
              transition={{ delay: 0.1 }}
            >
              {t("certificate1.description")}
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div className="flex-1" variants={imageItem}>
            <motion.img
              src="litsenziya.jpg"
              alt={t("certificate1.imageAlt")}
              className="w-full rounded-lg object-cover shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCertificate;
