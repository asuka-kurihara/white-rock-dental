import { NewsList } from '@/components/NewsList/NewsList';
import { newsData } from '@/utils/newsData';
import styles from './page.module.scss';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お知らせ | ホワイトロック歯科',
  description: 'ホワイトロック歯科からのお知らせ一覧ページです。',
};

export default function Page() {
  return (
    <div className={styles.newsPage}>
      <div className={styles.newsPage__mv}>
        <div 
          className={styles.newsPage__mvInner} 
          style={{ backgroundImage: `url('/lower-hero-214938.png')` }}
          aria-label="お知らせ"
        >
          <h1 className={styles.newsPage__mvTitle}>お知らせ</h1>
        </div>
      </div>

      <div className={styles.newsPage__container}>
        <Breadcrumb items={[
          { name: 'ホーム', href: '/' },
          { name: 'お知らせ' }
        ]} />

        <section className={styles.newsPage__section}>
          <div className={styles.newsPage__content}>
            <NewsList items={newsData} showContent={true} />
          </div>
        </section>
      </div>
    </div>
  );
}

