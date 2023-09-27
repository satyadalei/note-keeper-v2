"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Provider } from 'react-redux'
import store from "../store/store"
const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  weight : ["400", "600"],
  subsets : ["latin"]
})

export const metadata: Metadata = {
  title: 'Note keeper web app',
  description: 'This app helps to create & organize notes.',
  keywords : ["note","online note keeper app", "note keeper online"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      {/* -- Redux provider -- */}
      <Provider store={store}>
        <Navbar/>
        {children}
      </Provider>
      </body>
    </html>
  )
}
