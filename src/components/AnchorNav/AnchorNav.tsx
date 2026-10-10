import Link from 'next/link';
import styles from './AnchorNav.module.scss';
import React from 'react';

type AnchorItem = {
  id: string;
  title: string;
};

type AnchorNavProps = {
  items: AnchorItem[];
};

export const AnchorNav: React.FC<AnchorNavProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className={styles.anchorNav}>
      {items.map((item) => (
        <Link key={item.id} href={`#${item.id}`} className={styles.anchorBtn}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};
