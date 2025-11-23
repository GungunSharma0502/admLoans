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
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-form-row">
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