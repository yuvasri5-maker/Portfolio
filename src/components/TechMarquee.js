import React from 'react';
import { 
  Layers, 
  Cpu, 
  Coffee, 
  Terminal, 
  Palette, 
  Zap, 
  Globe, 
  Database, 
  Github, 
  Sliders 
} from 'lucide-react';

const techItems = [
  { name: 'React.js', icon: Layers, color: '#06b6d4' },
  { name: 'JavaScript ES6+', icon: Zap, color: '#facc15' },
  { name: 'Node.js', icon: Globe, color: '#22c55e' },
  { name: 'Express.js', icon: Layers, color: '#a855f7' },
  { name: 'MongoDB', icon: Database, color: '#10b981' },
  { name: 'MySQL', icon: Database, color: '#0284c7' },
  { name: 'Python', icon: Terminal, color: '#38bdf8' },
  { name: 'C / C++', icon: Cpu, color: '#818cf8' },
  { name: 'Java', icon: Coffee, color: '#f97316' },
  { name: 'HTML5 & CSS3', icon: Palette, color: '#ec4899' },
  { name: 'Git & GitHub', icon: Github, color: '#c084fc' },
  { name: 'VS Code', icon: Sliders, color: '#38bdf8' }
];

export default function TechMarquee() {
  return (
    <div className="tech-marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {[...techItems, ...techItems, ...techItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="marquee-item glass-card">
              <Icon size={16} style={{ color: item.color }} />
              <span className="marquee-label">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
