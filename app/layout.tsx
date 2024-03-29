import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import print from "./print.module.css";

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
        <div className={print.noprint}>
          <Navbar/>
        </div>
        <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-4 lg:p-8 mx-2 md:mx-20 lg:mx-40 bg-gray-900">
        {children}
        </main>
        <div className={print.noprint}>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
