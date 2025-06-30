import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CertificateSection = () => {
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
    hidden: { x: -50, opacity: 0 },
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
    <section className="py-16 bg-gray-50" id="certificates">
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.div
          className="flex flex-col items-center gap-10 md:flex-row md:gap-0"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Image */}
          <motion.div className="flex-1" variants={imageItem}>
            <motion.img
              src="ser.jpg"
              alt={t("certificate.imageAlt")}
              className="w-full rounded-lg object-cover shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Text */}
          <motion.div className="flex-1 md:pl-10" variants={container}>
            <motion.h2
              className="mb-5 text-3xl font-bold text-neutral-900 md:text-5xl"
              variants={textItem}
            >
              {t("certificate.title")}
            </motion.h2>

            <motion.p
              className="mb-4 text-base leading-relaxed text-neutral-900"
              variants={textItem}
            >
              {t("certificate.paragraph1")}
            </motion.p>

            <motion.ul
              className="mb-4 list-inside list-disc space-y-2 text-base text-neutral-900"
              variants={textItem}
              transition={{ delay: 0.2 }}
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <li key={item}>{t(`certificate.service${item}`)}</li>
              ))}
            </motion.ul>

            {/* <motion.p
              className="text-base font-medium leading-relaxed text-neutral-900"
              variants={textItem}
              transition={{ delay: 0.3 }}
            >
              {t("certificate.paragraph2")}
            </motion.p> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;
