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

        <div className={styles.centerSection}>
          <div className={styles.leftArm}>
            <a href="/GashaponReport.pdf" target="_blank" rel="noopener noreferrer">
              View Report
            </a>
          </div>

          <div className={styles.CoinAccept}>
            <img src="/CoinAccept.png" alt="Robot Coin Acceptor" />
          </div>

          <div className={styles.rightArm}>
            <a href="/GashaponPresentation.pdf" target="_blank" rel="noopener noreferrer">
              View Slides
            </a>
          </div>
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
    <h2 className={styles.ProjectSummary}>Project Summary</h2>
    <p>An intelligent system is a machine that manipulates its environment to optimize its chances of success. In our Introduction to Robotics course, we were tasked with designing such a system. My team and I created a smart Gashapon robot, an interactive vending machine that plays music, displays expressions, and calls out to engage users. The robot is powered by an Arduino, which controls the physical components, while a C++ program manages the coin-based logic. A coin acceptor is calibrated to detect quarters. Each time a quarter is inserted, the system increases a coin counter and updates an hourly interaction array. For every coin added, the robot responds with a new facial expression and a sound to encourage continued engagement. After four quarters have been collected, a servo motor rotates a disk that holds capsules. A push sensor at the top of the mechanism checks whether a capsule has been successfully loaded. If not, the motor continues rotating until one is dispensed. The capsule then drops through the chute and slides down a ramp where the user can retrieve it. At the end of each day, the robot analyzes interaction data to find the two hours with the most user engagement. These hours are used as the next day’s "callout" times, during which the robot plays a friendly audio message, such as “Hey,” to attract attention and encourage interaction.</p>
    </main>
  );
}
