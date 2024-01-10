import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jules BOBEUF',
  description: 'Java Developer@IBM and Student in Information Technology',
  icons: '/favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:mx-16 md:mx-28 l:mx-56 bg-gray-900">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
