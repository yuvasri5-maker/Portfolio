import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Code2, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Trophy, 
  FileText, 
  Mail 
} from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: Layers },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'contact', label: 'Contact', icon: Mail }
];

export default function SideScrollNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);

      const scrollPosition = window.scrollY + 140;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
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

  if (!isVisible) return null;

  return (
    <aside className="side-scroll-rail" aria-label="Quick Section Navigation">
      <nav className="side-rail-nav">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          const Icon = sec.icon;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={(e) => scrollTo(e, sec.id)}
              className={`side-rail-dot ${isActive ? 'active' : ''}`}
              aria-label={`Scroll to ${sec.label}`}
            >
              <span className="dot-circle" />
              <div className="dot-tooltip glass-card">
                <Icon size={13} className="tooltip-icon" />
                <span>{sec.label}</span>
              </div>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
