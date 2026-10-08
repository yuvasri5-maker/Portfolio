import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Star 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <GraduationCap size={16} />
            <span>05. Education</span>
          </div>
          <h2 className="section-title">
            Academic <span className="gradient-text">Foundation</span>
          </h2>
          <p className="section-subtitle">
            Rigorous undergraduate studies in Information Technology with consistent top-tier academic excellence.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-timeline-item">
              {/* Timeline Connector */}
              <div className="timeline-node edu-node">
                <div className="node-glow" />
                <GraduationCap size={18} className="node-icon" />
              </div>

              {/* Education Card */}
              <div className="education-card glass-card">
                <div className="edu-card-top">
                  <div className="edu-title-block">
                    <div className="edu-badge-row">
                      <span className="edu-badge">{edu.duration}</span>
                      <span className="rank-holder-pill">
                        <Star size={13} className="text-emerald" fill="currentColor" />
                        <span>{edu.badge}</span>
                      </span>
                    </div>

                    <h3 className="edu-degree">{edu.degree}</h3>
                    <h4 className="edu-institution">{edu.institution}</h4>
                    <span className="edu-affiliation">{edu.affiliation}</span>
                  </div>

                  <div className="edu-score-box glass-card">
                    <span className="score-label">Graduation CGPA</span>
                    <span className="score-value gradient-text">{edu.score.replace('CGPA: ', '')}</span>
                    <span className="score-sub">Top Tier Standing</span>
                  </div>
                </div>

                <p className="edu-description">{edu.description}</p>

                {/* Core Coursework Tags */}
                

                {/* Key Highlights */}
                <div className="edu-highlights">
                  <h4 className="edu-subheading">
                    <Award size={15} className="text-emerald" />
                    <span>Academic Highlights:</span>
                  </h4>
                  <ul className="edu-highlights-list">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        <CheckCircle2 size={15} className="text-cyan highlight-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
