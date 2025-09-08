import React, { useState, useEffect, useRef } from 'react';
import styles from './AudioPlayer.module.scss';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleUserInteraction = () => {
      setUserInteracted(true);
      if (!hasStarted) {
        audio.play().then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        }).catch(() => {
          console.log('Auto-play prevented by browser');
        });
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('keydown', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [hasStarted]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/Tribal Engineers - Live at Dont Stop the Beat 5_2018 [2cIAcsFp4TE].mp3"
        loop
        preload="auto"
      />
      <button 
        className={styles.playPauseButton}
        onClick={togglePlayPause}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
    </>
  );
};

export default AudioPlayer;
