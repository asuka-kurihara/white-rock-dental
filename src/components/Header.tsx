import { SvgIcon } from '@/assets/img/SvgIcon';
import styles from '@/components/Header.module.scss';
import { companyInfo } from '@/utils/companyInfo';
import Link from 'next/link';
// 指定のパスからインスタアイコンをインポート
import IconInsta from '@/assets/img/common/IconInsta.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        {/* ロゴ */}
        <Link href="/" className={styles.header__logo}>
          <SvgIcon name="logo" className={styles.header__logo} />
        </Link>

        {/* SP版ナビゲーション（既存の構成を維持） */}
        <div className={styles.header__linkList}>
          <div className={styles.header__linkItem}>
            <Link href={`tel:${companyInfo.phone}`} className={styles.header__linkTel}>
              <SvgIcon name="tel" className={styles.header__tel} />
            </Link>
          </div>
          <div className={styles.header__linkItem}>
            <Link href={companyInfo.insta} target="_blank" className={styles.header__linkInsta}>
              {/* SP版も統一感のため新しいアイコンを使用 */}
              <img src={IconInsta.src} alt="Instagram" className={styles.header__insta} />
            </Link>
          </div>
        </div>

        {/* PC版ナビゲーション */}
        <nav className={styles.header__nav}>
          <ul className={styles.header__menu}>
            {/* ホーム */}
            <li className={styles.header__menuItem}>
              <Link href="/" className={styles.header__menuLink}>
                ホーム
              </Link>
            </li>

            {/* 採用情報（ホバーでメニュー表示） */}
            <li className={`${styles.header__menuItem} ${styles.header__recruit}`}>
              <span className={styles.header__menuLink}>採用情報</span>
              <div className={styles.header__dropdown}>
                <Link href="/recruit/hygienist" className={styles.header__dropdownItem}>
                  衛生士の皆さまへ
                </Link>
                <Link href="/recruit/dentist" className={styles.header__dropdownItem}>
                  歯科医師の皆さまへ
                </Link>
              </div>
            </li>
          </ul>

          {/* コンタクトエリア */}
          <div className={styles.header__contact}>
            <Link href={`tel:${companyInfo.phone}`} className={styles.header__linkTelPc}>
              <SvgIcon name="tel" className={styles.header__telPc} />
              {companyInfo.phone}
            </Link>
            {/* 指定の52pxサイズで表示 */}
            <Link href={companyInfo.insta} target="_blank" className={styles.header__linkInstaPc}>
              <img src={IconInsta.src} alt="Instagram" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export { Header };