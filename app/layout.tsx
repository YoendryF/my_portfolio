// app/layout.tsx
import { ReactNode } from 'react'
import SidebarLayout from '../components/SidebarLayout';
import { usePathname } from 'next/navigation';
import '../styles/globals.css';


export const metadata = {
  title: 'My Portfolio',
  description: 'Created by Yoendry',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isKingdomPage = pathname === '/projects/KingdomOfGreed';
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className={isKingdomPage ? 'override-kingdom' : ''} style={{ fontFamily: 'Inter, sans-serif' }}>
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
