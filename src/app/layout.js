import './globals.css'

export const metadata = {
  title: 'Event & Exhibition | Premium Event Management',
  description: 'We create unforgettable events, spectacular exhibitions, and grand stage setups tailored to your vision.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
