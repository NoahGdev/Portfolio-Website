'use client';

// import React from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

// interface PDFViewerProps {
//   pdfUrl: string;
// }

// const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
//   return (
//     <>
//       <div className="w-full text-white text-center py-2">
//         <span className="text-2xl">iNoah</span>
//       </div>
//       <div className='scale-50 origin-top relative'>
//         <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js`}>
//           <Viewer theme={'dark'} fileUrl={pdfUrl} />
//         </Worker>
//       </div>
//     </>
//   );
// };

// export default PDFViewer;

import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  return (
    <>
      <div className="w-full text-white text-center py-2">
        <span className="text-2xl">iNoah</span>
      </div>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js`}>
        <Viewer theme={'dark'} fileUrl={pdfUrl} />
      </Worker>
    </>
  );
};

export default PDFViewer;


