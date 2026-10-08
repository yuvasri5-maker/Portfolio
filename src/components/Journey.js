import React from 'react';
import { 
  Sparkles, 
  Cpu, 
  Globe, 
  Atom, 
  Server, 
  Hammer, 
  Layers, 
  Compass,
  Milestone
} from 'lucide-react';
import { journeyData } from '../data/portfolioData';

/**
 * Developer Journey Section ("Developer Universe")
 * An interactive timeline illustrating YUVASRI's learning progression
 * from foundational logic and C/C++ to modern full stack and future aspirations.
 */
export default function Journey() {
  const iconMap = {
    Sparkles,
    Cpu,
    Globe,
    Atom,
    Server,
    Hammer,
    Layers,
    Compass
  };

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Milestone size={14} />
            <span>Growth &amp; Milestones</span>
          </span>
          <h2 className="section-title">
            My Developer <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            A chronological roadmap tracing my growth from writing my first algorithmic lines of code to building full stack systems.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="journey-timeline">
          {journeyData.map((stage, index) => {
            const IconComponent = iconMap[stage.icon] || Sparkles;

            return (
              <div key={stage.year} className="journey-node-row">
                {/* Central Icon Marker */}
                <div className="journey-node-icon" aria-hidden="true">
                  <IconComponent size={20} />
                </div>

                {/* Milestone Card */}
                <div className="journey-card">
                  <span className="journey-stage-badge">{stage.year}</span>
                  <h3 className="journey-milestone-title">{stage.title}</h3>
                  <h4 className="journey-milestone-subtitle">{stage.subtitle}</h4>
                  <p className="journey-milestone-desc">{stage.description}</p>

                  {/* Highlighted Skills */}
                  <div className="journey-skills-pills">
                    {stage.skills.map((skill) => (
                      <span key={skill} className="journey-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
