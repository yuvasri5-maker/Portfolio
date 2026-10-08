import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Monitor, 
  ArrowUpRight 
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-category-badge">{project.category}</span>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button 
            onClick={onClose} 
            className="modal-close-btn"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Detailed Overview */}
          <div className="modal-section">
            <h4 className="modal-subtitle">Application Overview</h4>
            <p className="modal-text">{project.fullDesc}</p>
          </div>

          {/* Key Capabilities */}
          <div className="modal-section">
            <h4 className="modal-subtitle">Key Features & Architecture</h4>
            <ul className="modal-feature-list">
              {project.features.map((feature, idx) => (
                <li key={idx} className="modal-feature-item">
                  <CheckCircle2 size={16} className="text-emerald feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="modal-subtitle">Technologies & Tools</h4>
            <div className="modal-tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Live Preview Embed / Direct Launcher */}
          <div className="modal-preview-box">
            <div className="preview-box-header">
              <div className="preview-indicator">
                <Monitor size={15} className="text-cyan" />
                <span>Live Deployment: {project.liveUrl}</span>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                <span>Launch Full Screen</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="iframe-container">
              <iframe
                src={project.liveUrl}
                title={project.title}
                className="project-live-iframe"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
            <p className="iframe-fallback-note">
              Note: If your browser blocks iframe rendering due to security headers, click <strong>Launch Full Screen</strong> above to view the live app directly.
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>Open Live Website</span>
            <ExternalLink size={16} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Github size={16} />
            <span>GitHub Repository</span>
          </a>
          <button onClick={onClose} className="btn btn-outline">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
