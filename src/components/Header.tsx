import { SvgIcon } from '@/assets/img/SvgIcon';
import styles from '@/components/Header.module.scss';
import { companyInfo } from '@/utils/companyInfo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <a href="/" className={styles.header__logo}>
          <SvgIcon name="logo" className={styles.header__logo} />
        </a>
        <div className={styles.header__linkList}>
          <div className={styles.header__linkItem}>
            <a href={`tel:${companyInfo.phone}`} className={styles.header__linkTel}>
              <SvgIcon name="tel" className={styles.header__tel} />
            </a>
          </div>
          <div className={styles.header__linkItem}>
            <a href="" className={styles.header__linkInsta}>
              <SvgIcon name="insta" className={styles.header__insta} />
            </a>
          </div>
        </div>
        <div className={styles.header__linkListPc}>
          <div className={styles.header__linkItemPc}>
            <a href={`tel:${companyInfo.phone}`} className={styles.header__linkTelPc}>
              <SvgIcon name="tel" className={styles.header__telPc} />
              {companyInfo.phone}
              <span>受付時間  9:00〜18:00</span>
            </a>
          </div>
          <div className={styles.header__linkItemPc}>
            <a href="" className={styles.header__linkInstaPc}>
              <SvgIcon name="insta" className={styles.header__instaPc} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
