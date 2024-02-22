import React from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import Link from "next/link";

const ContactCard: React.FC = () => {
  return (
    <div id="contact">
      <h2 className="text-2xl font-bold mb-2 text-center">Feel free to explore my social media channels listed below! ✨</h2>
      <div className="bg-transparent border p-8 rounded-lg shadow-lg text-white w-full md:max-w-4xl mx-auto mt-8 cc-bg blur-background w-4/5">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Rizky Ramdani</h2>
            <p className="text-sm mb-4">Mapping Maverick and Web GIS Enthusiast</p>
            <Link href="https://drive.google.com/file/d/1Z18hQceeN0yhaftkBce2sUKzok7WZfLg/view?usp=sharing" passHref>
              <button className="bg-inherit border text-purple-200 px-4 py-2 rounded shadow hover:bg-gray-100 hover:text-black transition-colors duration-200">Resume</button>
            </Link>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/XGamingTechnology" target="_blank" rel="noreferrer" className="hover:text-gray-200">
              <FaGithub size={44} />
            </a>
            <a href="https://www.linkedin.com/in/rizky-ramdani-a17b66119/" target="_blank" rel="noreferrer" className="hover:text-gray-200">
              <FaLinkedin size={44} />
            </a>
            <a href="https://discord.gg/3UgqRV8n" target="_blank" rel="noreferrer" className="hover:text-gray-200">
              <FaDiscord size={44} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
