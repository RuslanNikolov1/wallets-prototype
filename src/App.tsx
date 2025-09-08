import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.sectionDivider}></div>
      <Hero />
      <div className={styles.sectionDivider}></div>
      <Gallery />
      <div className={styles.sectionDivider}></div>
      <Contact />
      <div className={styles.sectionDivider}></div>
      <Footer />
    </div>
  );
};

export default App;

