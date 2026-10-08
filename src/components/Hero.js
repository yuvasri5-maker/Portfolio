import React, { useState } from 'react';
import { 
  ArrowRight, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  MapPin, 
  Award,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onCopyEmail }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onCopyEmail) {
      onCopyEmail();
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 54;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Dynamic Background Glows */}
      <div className="hero-glow glow-violet" />
      <div className="hero-glow glow-cyan" />
      <div className="hero-glow glow-emerald" />

      <div className="container hero-container">
        <div className="hero-text-content">
          {/* Status Badge */}
          <div className="hero-status-badge">
            <span className="status-ping">
              <span className="ping-circle animate-ping" />
              <span className="ping-dot" />
            </span>
            <span className="status-text">{personalInfo.status}</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>{' '}
            <span className="gradient-text-name">{personalInfo.name}</span>
          </h1>

          {/* Role Subtitle */}
          <p className="hero-subtitle">
            <span className="role-highlight">{personalInfo.role}</span>
          </p>

          {/* Bio Intro */}
          <p className="hero-description">
            Passionate about crafting creative, user-friendly, and responsive web applications with{' '}
            <strong className="text-cyan">React.js</strong>, <strong className="text-violet">Node.js</strong>, and modern digital technologies. Turning innovative ideas into high-performing digital solutions.
          </p>
        </div>

        <div className="hero-side-content">
          {/* Location & Institution Tags */}
          <div className="hero-meta-tags">
            <div className="meta-tag">
              <MapPin size={15} className="text-cyan" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="meta-tag">
              <Award size={15} className="text-emerald" />
              <span>IFET College of Engineering • 8.86 CGPA</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="btn btn-primary btn-glow"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn btn-secondary"
            >
              <Send size={17} />
              <span>Get in Touch</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn btn-outline copy-email-btn"
              title="Click to copy email address"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald" />
                  <span className="text-emerald">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links & Quick Stats */}
          <div className="hero-social-row">
            <span className="social-label">Connect:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Hero Scroll Down Option */}
      <div className="hero-scroll-container">
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="hero-scroll-option"
          aria-label="Scroll down to About section"
          title="Scroll to Explore"
        >
          <span className="mouse-wheel-box">
            <span className="mouse-wheel-dot" />
          </span>
          <span className="scroll-option-text">Scroll to explore</span>
          <ChevronDown size={17} className="scroll-arrow-bounce" />
        </a>
      </div>
    </section>
  );
}
