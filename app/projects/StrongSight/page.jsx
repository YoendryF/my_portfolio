// app/strongsight/page.tsx

import styles from "./StrongSightPage.module.css";
import Image from "next/image";

export default function StrongSightPage() {
  return (
    <main className={styles.strongsightPage}>
      <div className={styles.pageContent}>
        {/* HERO */}
        <section className={styles.heroSection}>
          <h1 className={styles.title}>StrongSight</h1>

          <h2 className={styles.subtitle}>
            UCF Senior Design Project
          </h2>
        </section>

        {/* PROJECT DESCRIPTION */}
        <section className={styles.descriptionSection}>
          <div className={styles.logoWrapper}>
            <Image
              src="/StrongSightLogo.png"
              alt="StrongSight Logo"
              width={220}
              height={220}
              className={styles.logo}
            />
          </div>

          <div className={styles.descriptionCard}>
            <h3>Project Description</h3>

            <p>
              StrongSight is a fitness tracking and analytics platform
              designed to help users monitor workouts, visualize progress,
              and build better training habits through intuitive data
              insights and personalized exercise tracking.
            </p>

            <p>
              The application was developed as a UCF Senior Design project
              using a modern full-stack architecture. Features include
              workout logging, exercise analytics, progress graphs,
              authentication systems, and a responsive cross-platform
              interface.
            </p>
          </div>

          <div className={styles.logoWrapper}>
            <Image
              src="/StrongSightLogo.png"
              alt="StrongSight Logo"
              width={220}
              height={220}
              className={styles.logo}
            />
          </div>
        </section>

        {/* DEMO VIDEO */}
        <section className={styles.videoSection}>
          <h3>Project Demo</h3>

          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="StrongSight Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* DOCUMENTS */}
        <section className={styles.documentsSection}>
          {/* PRESENTATION */}
          <div className={styles.documentCard}>
            <h3>Slide Presentation</h3>

            <iframe
              src="/documents/StrongSightPresentation.pdf"
              title="StrongSight Presentation"
              className={styles.documentFrame}
            />

            <a
              href="/documents/StrongSightPresentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.documentButton}
            >
              Open Presentation
            </a>
          </div>

          {/* REPORT */}
          <div className={styles.documentCard}>
            <h3>Project Report</h3>

            <iframe
              src="/documents/StrongSightReport.pdf"
              title="StrongSight Report"
              className={styles.documentFrame}
            />

            <a
              href="/documents/StrongSightReport.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.documentButton}
            >
              Open Report
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}