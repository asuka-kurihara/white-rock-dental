import React from 'react';
import styles from './LowerPageTemplate.module.scss';
import defaultHeroImg from '@/assets/img/recruit/recruit_title.png';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';

type Props = {
  title: string;
  heroImageSrc?: string;
  children: React.ReactNode;
  isWide?: boolean;
};

export const LowerPageTemplate = ({
  title,
  heroImageSrc = defaultHeroImg.src,
  children,
  isWide = false,
}: Props) => {
  return (
    <div className={styles.lower}>
      <div className={styles.lower__mv}>
        <div
          className={styles.lower__mvInner}
          style={{ backgroundImage: `url(${heroImageSrc})` }}
          aria-label={title}
        >
          <h1 className={styles.lower__mvTitle}>{title}</h1>
        </div>
      </div>

      <div className={styles.lower__container}>
        <Breadcrumb items={[
          { name: 'ホーム', href: '/' },
          { name: title }
        ]} />
        
        <div className={`${styles.lower__content} ${isWide ? styles['lower__content--wide'] : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

