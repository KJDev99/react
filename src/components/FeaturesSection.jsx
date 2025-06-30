import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaClock,
  FaStar,
  FaUserTie,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const FeaturesSection = () => {
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: <FaClock className="text-3xl" />,
      key: "timeliness",
    },
    {
      icon: <FaStar className="text-3xl" />,
      key: "quality",
    },
    {
      icon: <FaUserTie className="text-3xl" />,
      key: "professionalism",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      key: "team",
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      key: "experience",
    },
  ];

  return (
    <section className="bg-[#331f61] py-16">
      <motion.div
        className="mx-auto max-w-[1200px] px-5"
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="w-full text-center text-white sm:w-[calc(50%-40px)] md:w-[calc(33.333%-40px)] lg:w-[calc(20%-40px)]"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center p-6 rounded-lg bg-[#3d2875] h-full">
                <motion.div
                  className="mb-4 text-[#a78bfa]"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(`features.${feature.key}.title`)}
                </h3>
                <div className="my-2 mx-auto h-[1px] w-[50px] bg-[#5a448d]"></div>
                <p className="text-base leading-relaxed">
                  {t(`features.${feature.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
