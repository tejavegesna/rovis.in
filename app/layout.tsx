import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ROVIS Technologies - Android Development & AI Solutions',
  description: 'Transform your business with custom Android applications and AI solutions. Expert IT consulting, cloud computing, and digital transformation services.',
  keywords: 'Android development, AI solutions, cloud computing, IT consulting, digital transformation, mobile apps',
  authors: [{ name: 'ROVIS Technologies' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'ROVIS Technologies - Android Development & AI Solutions',
    description: 'Transform your business with custom Android applications and AI solutions.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
