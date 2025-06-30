import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaPhone,
  FaEnvelope,
  FaTelegram,
  FaChevronDown,
  FaTimes,
  FaBars,
  FaInstagram,
} from "react-icons/fa";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languages = [
    { code: "uz", label: "O'zbek" },
    { code: "ru", label: "Русский" },
    { code: "en", label: "English" },
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isLanguageOpen) setIsLanguageOpen(false);
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header balandligiga moslab oling
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  // Close mobile menu when clicking a link
  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (window.innerWidth <= 980) {
      setIsMenuOpen(false);
      // Kichik kechikish qo'shamiz, animatsiya tugashiga vaqt berish uchun
      setTimeout(() => {
        scrollToSection(item);
      }, 300); // Bu vaqt menyu yopilish animatsiyasiga mos kelishi kerak
    } else {
      scrollToSection(item);
    }
  };
  // Change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
    if (window.innerWidth <= 980) {
      setIsMenuOpen(false);
    }
  };

  // Highlight active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageOpen && !event.target.closest(".language-selector")) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLanguageOpen]);

  // Menu items
  const menuItems = [
    "services",
    "about",
    // "partners",
    "certificates",
    "countries",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 lg:hidden">
          <div className="flex items-center">
            <a href="/">
              <img
                src="/logo.svg"
                className="max-w-[100px] h-[60px]"
                alt="RAM Trans Group Logo"
                width="100"
              />
            </a>
          </div>

          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#331f61]"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6 text-[#331f61]" />
            ) : (
              <FaBars className="h-6 w-6 text-[#331f61]" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-between items-center h-20">
          <a href="/">
            <motion.img
              src="logo.svg"
              className="max-w-[80px] h-auto"
              alt="RAM Trans Group Logo"
              width="100"
              whileHover={{ scale: 1.05 }}
            />
          </a>

          <ul className="flex list-none m-0 p-0">
            {menuItems.map((item) => (
              <li key={item} className="px-3">
                <motion.a
                  href={`#${item}`}
                  className={`block py-2 px-3 text-black no-underline font-medium text-base transition-colors duration-300 hover:text-[#ff131a] ${
                    activeSection === item ? "text-[#331f61] font-semibold" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {t(`menu.${item}`)}
                </motion.a>
              </li>
            ))}
            <li className="px-3">
              <motion.a
                href="https://t.me/M_Odiljonov001"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 text-black no-underline font-medium text-base transition-colors duration-300 hover:text-[#ff131a]"
                whileHover={{ scale: 1.05 }}
              >
                {t("menu.news")}
              </motion.a>
            </li>
          </ul>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <motion.a
                href="tel:+998990669638"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
                aria-label="Phone"
                whileHover={{ scale: 1.1 }}
              >
                <FaPhone className="h-5 w-5 text-[#331f61]" />
              </motion.a>
              <motion.a
                href="mailto:abrorodiljonovich.2009@gmail.com"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
                aria-label="Email"
                whileHover={{ scale: 1.1 }}
              >
                <FaEnvelope className="h-5 w-5 text-[#331f61]" />
              </motion.a>
              <motion.a
                href="https://t.me/M_Odiljonov001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
                aria-label="Telegram"
                whileHover={{ scale: 1.1 }}
              >
                <FaTelegram className="h-5 w-5 text-[#331f61]" />
              </motion.a>
              <motion.a
                href="https://instagram.com/ramtransgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram className="h-5 w-5 text-[#331f61]" />
              </motion.a>
            </div>

            <div className="relative language-selector">
              <motion.button
                className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium">
                  {languages.find((l) => l.code === i18n.language)?.label}
                </span>
                <FaChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          i18n.language === lang.code
                            ? "bg-gray-100 font-medium"
                            : ""
                        }`}
                        onClick={() => changeLanguage(lang.code)}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white overflow-hidden"
            >
              <div className="flex flex-col items-center py-6">
                <ul className="w-full px-4 space-y-4">
                  {menuItems.map((item) => (
                    <motion.li
                      key={`mobile-${item}`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href={`#${item}`}
                        onClick={(e) => handleNavClick(e, item)}
                        className={`block py-3 px-4 text-lg font-medium rounded-md transition-colors ${
                          activeSection === item
                            ? "bg-[#331f61] text-white"
                            : "text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        {t(`menu.${item}`)}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <a
                      href="https://t.me/M_Odiljonov001"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleNavClick}
                      className="block py-3 px-4 text-lg font-medium text-gray-800 rounded-md hover:bg-gray-100"
                    >
                      {t("menu.news")}
                    </a>
                  </motion.li>
                </ul>

                <div className="w-full px-4 mt-8">
                  <div className="flex justify-center gap-4 mb-6">
                    <motion.a
                      href="tel:+998990669638"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100"
                      aria-label="Phone"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaPhone className="h-6 w-6 text-[#331f61]" />
                    </motion.a>
                    <motion.a
                      href="mailto:abrorodiljonovich.2009@gmail.com"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100"
                      aria-label="Email"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaEnvelope className="h-6 w-6 text-[#331f61]" />
                    </motion.a>
                    <motion.a
                      href="https://t.me/M_Odiljonov001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100"
                      aria-label="Telegram"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaTelegram className="h-6 w-6 text-[#331f61]" />
                    </motion.a>
                    <motion.a
                      href="https://instagram.com/ramtransgroup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100"
                      aria-label="LinkedIn"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaInstagram className="h-6 w-6 text-[#331f61]" />
                    </motion.a>
                  </div>

                  <div className="flex justify-center gap-4">
                    {languages.map((lang) => (
                      <motion.button
                        key={`mobile-lang-${lang.code}`}
                        className={`px-4 py-2 rounded-md ${
                          i18n.language === lang.code
                            ? "bg-[#331f61] text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                        onClick={() => changeLanguage(lang.code)}
                        whileHover={{ scale: 1.05 }}
                      >
                        {lang.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
