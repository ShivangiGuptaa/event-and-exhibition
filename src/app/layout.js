import './globals.css'

export const metadata = {
  title: 'Magic Touch Production | Event Management & Decoration',
  description: 'We create unforgettable events, spectacular exhibitions, wedding decorations, and grand stage setups tailored to your vision.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
