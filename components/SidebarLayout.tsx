'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const shouldHideSidebar = pathname.startsWith('/projects/') && pathname !== '/projects';

  {/*Closes Sidebar if link clicked*/}
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false); 
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="portfolio-layout">
      {/* Sidebar Toggle button*/}
      <button
        className="menu-toggle"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <img src="/photo1.jpg" alt="Profile" className="profile-img" />
        <h2>Yoendry Ferro Santizo</h2>
        <p>Hi, I’m Yoendry, an aspiring software engineer. Welcome to my website</p>
        <div className="nav-links">
          <a href="#top" onClick={handleLinkClick}>Intro</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#resume" onClick={handleLinkClick}>Resume</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
          <a href="#Education" onClick={handleLinkClick}>Education</a>
          <a href="#Skills" onClick={handleLinkClick}>Skills</a>
          <a href="#Experiences/Extracurriculars" onClick={handleLinkClick}>Experiences</a>
          <a href="#bio" onClick={handleLinkClick}>Bio</a>
        </div>
        <div className="social-links">
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          <a href="https://github.com" target="_blank">GitHub</a>
        </div>
      </aside>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
