// export default function resume() {
//   return (
//     <div style={{ 
//       overflow: 'hidden',
//       overflowY: 'hidden',
//       width: '600px', 
//       height: '841px',
//       position: 'absolute',
//       pointerEvents: 'none'
//     }}>
//       <iframe 
//         src="/sample.pdf"
//         style={{
//           border: 'none',
//           position: 'absolute',
//           top: '-60px',
//           bottom: '500px',
//           left: '-400px',
//           width: '1399px',
//           height: '1300px'
//         }}
//       />
//     </div>
    
//   );
// }
import PDFViewer from '@/components/PdfViewer';

const Home: React.FC = () => {
  return (
    <div className=''>
      <PDFViewer pdfUrl="/sample.pdf" />
    </div>
  );
};

export default Home;
