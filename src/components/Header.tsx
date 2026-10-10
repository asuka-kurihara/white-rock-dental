"use client";

import { useState } from "react";
import Link from "next/link";
import { SvgIcon } from "@/assets/img/SvgIcon";
import { companyInfo } from "@/utils/companyInfo";
import IconInsta from "@/assets/img/common/IconInsta.svg";
import styles from "./Header.module.scss";

const LABEL_ABOUT = "ホワイトロック歯科について";
const LABEL_GREETING = "院長挨拶";
const LABEL_FARM = "わたしたちの畑";
const LABEL_VISIT = "訪問歯科診療をお探しの方へ";
const LABEL_OUT = "外来歯科診療をお探しの方へ";
const LABEL_RECRUIT = "採用情報";
const LABEL_HYGIENIST = "歯科衛生士の皆さまへ";
const LABEL_DENTIST = "歯科医師の皆さまへ";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__topRow}>
          {/* ロゴエリア */}
          <Link href="/" className={styles.header__logo} onClick={closeMenu}>
            <SvgIcon name="logo" />
          </Link>

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

          {/* --- SP版：ハンバーガーボタン（767px以下） --- */}
          <button className={styles.header__trigger} onClick={toggleMenu}>
            <span className={styles.header__triggerIcon}>{isOpen ? "×" : "☰"}</span>
            <span className={styles.header__triggerText}>{isOpen ? "とじる" : "メニュー"}</span>
          </button>
        </div>
        
        {/* 開閉時、スクロールコンテンツが固定ロゴに被るのを防ぐ背景マスク */}
        <div className={`${styles.header__spMask} ${isOpen ? styles.isActive : ""}`} />

        {/* --- PC版ナビゲーション（768px以上） --- */}
        <nav className={styles.header__nav}>
          <ul className={styles.header__menu}>
            <li className={styles.header__menuItem}>
              <Link href="/" className={styles.header__menuLink}>ホーム</Link>
            </li>
            <li className={`${styles.header__menuItem} ${styles.header__hasDropdown}`}>
              <span className={styles.header__menuLink}>わたしたち</span>
              <div className={styles.header__dropdown}>
                <Link href="/clinic" className={styles.header__dropdownItem}>
                  {LABEL_ABOUT}
                </Link>
                <Link href="/message" className={styles.header__dropdownItem}>
                  {LABEL_GREETING}
                </Link>
                <Link href="/farm" className={styles.header__dropdownItem}>
                  {LABEL_FARM}
                </Link>
              </div>
            </li>
            <li className={`${styles.header__menuItem} ${styles.header__hasDropdown}`}>
              <span className={styles.header__menuLink}>ご利用方法</span>
              <div className={styles.header__dropdown}>
                <Link href="/flow-information" className={styles.header__dropdownItem}>
                  ご利用の流れ
                </Link>
                <Link href="/home-visits" className={styles.header__dropdownItem}>
                  {LABEL_VISIT}
                </Link>
                <Link href="/outpatient-care" className={styles.header__dropdownItem}>
                  {LABEL_OUT}
                </Link>
              </div>
            </li>
            <li className={styles.header__menuItem}>
              <Link href="/price" className={styles.header__menuLink}>料金表</Link>
            </li>
            <li className={`${styles.header__menuItem} ${styles.header__hasDropdown}`}>
              <span className={styles.header__menuLink}>{LABEL_RECRUIT}</span>
              <div className={styles.header__dropdown}>
                <Link href="/recruit/hygienist" className={styles.header__dropdownItem}>{LABEL_HYGIENIST}</Link>
                <Link href="/recruit/dentist" className={styles.header__dropdownItem}>{LABEL_DENTIST}</Link>
              </div>
            </li>
            <li className={styles.header__menuItem}>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSduxIRzjnSex6iQLbN3-mSCet4QHmdBdpuoYRkDYjggCJ9gig/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.header__menuLink}
              >
                お問い合わせ
              </Link>
            </li>
            <li className={styles.header__menuItem}>
              <Link href="/news" className={styles.header__menuLink}>お知らせ</Link>
            </li>
          </ul>
        </nav>
        {/* --- SP版：フルスクリーンメニュー --- */}
        <nav className={`${styles.header__spNav} ${isOpen ? styles.isActive : ""}`}>
          <div className={styles.header__spNavInner}>
            <div className={styles.header__spNavSpacer} />

            <ul className={styles.header__spList}>
              <li>
                <Link href="/" onClick={closeMenu}>ホーム</Link>
              </li>
              <li>
                <span className={styles.header__spSubTitle}>わたしたち</span>
                <ul className={styles.header__spSubList}>
                  <li>
                    <Link href="/clinic" onClick={closeMenu}>{LABEL_ABOUT}</Link>
                  </li>
                  <li>
                    <Link href="/message" onClick={closeMenu}>{LABEL_GREETING}</Link>
                  </li>
                  <li>
                    <Link href="/farm" onClick={closeMenu}>{LABEL_FARM}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <span className={styles.header__spSubTitle}>ご利用方法</span>
                <ul className={styles.header__spSubList}>
                  <li>
                    <Link href="/flow-information" onClick={closeMenu}>ご利用の流れ</Link>
                  </li>
                  <li>
                    <Link href="/home-visits" onClick={closeMenu}>{LABEL_VISIT}</Link>
                  </li>
                  <li>
                    <Link href="/outpatient-care" onClick={closeMenu}>{LABEL_OUT}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/price" onClick={closeMenu}>料金表</Link>
              </li>
              <li>
                <span className={styles.header__spSubTitle}>{LABEL_RECRUIT}</span>
                <ul className={styles.header__spSubList}>
                  <li>
                    <Link href="/recruit/hygienist" onClick={closeMenu}>{LABEL_HYGIENIST}</Link>
                  </li>
                  <li>
                    <Link href="/recruit/dentist" onClick={closeMenu}>{LABEL_DENTIST}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSduxIRzjnSex6iQLbN3-mSCet4QHmdBdpuoYRkDYjggCJ9gig/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/news" onClick={closeMenu}>お知らせ</Link>
              </li>
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
