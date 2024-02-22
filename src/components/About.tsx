import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="text-white px-6 md:px-12">
        <h2 className="text-center text-xl md:text-3xl font-bold mb-20 mt-0">Hey, Rizky here. Glad to make your acquaintance.</h2>

        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="bg-transparent rounded-lg shadow-lg px-5 py-6 sm:px-6 my-10 w-full max-w-3xl mx-auto border blur-background2 mt-0">
            <h2 className="text-2xl font-semibold text-white mb-6">About Me</h2>
            <div className="space-y-6">
              <div className="text-gray-200">
                <p>
                  I&apos;m interested in computer science, IT world and programming, coding for spatial data, sightseeing, and documentaries. Please don't hesitate to contact me for opportunities and potential collaborations in the world of
                  mapping and also development of web and mobile-based spatial data projects.
                  <br />
                  My experience as a GIS technician and GIS Developer with a demonstrated history of more than 6 years working in the mapping and surveying industry.
                </p>
              </div>
              <h3 className="text-xl font-semibold text-white">Software & Languages</h3>
              <div className="flex justify-between items-end">
                <ul className="list-disc pl-5 text-gray-400">
                  <li>ArcGIS</li>
                  <li>QGIS</li>
                  <li>Global Mapper</li>
                  <li>AutoCAD</li>
                  <li>JavaScript</li>
                  <li>HTML / CSS</li>
                  <li>PHP</li>
                </ul>
                <button className="bg-transparent border hover:bg-white hover:text-black font-bold py-2 px-4 rounded hover:border-none">
                  <Link href="https://drive.google.com/file/d/1Z18hQceeN0yhaftkBce2sUKzok7WZfLg/view?usp=sharing" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      Resume
                    </a>
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
