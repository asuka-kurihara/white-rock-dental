import Link from 'next/link';
import styles from './NewsList.module.scss';
import { type NewsItem } from '@/utils/newsData';

type NewsListProps = {
  items: NewsItem[];
  hideCategory?: boolean;
  showContent?: boolean;
  isLinkToSelf?: boolean;
};

export const NewsList = ({ items, hideCategory = false, showContent = false, isLinkToSelf = false }: NewsListProps) => {
  if (items.length === 0) {
    return <p className={styles.newsList__empty}>現在、お知らせはありません。</p>;
  }

  return (
    <ul className={styles.newsList}>
      {items.map((item) => (
        <li key={item.id} id={`news-item-${item.id}`} className={`${styles.newsList__item} ${showContent ? styles['newsList__item--stacked'] : ''}`}>
          <div className={`${styles.newsList__meta} ${hideCategory ? styles['newsList__meta--noCategory'] : ''}`}>
            <time className={styles.newsList__date} dateTime={item.date.replace(/\./g, '-')}>
              {item.date}
            </time>
            {!hideCategory && (
              <span className={styles.newsList__category}>{item.category}</span>
            )}
          </div>
          <div className={styles.newsList__body}>
            <h3 className={styles.newsList__title}>
              {isLinkToSelf ? (
                <Link href={`/news#news-item-${item.id}`}>
                  {item.title}
                </Link>
              ) : (
                item.title
              )}
            </h3>
            {showContent && item.content && (
              <p className={styles.newsList__content}>
                {item.content}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
