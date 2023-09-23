import './globals.css'

// export const metadata = {
//   title: "iNoah",
//   description: 'Welcome to my portfolio!',
//   openGraph: {
//     title: 'iNoah',
//     description: 'Welcome to my portfolio!',
//     siteName: 'inoah.dev',
//     images: [
//       {
//         url: "/screenshot.png"
//       }
//     ],
//     locale: 'en-GB',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'iNoah',
//     description: 'Welcome to my portfolio!',
//     creator: '@NoxhDevs',
//     images: ['/screenshot.png'],
//   },
//   category: 'technology',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
