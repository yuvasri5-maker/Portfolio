import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ currentTheme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      // Section spy with tighter offset
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'achievements', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background body scrolling when mobile navigation drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 54;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="brand-logo"
          aria-label="Yuvasri Portfolio Home"
        >
          <span className="logo-badge">YS</span>
          <span className="logo-text">
            <span className="logo-name">{personalInfo.name}</span>
          </span>
        </a>

        {/* Desktop Navigation with Smooth Scroll Capability */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                    {isActive && <span className="active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {currentTheme === 'dark' ? (
              <Sun className="theme-icon sun" size={18} />
            ) : (
              <Moon className="theme-icon moon" size={18} />
            )}
          </button>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-sm btn-primary header-hire-btn"
          >
            <Send size={13} />
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop (tapping outside closes menu) */}
      <div 
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <div 
        id="mobile-navigation-drawer"
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-list">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="mobile-active-pill">Active</span>}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn btn-primary btn-block"
            >
              <Send size={15} />
              <span>Contact Yuvasri</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}