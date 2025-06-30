import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MapSection = () => {
  const { t } = useTranslation();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {t("map.title")}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#331f61]"></div>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="overflow-hidden rounded-xl shadow-xl"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative aspect-video w-full md:h-[560px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11992.50678723687!2d69.26310733863163!3d41.28434697867857!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sru!2s!4v1751314161842!5m2!1sru!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("map.iframeTitle")}
              className="absolute inset-0"
            ></iframe>
            {/* Contact Info Overlay (Desktop) */}
            <motion.div
              className="hidden md:flex absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-md max-w-xs"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t("map.officeTitle")}
                </h3>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">{t("map.addressLabel")}:</span>{" "}
                  {t("map.address")}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">{t("map.phoneLabel")}:</span>{" "}
                  {t("map.phone")}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">{t("map.hoursLabel")}:</span>{" "}
                  {t("map.hours")}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Info (Mobile) */}
        <motion.div
          className="mt-8 md:hidden bg-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {t("map.officeTitle")}
          </h3>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">{t("map.addressLabel")}:</span>{" "}
            {t("map.address")}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">{t("map.phoneLabel")}:</span>{" "}
            {t("map.phone")}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">{t("map.hoursLabel")}:</span>{" "}
            {t("map.hours")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
