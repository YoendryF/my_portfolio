// com/SidebarLayout.tsx
'use client';

import { useState } from 'react';

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="portfolio-layout">
      <button
        className="menu-toggle"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <img src="/profile.jpg" alt="Profile" className="profile-img" />
        <h2>Yoendry Ferro</h2>
        <p>Software Engineer</p>
        <div className="nav-links">
          <a href="#intro">Intro</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </aside>

      <main className="main-content">{children}</main>
    </div>
  );
}
