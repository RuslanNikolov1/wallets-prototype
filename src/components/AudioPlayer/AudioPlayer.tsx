import React, { useState, useEffect, useRef } from 'react';
import styles from './AudioPlayer.module.scss';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
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

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Try to start playing immediately with multiple attempts
    const startMusic = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch(() => {
        console.log('Auto-play prevented by browser');
        // Try again after a short delay
        setTimeout(() => {
          audio.play().then(() => {
            setIsPlaying(true);
            setHasStarted(true);
          }).catch(() => {
            console.log('Auto-play still prevented');
          });
        }, 1000);
      });
    };

    // Start immediately
    startMusic();

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
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
        autoPlay
        muted={false}
      />
      <div className={styles.audioControls}>
        <span className={styles.musicLabel}>🎵 TRIBAL BEATS</span>
        <button 
          className={styles.playPauseButton}
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
      </div>
    </>
  );
};

export default AudioPlayer;
