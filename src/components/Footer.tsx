import React from "react";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { ButtonLink } from "./Scroller";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-6 mt-40 footer-b">
      <div className="container mx-auto px-6">
        <div className="md:flex md:justify-between md:items-center">
          <div className="text-2xl font-semibold mb-6 md:mb-0">Designed By iNoah</div>
          <div className="mb-6 md:mb-0 md:flex md:space-x-12">
            <ul className="space-y-4">
              <li>
                <ButtonLink className="text-lg font-medium hover:text-gray-300" buttonText="Home" elementId="hero" />
              </li>
              <li>
                <ButtonLink className="text-lg font-medium hover:text-gray-300" buttonText="Previous Work" elementId="previouswork" />
              </li>
              <li>
                <ButtonLink className="text-lg font-medium hover:text-gray-300" buttonText="Contact" elementId="contact" />
              </li>
            </ul>
            <div className="flex space-x-6">
              <a href="https://github.com/XGamingTechnology" target="_blank" rel="noopener noreferrer">
                <FaGithub size={36} />
              </a>
              <a href="https://www.linkedin.com/in/rizky-ramdani-a17b66119/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={36} />
              </a>
              <a href="https://discord.gg/3UgqRV8n" target="_blank" rel="noopener noreferrer">
                <FaDiscord size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
