'use client';

import { useState, useEffect } from 'react';

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on resize if desktop
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
        <img src="/profile.jpg" alt="Profile" className="profile-img" />
        <h2>Yoendry Ferro Santizo</h2>
        <p>Hi, I’m Yoendry, an aspiring software engineer. Welcome to my website</p>
        <div className="nav-links">
          <a href="#intro">Intro</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experiences">Experiences</a>
          <a href="#bio">Bio</a>
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
