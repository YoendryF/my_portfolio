// components/SidebarLayout.tsx
'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

export default function SidebarLayout({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="portfolio-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <h2>Yoendry Ferro Santizo</h2>
          <div className="profile-img-wrapper">
            <Image
              src="/photo1.jpg"
              alt="Yoendry's Photo"
              width={100}
              height={100}
              className="profile-img"
            />
          </div>
          <p>Hi, I’m Yoendry, an aspiring software engineer. Welcome to my website</p>
        </div>

        <nav className="nav-links">
          <a href="#top">Intro</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
          <a href="#Education">Education</a>
          <a href="#Skills">Skills</a>
          <a href="#Experiences/Extracurriculars">Experiences</a>
          <a href="#bio">Bio</a>
        </nav>

        <div className="social-links">
          <a href="https://linkedin.com/in/yoendryferro" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/yoendryf" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
