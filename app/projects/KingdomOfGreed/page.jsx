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
        {/*Title Screen, to the left side of the screen*/} {/*Intro Paragraph, to the right side of the screen*/}
        <div className="KOGIntroSection">
          <img src="/TitleScreen.png" alt="Title Screen" className = "KOGTitleScreen"/>
          <p className="KOGDescription">INSERT PROJECT DESCRIPTION HERE</p>
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
        </div>
        {/*Gameplay Screenshots, to the left side of the screen*/}{/*Decision oriented gameplay description, to the right side of the screen*/}
        <div className="DecisionGameplaySection">
          <h2 className="DecisionGameplayTitle">Decision Oriented Gameplay</h2>
        </div>
        {/*Concept Drawings, Aseprite sheets*/}
        <div className="KOGDesignSection">
          <h2 className="KOGDesignTitle">Element Design</h2>
        </div>
        {/*Game download*/}
        <div className="GameDownloadSection">
          <h2 className="GameDemoTitle">Game Demo</h2>
          <p>Wanna test the game out yourself? Demo version of the game is available to play test:</p>
        </div>
    </main>
  );
}