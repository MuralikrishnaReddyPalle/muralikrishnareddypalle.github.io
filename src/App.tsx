import React, { useState, useEffect } from "react";

import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";

import Vision from "./components/Vision";

import FadeIn from './components/FadeIn';

import Lenis from 'lenis';

import './index.scss';

function App() {

    const [mode, setMode] = useState<string>('light');

    const handleModeChange = () => {

        setMode((prevMode) =>
            prevMode === 'dark'
                ? 'light'
                : 'dark'
        );
    };

    useEffect(() => {

        const lenis = new Lenis({

            duration: 1.4,

            lerp: 0.08,

            smoothWheel: true,

            wheelMultiplier: 1,

            touchMultiplier: 1.5,

            infinite: false,
        });

        let animationFrameId: number;

        const raf = (time: number) => {

            lenis.raf(time);

            animationFrameId =
                requestAnimationFrame(raf);
        };

        animationFrameId =
            requestAnimationFrame(raf);

        window.scrollTo({
            top: 0,
            left: 0,
        });

        return () => {

            cancelAnimationFrame(
                animationFrameId
            );

            lenis.destroy();
        };

    }, []);

    return (

      <div
        className={`main-container ${
          mode === 'dark'
            ? 'dark-mode'
            : 'light-mode'
        }`}
      >

        {/* ========================================= */}
        {/* GLOBAL CINEMATIC BACKGROUND */}
        {/* ========================================= */}

        <div className="global-background-layer" />

        <div className="global-overlay-layer" />

        {/* ========================================= */}
        {/* WEBSITE CONTENT */}
        {/* ========================================= */}

        <Navigation
          parentToChild={{ mode }}
          modeChange={handleModeChange}
        />

        <FadeIn transitionDuration={700}>

            <Main />

            <Vision />

            <Expertise />

            <Timeline />

            <Project />

            <Contact />

        </FadeIn>

        <Footer />

      </div>
    );
}

export default App;