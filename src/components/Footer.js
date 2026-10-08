import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ArrowUp 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-badge">YS</span>
              <span className="logo-text">{personalInfo.name}</span>
            </a>
            <p className="footer-tagline">
              {personalInfo.role}
            </p>
            <p className="footer-loc">
              <MapPin size={14} className="text-cyan" />
              <span>{personalInfo.location}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* 5 Live Vercel Projects */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Live Projects</h4>
            <ul className="footer-nav-list">
              <li><a href="https://expense-tracker-amber-eta-37.vercel.app/" target="_blank" rel="noopener noreferrer">Expense Tracker</a></li>
              <li><a href="https://simple-calc-ten-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">Simple Calculator</a></li>
              <li><a href="https://password-generator-five-tawny-32.vercel.app/" target="_blank" rel="noopener noreferrer">Password Generator</a></li>
              <li><a href="https://notes-app-iota-woad.vercel.app/" target="_blank" rel="noopener noreferrer">Notes App</a></li>
              <li><a href="https://stop-watch-phi-gules.vercel.app/" target="_blank" rel="noopener noreferrer">Stopwatch</a></li>
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div className="footer-social-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-icons">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon-btn"
                aria-label="Email Yuvasri"
              >
                <Mail size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-outline back-to-top-btn"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>{personalInfo.name}</strong>. Engineered with React.js & modern CSS.
          </p>
          <div className="footer-status-tag">
            <span className="status-dot-green" />
            <span>Open for Full Stack Developer Internships</span>
          </div>
        </div>
      </div>
    </footer>
  );
}