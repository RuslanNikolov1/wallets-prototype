import React from 'react';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.tribalBackground}>
        <div className={styles.forestLayer}></div>
        <div className={styles.fireLayer}></div>
        <div className={styles.spiritLayer}></div>
        <div className={styles.shamanOverlay}></div>
        <div className={styles.danceCircle}></div>
        <div className={styles.oldSpirits}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.titleMain}>TRIBAL</span>
            <span className={styles.titleSub}>WISDOM</span>
          </h1>
          <p className={styles.subtitle}>
            Where ancient shamans dance around the sacred fire, and forest spirits guide the way.
            Handcrafted leather born from the earth's wisdom.
          </p>
          <div className={styles.cta}>
            <a href="#gallery" className={styles.ctaButton}>
              <span className={styles.buttonText}>ENTER THE RITUAL</span>
              <span className={styles.buttonSymbol}>🏺</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
      </div>
    </section>
  );
};

export default Hero;

