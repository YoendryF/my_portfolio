// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'Created by Yoendry',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
