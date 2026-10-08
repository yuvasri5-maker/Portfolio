import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Zap, 
  Layers, 
  Terminal, 
  Coffee, 
  Database, 
  Globe, 
  Sliders, 
  Github, 
  Cpu, 
  Sparkles 
} from 'lucide-react';
import { skillsData, skillCategories } from '../data/portfolioData';

// Map icon string names to Lucide icon components
const iconMap = {
  Cpu: Cpu,
  Coffee: Coffee,
  Terminal: Terminal,
  Code2: Code2,
  Palette: Palette,
  Zap: Zap,
  Layers: Layers,
  Globe: Globe,
  Database: Database,
  Github: Github,
  Sliders: Sliders
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <Code2 size={16} />
            <span>02. Skills & Technologies</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="section-subtitle">
            Core programming languages, front-end libraries, backend frameworks, databases, and developer tooling.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="category-filter-tabs" role="tablist">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-tab-btn ${activeCategory === category ? 'active' : ''}`}
              role="tab"
              aria-selected={activeCategory === category}
            >
              <span>{category}</span>
              {activeCategory === category && <span className="category-indicator" />}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div key={skill.name} className="skill-card glass-card">
                <div className="skill-card-top">
                  <div className={`skill-icon-wrap icon-${skill.category.toLowerCase()}`}>
                    <IconComponent size={24} />
                  </div>
                  <span className={`skill-level-pill level-${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </div>

                <div className="skill-card-body">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-category-tag">{skill.category}</span>
                  <p className="skill-desc">{skill.desc}</p>
                </div>

                <div className="skill-card-footer">
                  <div className="proficiency-bar-track">
                    <div 
                      className={`proficiency-bar-fill fill-${skill.category.toLowerCase()}`}
                      style={{
                        width: skill.level === 'Advanced' ? '95%' : skill.level === 'Proficient' ? '88%' : '78%'
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Stack Summary Banner */}
        <div className="stack-summary-banner glass-card">
          <div className="summary-banner-content">
            <Sparkles className="text-cyan summary-icon" size={28} />
            <div>
              <h3 className="summary-title">Full Stack Synergy</h3>
              <p className="summary-desc">
                Specialized in architecting modern single-page applications with <strong>React.js</strong> and responsive <strong>CSS3</strong>, backed by strong computational logic in <strong>C, C++, Java, and Python</strong>, along with server and database integration via <strong>Node.js, Express.js, MongoDB, and MySQL</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
