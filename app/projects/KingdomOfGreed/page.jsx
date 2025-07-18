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

        {/*Info on procedurally generated dungeons, to the left side of the screen*/}{/*Dungeon pictures, to the right side of the screen*/}

        {/*Gameplay Screenshots, to the left side of the screen*/}{/*Decision oriented gameplay description, to the right side of the screen*/}

        {/*Concept Drawings, Aseprite sheets*/}
        
        {/*Game download*/}
    </main>
  );
}