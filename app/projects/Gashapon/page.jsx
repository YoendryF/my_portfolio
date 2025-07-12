import styles from './GashaponPage.module.css';

export default function GashaponPage() {
    return (
      <main className={`${styles.gashaponMain}`}>
        <h1>Gachabot: Smart Gashabon robot</h1>
        
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




        <h2>Project Details</h2>

        <h2>Technologies Used</h2>
        <ul>
          <li>C++</li>
          <li>Arduino</li>
          <li>Coin Counter</li>
          <li>CAD</li>
          <li>Bamboo Labs 3D Printer</li>
        </ul>

        <h2>Hardware/Design</h2>
        <ul>
          <li>Release Mechanism</li>
          <li>Capsules</li>
          <li>Frame</li>
          <li>Screen</li>
          <li>Capsule Slide</li>
          <li>Coin Acceptor</li>
        </ul>

        <h2>Software/Algorithm</h2>
        <ul>
            <li>Call Out Behavior</li>
            <li>Animations</li>
            <li>Sounds</li>
        </ul>

        <h2>Demo Video</h2>

        <h2>Report</h2>

        <h2>Presentation Slides</h2>

       

      </main>
    );
  }