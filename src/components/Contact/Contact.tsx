import React, { useState } from 'react';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>JOIN THE TRIBE</h2>
          <p className={styles.subtitle}>
            Connect with our tribal community and discover the ancient wisdom of handcrafted leather.
          </p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🏺</div>
              <div className={styles.infoContent}>
                <h3>SACRED FIRE</h3>
                <p>tribe@ancientleather.com</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🌿</div>
              <div className={styles.infoContent}>
                <h3>FOREST SPIRITS</h3>
                <p>www.ancientleather.com</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🔥</div>
              <div className={styles.infoContent}>
                <h3>SHAMAN CIRCLE</h3>
                <p>Sacred Tribal Community</p>
              </div>
            </div>
          </div>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={5}
                required
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              SEND TO SPIRITS
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

