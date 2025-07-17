// app/layout.tsx
'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isKingdomPage, setIsKingdomPage] = useState(false);

  useEffect(() => {
    setIsKingdomPage(pathname.includes('/projects/KingdomOfGreed'));
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body
        className={isKingdomPage ? 'override-kingdom' : ''}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
