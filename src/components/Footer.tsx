import styles from '@/components/Footer.module.scss';
import { companyInfo } from '@/utils/companyInfo';

import { SvgIcon } from '@/assets/img/SvgIcon';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div>
          <SvgIcon name="logo" className={styles.footer__logo} />
          <p className={styles.footer__tel}>
            TEL：{companyInfo.phone}&emsp;受付時間：8:30-17:30
          </p>
          <address className={styles.footer__address}>
            {companyInfo.address}
          </address>
        </div>
        <div>
          <a href="" className={styles.footer__insta}>
            <SvgIcon name="insta" className={styles.footer__instaIcon} />
            Instagram
          </a>
        </div>
      </div>
      <div className={styles.footer__inner}>
        <ul className={styles.footer__logoList}>
          <li className={styles.footer__logoItem}>
            <a href="" className={styles.footer__logoLink}>
              <SvgIcon
                name="logoSukoyaka"
                className={styles.footer__logoIconSukoyaka}
              />
            </a>
          </li>
          <li className={styles.footer__logoItem}>
            <a href="" className={styles.footer__logoLink}>
              <SvgIcon name="logoSc" className={styles.footer__logoIconSc} />
              (有)エス・シー・プランニング
            </a>
          </li>
        </ul>
        <div>
          <p className={styles.footer__copyright}>
            Copyright &copy; White Rock,All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
