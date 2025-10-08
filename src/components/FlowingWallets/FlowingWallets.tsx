import React from 'react';
import styles from './FlowingWallets.module.scss';
import walletImage from '../../assets/images/my-wallet.png';

const FlowingWallets: React.FC = () => {
  // Generate random wallet icons for flowing animation
  const generateRandomWallets = () => {
    const randomWallets = [];
    
    for (let i = 0; i < 30; i++) {
      randomWallets.push({
        id: `random-${i}`,
        image: walletImage,
        delay: Math.random() * 3, // Random delay up to 3 seconds
        size: 30, // Fixed size for all wallets
        startX: Math.random() * 100, // Random starting X position
        startY: Math.random() * 100, // Random starting Y position
        rotation: Math.random() * 360, // Random starting rotation
      });
    }
    return randomWallets;
  };

  const randomWallets = generateRandomWallets();

  return (
    <div className={styles.flowingWallets}>
      {randomWallets.map((wallet, index) => (
        <div 
          key={wallet.id} 
          className={styles.walletIcon}
          style={{
            animationDelay: `${wallet.delay}s`,
            width: `${wallet.size}px`,
            height: `${wallet.size}px`,
            left: `${wallet.startX}%`,
            top: `${wallet.startY}%`,
            transform: `rotate(${wallet.rotation}deg)`,
          }}
        >
          <img 
            src={wallet.image} 
            alt="Flowing wallet"
            className={styles.walletImage}
          />
        </div>
      ))}
    </div>
  );
};

export default FlowingWallets;
