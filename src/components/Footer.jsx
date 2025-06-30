import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

const Footer = () => {
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

  const socialLinks = [
    {
      icon: <FiPhone size={20} />,
      href: "tel:+998990669638",
      label: "Phone",
    },
    {
      icon: <FiMail size={20} />,
      href: "mailto:abrorodiljonovich.2009@gmail.com",
      label: "Email",
    },
    {
      icon: <FaTelegramPlane size={20} />,
      href: "https://t.me/M_Odiljonov001",
      label: "Telegram",
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://instagram.com/ramtransgroup",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-[#331f61] text-white py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.div
          className="flex flex-wrap justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Logo & Social */}
          <motion.div className="w-full sm:w-[calc(25%-30px)]" variants={item}>
            <a href="/" className="inline-block mb-6">
              <img
                src="/logo.svg"
                alt={t("footer.logoAlt")}
                className="w-12 h-auto"
              />
            </a>
            <p className="mb-6 text-sm text-[#aa95d6]">{t("footer.tagline")}</p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-[#aa95d6] hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            className="w-full sm:w-[calc(25%-30px)]"
            variants={item}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiMapPin /> {t("footer.addressTitle")}
            </h4>
            <address className="not-italic text-base leading-relaxed">
              {t("footer.address")}
              <br />
              <div className="mt-3 flex items-start gap-2">
                <FiClock className="mt-1 flex-shrink-0" />
                <span>
                  <strong>{t("footer.hoursTitle")}:</strong>
                  <br />
                  {t("footer.hours")}
                </span>
              </div>
            </address>
          </motion.div>

          {/* Contacts */}
          <motion.div
            className="w-full sm:w-[calc(25%-30px)]"
            variants={item}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiPhone /> {t("footer.contactsTitle")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+998990669638"
                  className="flex items-center gap-2 hover:text-[#aa95d6] transition-colors"
                >
                  +998 99 066-96-38
                </a>
              </li>
              <li>
                <a
                  href="tel:+998933858385"
                  className="flex items-center gap-2 hover:text-[#aa95d6] transition-colors"
                >
                  +998 93 385-83-85
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Email */}
          <motion.div
            className="w-full sm:w-[calc(25%-30px)]"
            variants={item}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiMail /> {t("footer.emailTitle")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:abrorodiljonovich.2009@gmail.com"
                  className="flex items-center gap-2 hover:text-[#aa95d6] transition-colors"
                >
                  info@utitransit.uz
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-16 pt-6 border-t border-[#5a448d] text-center text-sm text-[#aa95d6]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>{t("footer.copyright")}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
