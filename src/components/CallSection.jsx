import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaPhone, FaTimes } from "react-icons/fa";

const CallSection = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.querySelector(".call-modal");
      const button = document.querySelector(".call-button");

      if (isOpen && modal && !modal.contains(event.target)) {
        if (!button || !button.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="fixed bottom-5 right-5 z-50">
      {/* Call Button */}
      <motion.button
        className="call-button h-14 w-14 rounded-full bg-[#199c68] p-0 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        aria-label={t("call.callButton")}
      >
        <FaPhone className="mx-auto text-xl text-white" />
      </motion.button>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="call-modal absolute bottom-[calc(100%+15px)] right-0 w-72 rounded-lg bg-white shadow-xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative">
              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute -top-3 -right-3 z-10 rounded-full bg-white p-2 shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={t("call.closeButton")}
              >
                <FaTimes className="text-gray-600" />
              </motion.button>

              {/* Popup Content */}
              <div className="overflow-hidden rounded-lg">
                <div className="bg-[#199c68] p-4 text-white">
                  <h4 className="mb-1 text-lg font-semibold">
                    {t("call.title")}
                  </h4>
                  <p className="text-sm opacity-90">{t("call.workingHours")}</p>
                </div>

                <div className="p-4">
                  <a
                    href="tel:+998990669638"
                    className="flex items-center justify-center gap-2 text-xl font-bold text-[#199c68] hover:underline"
                  >
                    <FaPhone className="text-lg" />
                    +998 99 066-96-38
                  </a>

                  <div className="mt-4 flex justify-center gap-3">
                    <a
                      href="https://t.me/M_Odiljonov001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#199c68] text-white hover:bg-[#148155]"
                      aria-label="Telegram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                      </svg>
                    </a>
                    <a
                      href="tel:++998933858385"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#199c68] text-white hover:bg-[#148155]"
                      aria-label="WhatsApp"
                    >
                      <FaPhone className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CallSection;
