// app/strongsight/page.jsx

import "./strongsightPage.module.css";
import Image from "next/image";

export default function StrongSightPage() {
  return (
    <main className="strongsight-page">
      {/* HERO */}
      <section className="hero-section">
        <h1 className="title">StrongSight</h1>
        <h2 className="subtitle">UCF Senior Design Project</h2>
      </section>

      {/* PROJECT DESCRIPTION */}
      <section className="description-section">
        <div className="logo-wrapper">
          <Image
            src="/images/strongsight-logo.png"
            alt="StrongSight Logo"
            width={180}
            height={180}
            className="logo"
          />
        </div>

        <div className="description-card">
          <h3>Project Description</h3>

          <p>
            StrongSight is a fitness tracking and analytics platform designed to
            help users monitor workouts, visualize progress, and build better
            training habits through intuitive data insights and personalized
            exercise tracking.
          </p>

          <p>
            The application was developed as a UCF Senior Design project using a
            modern full-stack architecture. Features include workout logging,
            exercise analytics, progress graphs, authentication systems, and a
            responsive cross-platform interface.
          </p>
        </div>

        <div className="logo-wrapper">
          <Image
            src="/images/strongsight-logo.png"
            alt="StrongSight Logo"
            width={180}
            height={180}
            className="logo"
          />
        </div>
      </section>

      {/* DEMO VIDEO */}
      <section className="video-section">
        <h3>Project Demo</h3>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="StrongSight Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="documents-section">
        <div className="document-card">
          <h3>Slide Presentation</h3>

          <iframe
            src="/documents/StrongSightPresentation.pdf"
            title="StrongSight Presentation"
            className="document-frame"
          />

          <a
            href="/documents/StrongSightPresentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="document-button"
          >
            Open Presentation
          </a>
        </div>

        <div className="document-card">
          <h3>Project Report</h3>

          <iframe
            src="/documents/StrongSightReport.pdf"
            title="StrongSight Report"
            className="document-frame"
          />

          <a
            href="/documents/StrongSightReport.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="document-button"
          >
            Open Report
          </a>
        </div>
      </section>
    </main>
  );
}