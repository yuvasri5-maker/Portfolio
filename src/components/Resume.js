import React from 'react';
import { 
  FileText, 
  Download, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Layers, 
  ExternalLink, 
  Send 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Resume() {
  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <FileText size={16} />
            <span>08. Professional Resume</span>
          </div>
          <h2 className="section-title">
            Curriculum <span className="gradient-text">Vitae</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive summary of my education, technical proficiencies, internship, and project credentials.
          </p>
        </div>

        {/* Resume Display Card */}
        <div className="resume-display-card glass-card">
          {/* Card Header */}
          <div className="resume-card-header">
            <div className="resume-applicant-info">
              <h3 className="applicant-name">{personalInfo.name}</h3>
              <p className="applicant-role">{personalInfo.role}</p>
              <p className="applicant-meta">
                {personalInfo.location} • {personalInfo.email}
              </p>
            </div>

            <div className="resume-actions-group">
              <a
                href="/resume.pdf"
                download="Yuvasri_Radhakrishnan_Resume.pdf"
                className="btn btn-primary"
                title="Download resume as PDF"
              >
                <Download size={16} />
                <span>Download Resume PDF</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                title="View resume in a new tab"
              >
                <ExternalLink size={16} />
                <span>View PDF</span>
              </a>
              <button 
                onClick={handlePrintResume} 
                className="btn btn-secondary"
                title="Print or save this page as PDF"
              >
                <FileText size={16} />
                <span>Print This Page</span>
              </button>
              <a 
                href="#contact" 
                className="btn btn-secondary"
              >
                <Send size={16} />
                <span>Contact Directly</span>
              </a>
            </div>
          </div>

          {/* Resume Snapshot Columns */}
          <div className="resume-content-columns">
            {/* Left Column: Education & Experience */}
            <div className="resume-col">
              <div className="resume-block">
                <div className="resume-block-title">
                  <GraduationCap size={18} className="text-cyan" />
                  <h4>Education</h4>
                </div>
                <div className="resume-sub-item">
                  <div className="item-head">
                    <span className="item-title">B.Tech - Information Technology</span>
                    <span className="item-time">2024 - 2028</span>
                  </div>
                  <span className="item-place">IFET College of Engineering • Anna University</span>
                  <span className="item-score text-emerald font-bold">CGPA: 8.86 (Academic Rank Holder)</span>
                </div>
              </div>

              <div className="resume-block">
                <div className="resume-block-title">
                  <Briefcase size={18} className="text-violet" />
                  <h4>Internship Experience</h4>
                </div>
                <div className="resume-sub-item">
                  <div className="item-head">
                    <span className="item-title">Web Developer Intern</span>
                    <span className="item-time">Internship</span>
                  </div>
                  <span className="item-place">Industrial Design and Animations</span>
                  <p className="item-text">
                    Engineered responsive web applications and front-end interface components using HTML, CSS, JavaScript, and modern web principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key Skills & 5 Live Projects */}
            <div className="resume-col">
              <div className="resume-block">
                <div className="resume-block-title">
                  <Code2 size={18} className="text-cyan" />
                  <h4>Core Competencies</h4>
                </div>
                <div className="resume-skills-tags">
                  <span className="r-tag">C</span>
                  <span className="r-tag">C++</span>
                  <span className="r-tag">Java</span>
                  <span className="r-tag">Python</span>
                  <span className="r-tag">HTML5</span>
                  <span className="r-tag">CSS3</span>
                  <span className="r-tag">JavaScript (ES6+)</span>
                  <span className="r-tag">React.js</span>
                  <span className="r-tag">Node.js</span>
                  <span className="r-tag">Express.js</span>
                  <span className="r-tag">MongoDB</span>
                  <span className="r-tag">MySQL</span>
                  <span className="r-tag">Git</span>
                  <span className="r-tag">GitHub</span>
                  <span className="r-tag">VS Code</span>
                </div>
              </div>

              <div className="resume-block">
                <div className="resume-block-title">
                  <Layers size={18} className="text-emerald" />
                  <h4>5 Live Deployed Projects</h4>
                </div>
                <ul className="resume-project-list">
                  <li>
                    <strong>Expense Tracker:</strong> Real-time budget & balance calculator with React.js & CSS.
                  </li>
                  <li>
                    <strong>Simple Calculator:</strong> Interactive arithmetic web calculator with keyboard input.
                  </li>
                  <li>
                    <strong>Password Generator:</strong> Cryptographically sound password builder with length slider.
                  </li>
                  <li>
                    <strong>Notes App:</strong> Fast, clean note capture application with responsive grid.
                  </li>
                  <li>
                    <strong>Stopwatch:</strong> Precision millisecond timer tool with start/pause/reset.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
