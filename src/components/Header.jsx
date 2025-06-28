import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
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

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-white shadow-md">
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 lg:hidden">
        <div className="flex items-center">
          <a href="/en">
            <img
              src="https://static.tildacdn.one/tild3261-6434-4238-a563-303262333536/UTI_logo.png"
              className="max-w-[100px] h-auto"
              alt="UTI Transit Logo"
              width="100"
            />
          </a>
        </div>

        <button
          className="relative h-5 p-0 bg-transparent border-none cursor-pointer w-7"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span
            className={`absolute block w-full h-0.5 bg-[#331f61] left-0 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "top-1/2 w-0 left-1/2" : "top-0"
            }`}
          ></span>
          <span
            className={`absolute block w-full h-0.5 bg-[#331f61] left-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45" : ""
            }`}
          ></span>
          <span
            className={`absolute block w-full h-0.5 bg-[#331f61] left-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45" : "top-full"
            }`}
          ></span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`lg:flex flex-col ${
          isMenuOpen
            ? "fixed top-0 left-0 w-full h-screen bg-white pt-[70px] overflow-y-auto translate-x-0"
            : "hidden"
        }`}
      >
        <div
          className={`lg:flex justify-between items-center px-8 py-4 h-20 ${
            isMenuOpen ? "flex-col p-5 h-auto" : ""
          }`}
        >
          <div
            className={`${
              isMenuOpen ? "flex justify-center mb-5" : "hidden lg:block"
            }`}
          >
            <a href="/en">
              <img
                src="https://static.tildacdn.one/tild3261-6434-4238-a563-303262333536/UTI_logo.png"
                className="max-w-[100px] h-auto"
                alt="UTI Transit Logo"
                width="100"
              />
            </a>
          </div>

          <ul
            className={`lg:flex list-none m-0 p-0 ${
              isMenuOpen ? "flex-col items-center my-5" : ""
            }`}
          >
            {["services", "about", "partners", "certificates", "countries"].map(
              (item) => (
                <li
                  key={item}
                  className={`lg:px-5 ${isMenuOpen ? "py-2" : ""}`}
                >
                  <a
                    href={`#${item}`}
                    onClick={handleNavClick}
                    className={`block text-black no-underline font-medium font-sans text-base transition-colors duration-300 hover:text-[#ff131a] ${
                      activeSection === item ? "text-[#331f61] font-medium" : ""
                    }`}
                  >
                    {item.charAt(0).toUpperCase() +
                      item.slice(1).replace(/([A-Z])/g, " $1")}
                  </a>
                </li>
              )
            )}
            <li className={`lg:px-5 ${isMenuOpen ? "py-2" : ""}`}>
              <a
                href="https://t.me/utitransit_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-black no-underline font-medium font-sans text-base transition-colors duration-300 hover:text-[#ff131a]"
              >
                News
              </a>
            </li>
          </ul>

          <div
            className={`lg:flex items-center ${
              isMenuOpen ? "flex-col gap-5" : ""
            }`}
          >
            <div
              className={`flex items-center ${
                isMenuOpen ? "justify-center" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <a
                  href="tel:+998781139997"
                  className="inline-flex w-7 h-7"
                  aria-label="Phone"
                >
                  <svg viewBox="0 0 100 100" width="30" height="30">
                    <path fill="#331f61" d="M50 100C77.6142 1" />
                  </svg>
                </a>
                <a
                  href="mailto:info@utitransit.uz"
                  className="inline-flex w-7 h-7"
                  aria-label="Email"
                >
                  <svg viewBox="0 0 100 100" width="30" height="30">
                    <path fill="#331f61" d="M50 100C77.6142" />
                  </svg>
                </a>
                <a
                  href="https://t.me/utitransit_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-7 h-7"
                  aria-label="Telegram"
                >
                  <svg viewBox="0 0 100 100" width="30" height="30">
                    <path fill="#331f61" d="M50 100c27.614 0 " />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/utitransit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-7 h-7"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 100 100" width="30" height="30">
                    <path fill="#331f61" d="M50 100c27.6142" />
                  </svg>
                </a>
              </div>
            </div>

            <div
              className={`text-right mx-5 ${
                isMenuOpen ? "text-center my-3" : ""
              }`}
            >
              <strong>
                <a
                  href="tel:+998781139997"
                  className="font-sans font-medium text-black no-underline"
                >
                  +998 78 113-99-97
                </a>
              </strong>
              <p className="mt-1 text-sm">Mon-Fri (09:00-18:00)</p>
            </div>

            <div className={`flex gap-3 ${isMenuOpen ? "justify-center" : ""}`}>
              <a
                href="/uz"
                className="font-sans text-base font-medium text-black no-underline"
              >
                O'zbek tilida
              </a>
              <a
                href="/ru"
                className="font-sans text-base font-medium text-black no-underline"
              >
                На русском
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Desktop only */}
        <div className="items-center justify-center hidden h-10 border-t border-gray-200 lg:flex">
          <ul className="flex p-0 m-0 list-none">
            {["services", "about", "partners", "certificates", "countries"].map(
              (item) => (
                <li key={`bottom-${item}`} className="px-5">
                  <a
                    href={`#${item}`}
                    className={`block text-black no-underline font-medium font-sans text-base transition-colors duration-300 hover:text-[#ff131a] ${
                      activeSection === item ? "text-[#331f61] font-medium" : ""
                    }`}
                  >
                    {item.charAt(0).toUpperCase() +
                      item.slice(1).replace(/([A-Z])/g, " $1")}
                  </a>
                </li>
              )
            )}
            <li className="px-5">
              <a
                href="https://t.me/utitransit_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-black no-underline font-medium font-sans text-base transition-colors duration-300 hover:text-[#ff131a]"
              >
                News
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
