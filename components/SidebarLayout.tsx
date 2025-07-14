'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="portfolio-layout">
      {/* Toggle button (shows only on small screens) */}
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-top">
          <h2>Yoendry Ferro Santizo</h2>
          <div className="profile-img-wrapper">
            <Image src="/photo1.jpg" alt="Profile" width={100} height={100} className="profile-img" />
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
          <a href="https://linkedin.com/in/yoendryferro">LinkedIn</a>
          <a href="https://github.com/yoendryf">GitHub</a>
        </div>
      </aside>

      <main className="main-content">{children}</main>
    </div>
  );
}
