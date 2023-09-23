import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="text-white px-6 md:px-12">
        <h2 className="text-center text-xl md:text-3xl font-bold mb-20 mt-0">Hi, my name is Noah</h2>

        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className="bg-transparent rounded-lg shadow-lg px-5 py-6 sm:px-6 my-10 w-full max-w-3xl mx-auto border blur-background2 mt-0">
                <h2 className="text-2xl font-semibold text-white mb-6">About Me</h2>
                <div className="space-y-6">
                    <p className="text-gray-200">
                        I&apos;m a 20 year old developer who started off as self-taught then went to Queen Mary university of London to study Computer Science and Mathematics.
                        I am in my second year at uni and have been coding for 3 years now. I code every single day and I enjoy learning new technologies, languages, and experiencing working with new
                        teams on new and cool projects.
                    </p>
                    <h3 className="text-xl font-semibold text-white">Languages & Frameworks</h3>
                    <div className="flex justify-between items-end">
                        <ul className="list-disc pl-5 text-gray-400">
                            <li>JavaScript / TypeScript</li>
                            <li>React / Next.js</li>
                            <li>Python / Flask</li>
                            <li>HTML / CSS / Tailwind CSS</li>
                        </ul>
                        <button className="bg-transparent border hover:bg-white hover:text-black font-bold py-2 px-4 rounded hover:border-none">
                            <Link href='https://resume.io/r/kpSyznSzv' target='_blank'>
                              Resume
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
