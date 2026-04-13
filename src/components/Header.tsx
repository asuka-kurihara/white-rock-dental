"use client";

import { useState } from "react";
import Link from "next/link";
import { SvgIcon } from "@/assets/img/SvgIcon";
import { companyInfo } from "@/utils/companyInfo";
import IconInsta from "@/assets/img/common/IconInsta.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        {/* ロゴエリア */}
        <Link href="/" className={styles.header__logo} onClick={closeMenu}>
          <SvgIcon name="logo" />
        </Link>

        {/* --- PC版ナビゲーション（768px以上） --- */}
        <nav className={styles.header__nav}>
          <ul className={styles.header__menu}>
            <li className={styles.header__menuItem}>
              <Link href="/" className={styles.header__menuLink}>ホーム</Link>
            </li>
            <li className={`${styles.header__menuItem} ${styles.header__recruit}`}>
              <span className={styles.header__menuLink}>採用情報</span>
              <div className={styles.header__dropdown}>
                <Link href="/recruit/hygienist" className={styles.header__dropdownItem}>歯科衛生士の皆さまへ</Link>
                <Link href="/recruit/dentist" className={styles.header__dropdownItem}>歯科医師の皆さまへ</Link>
              </div>
            </li>
            <li className={styles.header__menuItem}>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSduxIRzjnSex6iQLbN3-mSCet4QHmdBdpuoYRkDYjggCJ9gig/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className={styles.header__menuLink}>お問い合わせ</Link>
            </li>
          </ul>

          <div className={styles.header__contact}>
            {/* PC版：赤い大きな電話番号 */}
            <Link href={`tel:${companyInfo.phone}`} className={styles.header__linkTelPc}>
              <SvgIcon name="tel" className={styles.header__telPc} />
              {companyInfo.phone}
            </Link>
            {/* PC版：52pxのInstagram */}
            <Link href={companyInfo.insta} target="_blank" className={styles.header__linkInstaPc}>
              <img src={IconInsta.src} alt="Instagram" />
            </Link>
          </div>
        </nav>

        {/* --- SP版：ハンバーガーボタン（767px以下） --- */}
        <button className={styles.header__trigger} onClick={toggleMenu}>
          <span className={styles.header__triggerIcon}>{isOpen ? "×" : "☰"}</span>
          <span className={styles.header__triggerText}>{isOpen ? "とじる" : "メニュー"}</span>
        </button>

        {/* --- SP版：フルスクリーンメニュー --- */}
        <nav className={`${styles.header__spNav} ${isOpen ? styles.isActive : ""}`}>
          <div className={styles.header__spNavInner}>
            <div className={styles.header__spNavTop}>
              <div className={styles.header__spNavLogo}>
                <SvgIcon name="logo" />
              </div>
            </div>

            <ul className={styles.header__spList}>
              <li><Link href="/" onClick={closeMenu}>ホーム</Link></li>
              <li>
                <span className={styles.header__spSubTitle}>採用情報</span>
                <ul className={styles.header__spSubList}>
                  <li><Link href="/recruit/hygienist" onClick={closeMenu}>歯科衛生士の皆さまへ</Link></li>
                  <li><Link href="/recruit/dentist" onClick={closeMenu}>歯科医師の皆さまへ</Link></li>
                </ul>
              </li>
              <li><Link href="/contact" onClick={closeMenu}>お問い合わせ</Link></li>
            </ul>

            <div className={styles.header__spButtons}>
              <Link href={`tel:${companyInfo.phone}`} className={styles.header__btnTel}>
                <SvgIcon name="tel" />
                <span>{companyInfo.phone}</span>
              </Link>
              <Link href={companyInfo.insta} target="_blank" className={styles.header__btnInsta}>
                <img src={IconInsta.src} alt="Instagram" />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};