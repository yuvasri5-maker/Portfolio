import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <Award size={16} />
            <span>06. Certifications</span>
          </div>
          <h2 className="section-title">
            Verified <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Accredited courses and technical competencies in computer networks, artificial intelligence, and engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <div key={index} className="cert-card glass-card">
              <div className="cert-card-top">
                <div className="cert-icon-wrap">
                  <ShieldCheck size={26} className="text-cyan" />
                </div>
                <span className="cert-badge">{cert.badge}</span>
              </div>

              <div className="cert-card-body">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer}</span>
                <p className="cert-desc">{cert.desc}</p>
              </div>

              <div className="cert-card-footer">
                <div className="cert-verified-pill">
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Verified Credential</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
