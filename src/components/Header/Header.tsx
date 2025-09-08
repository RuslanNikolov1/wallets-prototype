import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>ANCIENT</span>
          <span className={styles.logoSubtext}>SPIRITS</span>
        </div>
        <nav className={styles.nav}>
          <a href="#gallery" className={styles.navLink}>Gallery</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
        <div className={styles.audioContainer}>
          <AudioPlayer />
        </div>
      </div>
    </header>
  );
};

export default Header;

