import React from 'react';
import styles from './Gallery.module.scss';
import FlowingWallets from '../FlowingWallets/FlowingWallets';

// Import wallet images
import wallet1 from '../../assets/images/pics/011db036-1212-4a79-af4f-8d09c6264079.jpeg';
import wallet2 from '../../assets/images/pics/017c7146-f9b7-4f9e-ba60-ce445f238426.jpeg';
import wallet3 from '../../assets/images/pics/38e3218f-d2b8-43b2-b900-fb99484a1624.jpeg';
import wallet4 from '../../assets/images/pics/4d3a5274-a406-424a-bfdf-7d79befdf1ec.jpeg';
import wallet5 from '../../assets/images/pics/51c7058f-e9ad-4099-8975-97bb00768f76.jpeg';
import wallet6 from '../../assets/images/pics/55162a28-a013-412d-af75-2023eeaee402.jpeg';
import wallet7 from '../../assets/images/pics/5869c42b-d96e-43b2-9aea-a3573e4880ec.jpeg';
import wallet8 from '../../assets/images/pics/6cda30a0-2bfd-4f49-812a-5bb1cb977c06.jpeg';
import wallet9 from '../../assets/images/pics/89427297-da11-4eb5-850a-fbdd79556fc0.jpeg';
import wallet10 from '../../assets/images/pics/a9dbce1b-7855-41cc-b81b-a26683545cbc.jpeg';
import wallet11 from '../../assets/images/pics/aa55d627-8211-41ac-a6fb-20d25eb9c16b.jpeg';
import wallet12 from '../../assets/images/pics/bca16f87-94e6-4632-9de7-d57059c485af.jpeg';
import wallet13 from '../../assets/images/pics/bcd28c6f-db10-4cf3-be91-2f21aedc09dc.jpeg';
import wallet14 from '../../assets/images/pics/cd44c05e-e20b-43a9-a21e-7484125fbcea.jpeg';
import wallet15 from '../../assets/images/pics/f620b011-745f-4b23-8eb0-b1317f8f4fb9.jpeg';
import wallet16 from '../../assets/images/pics/fff78500-08bd-494e-b544-fc693db74833.jpeg';
import wallet17 from '../../assets/images/pics/a9dbce1b-7855-41cc-b81b-a26683545cbc (1).jpeg';

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
      image: wallet1,
      title: 'FOREST SPIRIT',
      description: 'Handcrafted from ancient leather, blessed by shamans and imbued with the wisdom of the old forest spirits.',
      category: 'NATURE'
    },
    {
      id: 2,
      image: wallet2,
      title: 'FIRE DANCER',
      description: 'Worn by tribal dancers around the sacred fire. Each stitch tells a story of ancient rituals and ceremonies.',
      category: 'RITUAL'
    },
    {
      id: 3,
      image: wallet3,
      title: 'EARTH KEEPER',
      description: 'Made from the hide of sacred animals, this wallet carries the strength and protection of the earth itself.',
      category: 'SACRED'
    },
    {
      id: 4,
      image: wallet4,
      title: 'WIND WALKER',
      description: 'Light as air but strong as the mountain wind. Crafted for those who walk between worlds.',
      category: 'SPIRIT'
    },
    {
      id: 5,
      image: wallet5,
      title: 'STONE ELDER',
      description: 'Ancient patterns carved by hand, each symbol holds the power of generations of tribal wisdom.',
      category: 'ANCIENT'
    },
    {
      id: 6,
      image: wallet6,
      title: 'WATER FLOW',
      description: 'Smooth as river stones, this wallet flows with the natural curves of the earth and water.',
      category: 'FLOW'
    },
    {
      id: 7,
      image: wallet7,
      title: 'SHADOW HUNTER',
      description: 'Dark as the night sky, this wallet was made for those who hunt in the shadows of the forest.',
      category: 'HUNTER'
    },
    {
      id: 8,
      image: wallet8,
      title: 'SUN BLESSED',
      description: 'Warmed by the sun and blessed by the light, this wallet carries the energy of the great sky spirit.',
      category: 'LIGHT'
    },
    {
      id: 9,
      image: wallet9,
      title: 'MOON WISDOM',
      description: 'Crafted under the full moon, this wallet holds the secrets of the night and the wisdom of the stars.',
      category: 'MOON'
    },
    {
      id: 10,
      image: wallet10,
      title: 'STAR GAZER',
      description: 'Woven with threads of starlight, this wallet connects you to the cosmic dance of the universe.',
      category: 'COSMIC'
    },
    {
      id: 11,
      image: wallet11,
      title: 'THUNDER BOLT',
      description: 'Charged with the power of storms, this wallet carries the raw energy of lightning and thunder.',
      category: 'STORM'
    },
    {
      id: 12,
      image: wallet12,
      title: 'CRYSTAL KEEPER',
      description: 'Embedded with sacred crystals, this wallet channels the healing energy of the earth\'s heart.',
      category: 'HEALING'
    },
    {
      id: 13,
      image: wallet13,
      title: 'WARRIOR SPIRIT',
      description: 'Forged in the fires of battle, this wallet carries the courage and strength of ancient warriors.',
      category: 'WARRIOR'
    },
    {
      id: 14,
      image: wallet14,
      title: 'DREAM WEAVER',
      description: 'Woven from the threads of dreams, this wallet holds the power to manifest your deepest desires.',
      category: 'DREAMS'
    },
    {
      id: 15,
      image: wallet15,
      title: 'PHOENIX RISING',
      description: 'Born from the ashes of transformation, this wallet symbolizes rebirth and eternal renewal.',
      category: 'REBIRTH'
    },
    {
      id: 16,
      image: wallet16,
      title: 'SACRED GEOMETRY',
      description: 'Patterned with sacred symbols and golden ratios, this wallet aligns with the divine mathematics of creation.',
      category: 'SACRED'
    },
    {
      id: 17,
      image: wallet17,
      title: 'TWIN SPIRIT',
      description: 'A mirrored soul of cosmic energy, this wallet carries the balance of dual forces in perfect harmony.',
      category: 'BALANCE'
    }
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      <FlowingWallets />
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

