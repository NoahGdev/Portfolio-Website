import React from 'react';
import Link from 'next/link';
import { ButtonLink } from './Scroller';

const Hero: React.FC = () => {
  return (
    <div id='hero' className="relative h-screen flex items-center justify-center hdr">
      <svg className="absolute left-0 top-0 right-99 z-[-1]" viewBox="0 0 800 800">
        <defs>
            <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="73" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
            </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
            <ellipse rx="127.5" ry="184.5" cx="58.48854527148316" cy="363.1451261127883" fill="hsla(286, 59%, 10%, 1.00)"></ellipse>
        </g>
      </svg>
      <div className="text-center text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className='animated-gradient'>Welcome to my porftolio! </span>👋</h1>
        <p className="text-xl md:text-2xl mb-8">
          This website is for me to showcase my previous projects and achievements, hope you enjoy your stay!
          <p>
            This website was created using <span className=''>Next.js 13</span> and <span>Taliwindcss</span>
          </p>
        </p>
        <div className="flex justify-center space-x-4">
          <ButtonLink className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-100" buttonText='Previous Work' elementId='previouswork'/>
          <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-blue-600">
            <Link href='https://resume.io/r/kpSyznSzv' target='_blank'>
              Resume
            </Link>
          </button>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <span className="scroll-indicator block h-6 w-4 rounded-full bg-transparent border ml-6"></span>
      </div>
    </div>
  );
};

export default Hero;
