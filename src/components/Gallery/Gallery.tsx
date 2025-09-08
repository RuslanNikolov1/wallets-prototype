import React from 'react';
import styles from './Gallery.module.scss';

interface WalletItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

const Gallery: React.FC = () => {
  const wallets: WalletItem[] = [
    {
      id: 1,
      image: '/wallets-1.jpeg',
      title: 'FOREST SPIRIT',
      description: 'Handcrafted from ancient leather, blessed by shamans and imbued with the wisdom of the old forest spirits.',
      category: 'NATURE'
    },
    {
      id: 2,
      image: '/wallets-2.jpeg',
      title: 'FIRE DANCER',
      description: 'Worn by tribal dancers around the sacred fire. Each stitch tells a story of ancient rituals and ceremonies.',
      category: 'RITUAL'
    },
    {
      id: 3,
      image: '/wallets-3.jpeg',
      title: 'EARTH KEEPER',
      description: 'Made from the hide of sacred animals, this wallet carries the strength and protection of the earth itself.',
      category: 'SACRED'
    },
    {
      id: 4,
      image: '/wallets-4.jpeg',
      title: 'WIND WALKER',
      description: 'Light as air but strong as the mountain wind. Crafted for those who walk between worlds.',
      category: 'SPIRIT'
    },
    {
      id: 5,
      image: '/wallets-5.jpeg',
      title: 'STONE ELDER',
      description: 'Ancient patterns carved by hand, each symbol holds the power of generations of tribal wisdom.',
      category: 'ANCIENT'
    },
    {
      id: 6,
      image: '/wallets-6.jpeg',
      title: 'WATER FLOW',
      description: 'Smooth as river stones, this wallet flows with the natural curves of the earth and water.',
      category: 'FLOW'
    },
    {
      id: 7,
      image: '/wallets-7.jpeg',
      title: 'SHADOW HUNTER',
      description: 'Dark as the night sky, this wallet was made for those who hunt in the shadows of the forest.',
      category: 'HUNTER'
    },
    {
      id: 8,
      image: '/wallets-8.jpeg',
      title: 'SUN BLESSED',
      description: 'Warmed by the sun and blessed by the light, this wallet carries the energy of the great sky spirit.',
      category: 'LIGHT'
    },
    {
      id: 9,
      image: '/wallets-9.jpeg',
      title: 'MOON WISDOM',
      description: 'Crafted under the full moon, this wallet holds the secrets of the night and the wisdom of the stars.',
      category: 'MOON'
    }
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>SACRED COLLECTION</h2>
          <p className={styles.subtitle}>
            Each piece is handcrafted by tribal artisans, blessed by shamans, and imbued with ancient forest wisdom
          </p>
        </div>
        
        <div className={styles.grid}>
          {wallets.map((wallet, index) => (
            <div key={wallet.id} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.imageContainer}>
                <img 
                  src={wallet.image} 
                  alt={wallet.title}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <span className={styles.category}>{wallet.category}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{wallet.title}</h3>
                <p className={styles.cardDescription}>{wallet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

