import React, { useState } from 'react';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: ''
  });

  const [contactStatus, setContactStatus] = useState('');

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactStatus('Message sent successfully!');
    
    // Reset form
    setTimeout(() => {
      setFormData({
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactMessage: ''
      });
      setContactStatus('');
    }, 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-info-text">
                <h3 className="contact-info-title">Address</h3>
                <p className="contact-info-detail">123 Main Street, City, Country</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-info-text">
                <h3 className="contact-info-title">Phone</h3>
                <p className="contact-info-detail">+1 234 567 8900</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-info-text">
                <h3 className="contact-info-title">Email</h3>
                <p className="contact-info-detail">contact@example.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-form-group">
                <label htmlFor="contactName" className="contact-label">
                  Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  className="contact-input"
                  value={formData.contactName}
                  onChange={handleContactChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contactEmail" className="contact-label">
                  Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="contact-input"
                  value={formData.contactEmail}
                  onChange={handleContactChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contactSubject" className="contact-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="contactSubject"
                  name="contactSubject"
                  className="contact-input"
                  value={formData.contactSubject}
                  onChange={handleContactChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contactMessage" className="contact-label">
                  Message
                </label>
                <textarea
                  id="contactMessage"
                  name="contactMessage"
                  className="contact-textarea"
                  value={formData.contactMessage}
                  onChange={handleContactChange}
                  required
                  rows="5"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-button">
                Send Message
              </button>

              {contactStatus && (
                <div className="contact-status-message">
                  {contactStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;