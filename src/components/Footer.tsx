import React from 'react';
import Link from 'next/link';
import { FaDiscord, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-6 mt-40 footer-b">
      <div className="container mx-auto px-6">
        <div className="md:flex md:justify-between md:items-center">
          <div className="text-2xl font-semibold mb-6 md:mb-0">
            iNoah
          </div>
          <div className="mb-6 md:mb-0 md:flex md:space-x-12">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-lg font-medium hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-medium hover:text-gray-300">
                  Previous Work
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-medium hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex space-x-6">
              <Link href="https://github.com/NoahGdev" target='_blank'>
                <FaGithub size={36}/>
              </Link>
              <Link href="https://www.linkedin.com/in/noah-gomes" target='_blank'>
                <FaLinkedin size={36}/>
              </Link>
              <Link href="https://discord.com/users/801636548218191893" target='_blank'>
                <FaDiscord size={36}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
