import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoText}>ANCIENT</span>
              <span className={styles.logoSubtext}>SPIRITS</span>
            </div>
            <p className={styles.tagline}>
              Handcrafted leather blessed by shamans and forest spirits
            </p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>SACRED ITEMS</h4>
              <a href="#gallery">Forest Spirits</a>
              <a href="#gallery">Fire Dancers</a>
              <a href="#gallery">Shaman Blessings</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>TRIBE</h4>
              <a href="#contact">Join Circle</a>
              <a href="#contact">Sacred Rituals</a>
              <a href="#contact">Elder Wisdom</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>SPIRITS</h4>
              <a href="#" target="_blank" rel="noopener noreferrer">Forest Whispers</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Fire Ceremonies</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Moon Gatherings</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&copy; 2024 ANCIENT SPIRITS. All rights reserved.</p>
            <p>Blessed by shamans. Crafted by forest spirits. Honored by the tribe.</p>
          </div>
          
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
        
        <div className={styles.tech}>
          <div className={styles.techItem}>
            <span className={styles.techLabel}>FIRE:</span>
            <span className={styles.techValue}>BURNING</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techLabel}>SPIRITS:</span>
            <span className={styles.techValue}>DANCING</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techLabel}>FOREST:</span>
            <span className={styles.techValue}>WHISPERING</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

