import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#331f61] text-white py-16">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-8 px-5">
        {/* Logo & Social */}
        <div className="w-full sm:w-[calc(25%-30px)]">
          <a href="/" className="inline-block mb-4">
            <img
              src="https://static.tildacdn.one/tild3861-3830-4139-b463-633434626266/photo.png"
              alt="Company Logo"
              className="w-[50px] h-auto"
            />
          </a>
          <div className="mt-5 flex gap-4">
            <a
              href="tel:+998781139997"
              aria-label="Phone"
              className="text-[#aa95d6] hover:scale-110 transition-transform"
            >
              <FiPhone size={24} />
            </a>
            <a
              href="mailto:info@utitransit.uz"
              aria-label="Email"
              className="text-[#aa95d6] hover:scale-110 transition-transform"
            >
              <FiMail size={24} />
            </a>
            <a
              href="https://t.me/utitransit_uz"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#aa95d6] hover:scale-110 transition-transform"
            >
              <FaTelegramPlane size={24} />
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="w-full sm:w-[calc(25%-30px)]">
          <h4 className="text-2xl mb-4">Address</h4>
          <p className="text-base leading-relaxed">
            Uzbekistan, Tashkent Yakkasaray st., 5<br />
            <strong>Working hours:</strong>
            <br />
            Mon-Fri (9:00–18:00)
          </p>
        </div>

        {/* Phone */}
        <div className="w-full sm:w-[calc(25%-30px)]">
          <h4 className="text-2xl mb-4">Phone</h4>
          <p className="text-base">
            <a
              href="tel:+998781139997"
              className="hover:text-[#aa95d6] transition"
            >
              +998 78 113‑99‑97
            </a>
          </p>
        </div>

        {/* Email */}
        <div className="w-full sm:w-[calc(25%-30px)]">
          <h4 className="text-2xl mb-4">E-mail</h4>
          <p className="text-base">
            <a
              href="mailto:info@utitransit.uz"
              className="hover:text-[#aa95d6] transition"
            >
              info@utitransit.uz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
