import React from 'react';
import { 
  Award, 
  Code2, 
  Bug, 
  Cpu, 
  Sparkles, 
  Trophy 
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  Award: Award,
  Code2: Code2,
  Bug: Bug,
  Cpu: Cpu,
  Sparkles: Sparkles
};

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <Trophy size={16} />
            <span>07. Achievements & Events</span>
          </div>
          <h2 className="section-title">
            Honors, Hackathons & <span className="gradient-text">Workshops</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated competitive problem-solving capabilities, hackathon sprint participation, and specialized technical workshops.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievementsData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div key={index} className="achievement-card glass-card">
                <div className="ach-card-top">
                  <div className="ach-icon-wrap">
                    <IconComponent size={24} />
                  </div>
                  <span className="ach-metric-pill">{item.metric}</span>
                </div>

                <div className="ach-card-body">
                  <span className="ach-category">{item.category}</span>
                  <h3 className="ach-title">{item.title}</h3>
                  <span className="ach-org">{item.organization}</span>
                  <p className="ach-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
