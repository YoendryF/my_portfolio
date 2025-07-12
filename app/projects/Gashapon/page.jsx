import styles from './GashaponPage.module.css';

export default function GashaponPage() {
  return (
    <main className={styles.gashaponMain}>
      <h1 className={styles.heading}>GachaBot: Smart Gachapon robot</h1>

      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/O0Argb7OCwQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className={styles.TechUsed}>Technologies Used</h2>
      <ul className={styles.techList}>
        <li>C++</li>
        <li>Arduino</li>
        <li>Coin Counter</li>
        <li>CAD</li>
        <li>Bamboo Labs 3D Printer</li>
      </ul>

      <div className={styles.hardwareSoftwareGrid}>
        <div className={styles.hardwareSection}>
          <h2>Hardware/Design</h2>
          <ul>
            <li>Release Mechanism</li>
            <li>Capsules</li>
            <li>Frame</li>
            <li>Screen</li>
            <li>Capsule Slide</li>
            <li>Coin Acceptor</li>
          </ul>
        </div>

        <div className={styles.softwareSection}>
          <h2>Software/Algorithm</h2>
          <ul>
            <li>Call Out Behavior</li>
            <li>Expressions</li>
            <li>Sounds</li>
          </ul>
        </div>
      </div>

      <div className={styles.coinAndArmsWrapper}>
        <div className={styles.leftArm}>
          <a href="/path-to-your-report.pdf" target="_blank" rel="noopener noreferrer">
            📄 View Report
          </a>
        </div>

        <div className={styles.CoinAccept}>
          <img src="/CoinAccept.png" alt="Robot Coin Acceptor" />
        </div>

        <div className={styles.rightArm}>
          <a href="/path-to-your-presentation.pdf" target="_blank" rel="noopener noreferrer">
            📊 View Slides
          </a>
        </div>
      </div>
    </main>
  );
}
