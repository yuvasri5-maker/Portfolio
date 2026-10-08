import React from 'react';
import { 
  User, 
  MapPin, 
  Mail, 
  Languages, 
  Brain, 
  Target, 
  GraduationCap, 
  Award, 
  Sparkles 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <User size={16} />
            <span>01. About Me</span>
          </div>
          <h2 className="section-title">
            Passionate Developer, <span className="gradient-text">Continuous Learner</span>
          </h2>
          <p className="section-subtitle">
            A look into my background, technical journey, academic dedication, and career aspirations.
          </p>
        </div>

        {/* Main Grid: Bio & Quick Facts */}
        <div className="about-grid">
          {/* Left Column: Narrative Bio */}
          <div className="about-narrative glass-card">
            <div className="card-header-badge">
              <Sparkles size={16} className="text-cyan" />
              <span>Who I Am</span>
            </div>

            <div className="bio-paragraphs">
              {personalInfo.aboutBio.map((para, index) => (
                <p key={index} className="bio-p">
                  {para}
                </p>
              ))}
            </div>

            {/* Career Objective Highlight Card */}
            <div className="career-objective-card">
              <div className="objective-header">
                <Target className="text-violet" size={20} />
                <h3 className="objective-title">Career Objective</h3>
              </div>
              <p className="objective-text">
                "{personalInfo.careerObjective}"
              </p>
            </div>
          </div>

          {/* Right Column: Key Details & Quick Highlights */}
          <div className="about-details-col">
            {/* Quick Profile Cards */}
            <div className="details-card-grid">
              <div className="detail-item glass-card">
                <div className="detail-icon-wrap icon-cyan">
                  <GraduationCap size={20} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">Education</span>
                  <span className="detail-value">B.Tech Information Technology</span>
                  <span className="detail-sub">IFET College of Engineering (3rd Year)</span>
                </div>
              </div>

              <div className="detail-item glass-card">
                <div className="detail-icon-wrap icon-emerald">
                  <Award size={20} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">Academic Standing</span>
                  <span className="detail-value">8.86 CGPA</span>
                  <span className="detail-sub">Academic Rank Holder</span>
                </div>
              </div>

              <div className="detail-item glass-card">
                <div className="detail-icon-wrap icon-violet">
                  <MapPin size={20} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{personalInfo.location}</span>
                  <span className="detail-sub">Open to remote & on-site internships</span>
                </div>
              </div>

              <div className="detail-item glass-card">
                <div className="detail-icon-wrap icon-cyan">
                  <Brain size={20} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">Core Passion & Hobby</span>
                  <span className="detail-value">Problem Solving</span>
                  <span className="detail-sub">Algorithms & Web Systems</span>
                </div>
              </div>

              <div className="detail-item glass-card">
                <div className="detail-icon-wrap icon-emerald">
                  <Languages size={20} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">Languages Known</span>
                  <span className="detail-value">English & Tamil</span>
                  <span className="detail-sub">Fluent Communication</span>
                </div>
              </div>

              <div className="detail-item glass-card">
                <div className="detail-icon-wrap icon-violet">
                  <Mail size={20} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">Email</span>
                  <span className="detail-value email-text">{personalInfo.email}</span>
                  <span className="detail-sub">Direct contact for opportunities</span>
                </div>
              </div>
            </div>

            {/* High Level Stats Strip */}
            <div className="about-stats-grid">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="stat-box glass-card">
                  <span className="stat-number gradient-text">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
