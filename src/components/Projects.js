import React from 'react';
import { 
  Github, 
  Eye, 
  Layers, 
  CheckCircle2, 
  Code2, 
  ArrowUpRight 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onOpenModal }) {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <Layers size={16} />
            <span>03. Featured Projects</span>
          </div>
          <h2 className="section-title">
            Real-World <span className="gradient-text">Live Applications</span>
          </h2>
          <p className="section-subtitle">
            All 5 projects are fully functional, interactive, and deployed live on Vercel with real-time user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article key={project.id} className="project-card glass-card">
              {/* Project Card Header with Live Badge */}
              <div className="project-card-header">
                <div className="project-category-badge">
                  <Code2 size={13} />
                  <span>{project.category}</span>
                </div>

                <div className="live-status-indicator">
                  <span className="live-pulse-dot" />
                  <span className="live-status-text">{project.statusBadge}</span>
                </div>
              </div>

              {/* Project Body */}
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDesc}</p>

                {/* Key Features Bullet Points */}
                <div className="project-features-list">
                  {project.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="project-feature-item">
                      <CheckCircle2 size={14} className="text-emerald" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Used */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Card Actions */}
              <div className="project-card-footer">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary project-action-btn"
                  title="Open live app in a new tab"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight size={15} />
                </a>

                <button
                  onClick={() => onOpenModal(project)}
                  className="btn btn-sm btn-secondary project-preview-btn"
                  title="Open in-page preview modal"
                >
                  <Eye size={15} />
                  <span>Details & Preview</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline project-icon-btn"
                  aria-label="View source on GitHub"
                  title="View GitHub Repository"
                >
                  <Github size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
}
