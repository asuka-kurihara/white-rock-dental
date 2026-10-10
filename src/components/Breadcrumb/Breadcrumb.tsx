import Link from 'next/link';
import styles from './Breadcrumb.module.scss';
import React from 'react';

type BreadcrumbItem = {
  name: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumb__item}>
            {item.href ? (
              <Link href={item.href} className={styles.breadcrumb__link}>
                {item.name}
              </Link>
            ) : (
              <span className={styles.breadcrumb__text}>{item.name}</span>
            )}
            {index < items.length - 1 && (
              <span className={styles.breadcrumb__separator}>&gt;</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
