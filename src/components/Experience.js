import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <Briefcase size={16} />
            <span>04. Experience & Internship</span>
          </div>
          <h2 className="section-title">
            Industry <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development internship building practical web applications.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-timeline-item">
              {/* Timeline Connector & Node */}
              <div className="timeline-node">
                <div className="node-glow" />
                <Briefcase size={18} className="node-icon" />
              </div>

              {/* Experience Card */}
              <div className="experience-card glass-card">
                <div className="exp-card-header">
                  <div className="exp-title-area">
                    <span className="exp-type-badge">{exp.type}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-row">
                      <Building2 size={16} className="text-cyan" />
                      <span className="exp-company">{exp.company}</span>
                    </div>
                  </div>

                  <div className="exp-meta-area">
                    <div className="meta-badge">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-badge">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="exp-description">{exp.description}</p>

                {/* Key Responsibilities */}
                <div className="exp-responsibilities">
                  <h4 className="exp-subheading">Key Contributions & Learning:</h4>
                  <ul className="resp-list">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="resp-item">
                        <CheckCircle2 size={15} className="text-emerald resp-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Skills Utilized */}
                <div className="exp-skills-row">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
