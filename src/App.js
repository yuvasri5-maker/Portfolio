import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import SideScrollNav from './components/SideScrollNav';

import './App.css';

const SECTION_SEQUENCE = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About Me' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'education', name: 'Education' },
  { id: 'certifications', name: 'Certifications' },
  { id: 'achievements', name: 'Achievements' },
  { id: 'resume', name: 'Resume' },
  { id: 'contact', name: 'Contact' }
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('yuvasri_portfolio_theme');
    return saved ? saved : 'dark';
  });

  const [activeModalProject, setActiveModalProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('yuvasri_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message = 'Email copied to clipboard!') => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  // Keyboard Navigation: Scroll to section by index
  const scrollToSectionIndex = (index) => {
    if (index < 0 || index >= SECTION_SEQUENCE.length) return;
    const target = document.getElementById(SECTION_SEQUENCE[index].id);
    if (target) {
      const topOffset = 54;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      showToast(`Jumped to: ${SECTION_SEQUENCE[index].name}`);
    }
  };

  const getCurrentSectionIndex = () => {
    const scrollPosition = window.scrollY + 80;
    for (let i = SECTION_SEQUENCE.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTION_SEQUENCE[i].id);
      if (el && el.offsetTop <= scrollPosition) {
        return i;
      }
    }
    return 0;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = e.target.tagName ? e.target.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable) {
        return;
      }
      if (activeModalProject) {
        return;
      }

      const currentIndex = getCurrentSectionIndex();

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'j' || e.key === 'J' || e.key === 's' || e.key === 'S') {
        if (currentIndex < SECTION_SEQUENCE.length - 1) {
          e.preventDefault();
          scrollToSectionIndex(currentIndex + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'k' || e.key === 'K' || e.key === 'w' || e.key === 'W') {
        if (currentIndex > 0) {
          e.preventDefault();
          scrollToSectionIndex(currentIndex - 1);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSectionIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSectionIndex(SECTION_SEQUENCE.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModalProject]);

  return (
    <div className="portfolio-app-root">
      {/* Scroll depth indicator bar */}
      <ScrollProgress />

      {/* Sticky blurred glassmorphic header */}
      <Navbar currentTheme={theme} toggleTheme={toggleTheme} />

      {/* Quick Side Scroll Rail */}
      <SideScrollNav />

      {/* Main content sections with compact, reduced spacing */}
      <main id="main-content" role="main">
        <Hero onCopyEmail={() => showToast('Email copied to clipboard: yuvasriradhakrishnan5@gmail.com')} />
        <TechMarquee />
        <About />
        <Skills />
        <Projects onOpenModal={(project) => setActiveModalProject(project)} />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact onCopyEmail={() => showToast('Email copied to clipboard: yuvasriradhakrishnan5@gmail.com')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Details Modal */}
      <ProjectModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />

      {/* Feedback Toast */}
      <Toast message={toastMessage} visible={toastVisible} />

      {/* Floating Scroll to Top button */}
      <ScrollToTop />
    </div>
  );
}
