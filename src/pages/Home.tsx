import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/About';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import IntroCurtain from '../components/IntroCurtain';
import Marquee from '../components/Marquee';
import MobileTabs from '../components/MobileTabs';
import Nav from '../components/Nav';
import ScrollProgress from '../components/ScrollProgress';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Work from '../components/Work';
import { HERO_REVEAL_BASE_MS } from '../content';
import { useReveal } from '../hooks/useReveal';

const INTRO_SESSION_KEY = 'wa-intro-played';

function shouldPlayIntro() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return sessionStorage.getItem(INTRO_SESSION_KEY) !== '1';
  } catch {
    return true;
  }
}

export default function Home() {
  const [playIntro, setPlayIntro] = useState(shouldPlayIntro);
  const [introRunning, setIntroRunning] = useState(playIntro);
  const { hash } = useLocation();

  useReveal();

  useEffect(() => {
    if (!playIntro) return;
    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, '1');
    } catch {
      /* storage blocked — the intro simply plays again */
    }
  }, [playIntro]);

  const onIntroDone = useCallback(() => {
    setIntroRunning(false);
    setPlayIntro(false);
  }, []);

  // Arriving from the case study at /#work — honour the hash without scrollIntoView.
  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) window.scrollTo({ top: target.offsetTop, behavior: 'auto' });
  }, [hash]);

  const base = playIntro ? HERO_REVEAL_BASE_MS : 0;

  return (
    <div className="page">
      {introRunning && <IntroCurtain onDone={onIntroDone} />}
      <ScrollProgress />
      <Nav />
      <Hero base={base} />
      <Marquee />
      <Stats />
      <Work />
      <About />
      <Testimonials />
      <ContactSection />
      <Footer />
      <MobileTabs onHome instant={!playIntro} />
    </div>
  );
}
