import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onCopyEmail }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onCopyEmail) {
      onCopyEmail();
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Direct mailto trigger
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry from ' + formState.name)}&body=${encodeURIComponent('From: ' + formState.name + ' (' + formState.email + ')\n\n' + formState.message)}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <Mail size={16} />
            <span>09. Contact Me</span>
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Build Together</span>
          </h2>
          <p className="section-subtitle">
            I am actively seeking Full Stack Developer Internship opportunities and open to discussing innovative projects.
          </p>
        </div>

        {/* Contact Main Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <div className="contact-card-icon icon-cyan">
                <Mail size={24} />
              </div>
              <div className="contact-card-content">
                <span className="c-label">Direct Email</span>
                <span className="c-value">{personalInfo.email}</span>
                <div className="c-actions">
                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-sm btn-outline copy-btn"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald" />
                        <span className="text-emerald">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="btn btn-sm btn-primary"
                  >
                    <Send size={14} />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-card-icon icon-violet">
                <Linkedin size={24} />
              </div>
              <div className="contact-card-content">
                <span className="c-label">LinkedIn Profile</span>
                <span className="c-value">yuvasri-radhakrishnan</span>
                <div className="c-actions">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-secondary"
                  >
                    <Linkedin size={14} />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-card-icon icon-emerald">
                <Github size={24} />
              </div>
              <div className="contact-card-content">
                <span className="c-label">GitHub Profile</span>
                <span className="c-value">yuvasri5-maker</span>
                <div className="c-actions">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-secondary"
                  >
                    <Github size={14} />
                    <span>Follow on GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-card-icon icon-cyan">
                <MapPin size={24} />
              </div>
              <div className="contact-card-content">
                <span className="c-label">Location</span>
                <span className="c-value">{personalInfo.location}</span>
                <span className="c-sub">Open for on-site & remote internship positions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-col glass-card">
            <h3 className="form-title">
              <MessageSquare size={20} className="text-cyan" />
              <span>Send Me a Message</span>
            </h3>
            <p className="form-desc">
              Have a project, opportunity, or inquiry? Leave a message below and I will get back to you promptly.
            </p>

            {submitted ? (
              <div className="form-success-banner">
                <CheckCircle2 size={36} className="text-emerald animate-bounce" />
                <h4>Message Drafted!</h4>
                <p>Opening your default email client to send your message directly to {personalInfo.email}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. john@example.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Collaboration"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message, opportunity details, or inquiry here..."
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-glow">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
