import { ImageUtil } from '@/utils/ImageUtil';
import styles from '@/utils/Carousel.module.scss';
import { useState, useEffect } from 'react';

interface CarouselProps {
  items: {
    alt: string;
    imagePc: string;
    imageSp: string;
  }[];
  widthSp: number;
  heightSp: number;
  widthPc: number;
  heightPc: number;
}

const Carousel = ({
  items,
  widthSp,
  heightSp,
  widthPc,
  heightPc,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <ul className={styles.carousel}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${styles.carousel__item} ${
            index === currentIndex ? styles.active : ''
          }`}
        >
          <ImageUtil
            srcPc={item.imagePc}
            srcSp={item.imageSp}
            alt={item.alt}
            widthSp={widthSp}
            heightSp={heightSp}
            widthPc={widthPc}
            heightPc={heightPc}
          />
        </li>
      ))}
    </ul>
  );
};

export { Carousel };
