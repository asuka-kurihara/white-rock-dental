import { SvgIcon } from '@/assets/img/SvgIcon';
import styles from '@/components/Header.module.scss';
import { companyInfo } from '@/utils/companyInfo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link href="/" className={styles.header__logo}>
          <SvgIcon name="logo" className={styles.header__logo} />
        </Link>
        <div className={styles.header__linkList}>
          <div className={styles.header__linkItem}>
            <Link
              href={`tel:${companyInfo.phone}`}
              className={styles.header__linkTel}
            >
              <SvgIcon name="tel" className={styles.header__tel} />
            </Link>
          </div>
          <div className={styles.header__linkItem}>
            <Link
              href={companyInfo.insta}
              target="_blank"
              className={styles.header__linkInsta}
            >
              <SvgIcon name="insta" className={styles.header__insta} />
            </Link>
          </div>
        </div>
        <div className={styles.header__linkListPc}>
          <div className={styles.header__linkItemPc}>
            <Link
              href={`tel:${companyInfo.phone}`}
              className={styles.header__linkTelPc}
            >
              <SvgIcon name="tel" className={styles.header__telPc} />
              {companyInfo.phone}
              <span>受付時間 9:00〜17:30</span>
            </Link>
          </div>
          <div className={styles.header__linkItemPc}>
            <Link
              href={companyInfo.insta}
              target="_blank"
              className={styles.header__linkInstaPc}
            >
              <SvgIcon name="insta" className={styles.header__instaPc} />
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
