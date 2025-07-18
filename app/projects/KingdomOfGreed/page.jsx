'use client';
import { useEffect } from 'react';

export default function KingdomOfGreedPage() {
  useEffect(() => {
    document.body.classList.add('kog-background');
    return () => {
      document.body.classList.remove('kog-background');
    };
  }, []);

  return (
    <main className="kingdomMain">
      <h1 className="KOGTitle">Kingdom Of Greed: Unity Dungeon Crawler</h1>
        {/*Goblin and ent animations*/}
        <div className="/goblin-right"/>
        <div className="/ent-left"/>
        {/*Title Screen, to the left side of the screen*/} {/*Intro Paragraph, to the right side of the screen*/}
        <div className="KOGIntroSection">
          <img src="/TitleScreen.png" alt="Title Screen" className = "KOGTitleScreen"/>
          <p className="KOGDescription">
            <strong>Kingdom of Greed</strong> begins with a goblin returning from an adventure, only to discover that his homeland has been overtaken by a tyrannical king.<br />
            Determined to reclaim what was lost, the goblin embarks on a perilous journey through war-torn kingdoms to confront the ruler.<br />
            Along the way, he encounters enemies, allies, hidden treasures, and challenging decisions that shape his path.<br />
            This game was developed as part of a semester-long project for our AI for Game Programming course, in collaboration with Santiago Echeverry, Kathlea Corla, and Elliott D’Amato.<br />
          </p>
        </div>
        {/*Presentation youtube video, to the left side of the screen*/}{/*Animations, to the right side of the screen*/}

        {/*Tech Stack, in the middle with list items*/}
        <div className="KOGTechSection">
          <h2 className="KOGTechTitle">Technologies Used</h2>
          <ul className="KOGTechList">
            <li>Unity</li>
            <li>Aseprite</li>
            <li>Procreate</li>
          </ul>
        </div>
        {/*Info on procedurally generated dungeons, to the left side of the screen*/}{/*Dungeon pictures, to the right side of the screen*/}
        <div className="ProGenDungeonsSection">
          <h2 className="ProGenDunTitle">Procedurally Generated Dungeons</h2>
          <p className="ProGenDunDescription">Individual rooms were designed and enemies were placed within each room at different difficulty levels.<br/> The levels use a DFS-based algorithm to randomly connect the individual rooms and form a level.<br/> Level seeds are available and able to be set at the beginning of the game.</p>
        </div>
        {/*Gameplay Screenshots, to the left side of the screen*/}{/*Decision oriented gameplay description, to the right side of the screen*/}
        <div className="DecisionGameplaySection">
          <h2 className="DecisionGameplayTitle">Decision Oriented Gameplay</h2>
          <p className="DecisionGameplayDescription">Currently being implemented... Stay tuned!</p>
        </div>
        {/*Concept Drawings, Aseprite sheets*/}
        <div className="KOGDesignSection">
          <h2 className="KOGDesignTitle">Element Design</h2>
        </div>
        {/*Game download*/}
        <div className="GameDownloadSection">
          <h2 className="GameDemoTitle">Game Demo</h2>
          <p className="GameDemoDescritpion">Wanna test the game out yourself? Demo version of the game is available to play test:</p>
        </div>
    </main>
  );
}