'use client';

import React from 'react';
import styles from './recruit.module.scss';
import { ImageUtil } from '@/utils/ImageUtil';
import commonHeroImg from '@/assets/img/recruit/recruit_title.png';

export interface ScheduleItem {
  time: string;
  event: string;
  images: string[];
}

type Props = {
  jobTitle: string;
  workDescription: string;
  location: string;
  workHours: string;
  salaryText: string;
  requirements: string;
  benefits: React.ReactNode;
  annualModel?: React.ReactNode;
  messageContent: React.ReactNode;
  scheduleLists?: ScheduleItem[];
  galleryImages?: string[];
};

export const RecruitTemplate = ({ 
  jobTitle, 
  workDescription,
  location,
  workHours,
  salaryText, 
  requirements, 
  benefits,
  annualModel,
  messageContent,
  scheduleLists,
  galleryImages
}: Props) => {
  return (
    <div className={styles.recruit}>
      {/* 1. MV部分 */}
      <div className={styles.recruit__mv}>
        <div 
          className={styles.recruit__mvInner} 
          style={{ backgroundImage: `url(${commonHeroImg.src})` }}
          aria-label={`${jobTitle}の皆さまへ`}
        >
          <h1 className={styles.recruit__mvTitle}>{jobTitle}の皆さまへ</h1>
        </div>
      </div>

      <div className={styles.recruit__container}>
        {/* 2. リードメッセージ */}
        <section className={styles.recruit__message}>
          <div className={styles.recruit__messageBody}>
            {messageContent}
          </div>

          {galleryImages && galleryImages.length > 0 && (
            <div className={styles.recruit__gallery}>
              {galleryImages.map((src, index) => (
                <div key={index} className={styles.recruit__galleryItem}>
                  <ImageUtil
                    srcSp={src}
                    widthSp={345}
                    heightSp={230}
                    srcPc={src}
                    widthPc={400}
                    heightPc={260}
                    alt={`活動風景${index + 1}`}
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 3. 募集要項テーブル */}
        <section className={styles.recruit__tableSection}>
          <table className={styles.recruit__table}>
            <tbody>
              <tr><th>仕事内容</th><td>{workDescription}</td></tr>
              <tr><th>勤務地</th><td>{location}</td></tr>
              <tr><th>勤務時間</th><td>{workHours}</td></tr>
              <tr><th>給与</th><td>{salaryText}</td></tr>
              <tr><th>応募資格</th><td>{requirements}</td></tr>
              <tr><th>福利厚生</th><td>{benefits}</td></tr>
              {annualModel && (
                <tr><th>年収モデルケース</th><td>{annualModel}</td></tr>
              )}
            </tbody>
          </table>
        </section>

        {/* 4. 強みセクション */}
        <section className={styles.recruit__strengths}>
          <h2 className={styles.recruit__sectionTitle}>ホワイトロック歯科の強み</h2>
          <ul className={styles.recruit__strengthList}>
            <li className={styles.recruit__strengthItem}>
              <span className={styles.recruit__strengthNumber}>01</span>
              <strong className={styles.recruit__strengthTitle}>
                勤務形態には柔軟に対応<br />（日数・時間など）
              </strong>
              <p className={styles.recruit__strengthText}>
                柔軟なシフト。<br />多種多様な働き方に対応。
              </p>
            </li>
            <li className={styles.recruit__strengthItem}>
              <span className={styles.recruit__strengthNumber}>02</span>
              <strong className={styles.recruit__strengthTitle}>
                余裕をもった<br />訪問スケジュール<br />（e.g. ８〜９件／日）
              </strong>
              <p className={styles.recruit__strengthText}>
                チームで診療・訪問。<br />未経験者もサポートで安心。
              </p>
            </li>
            <li className={styles.recruit__strengthItem}>
              <span className={styles.recruit__strengthNumber}>03</span>
              <strong className={styles.recruit__strengthTitle}>
                やりがいと社会貢献を<br />感じられる地域医療の現場
              </strong>
              <p className={styles.recruit__strengthText}>
                自分らしく生き生きと働ける職場。<br />一生を笑顔で。
              </p>
            </li>
          </ul>
        </section>

        {/* 5. スケジュール */}
        {scheduleLists && scheduleLists.length > 0 && (
          <section className={styles.recruit__schedule}>
            <h2 className={styles.recruit__sectionTitle}>1日のスケジュール例</h2>
            <div className={styles.recruit__timeline}>
              {scheduleLists.map((item, index) => (
                <div key={index} className={styles.recruit__timelineRow}>
                  <div className={styles.recruit__timelineDot}></div>
                  <div className={styles.recruit__timelineTime}>{item.time}</div>
                  <div className={styles.recruit__timelineContent}>
                    <p>{item.event}</p>
                    {item.images && item.images.length > 0 && (
                      <div className={styles.recruit__timelineImageList}>
                        {item.images.map((imgSrc, imgIndex) => (
                          <div key={imgIndex} className={styles.recruit__timelineImage}>
                            <ImageUtil
                              srcSp={imgSrc}
                              widthSp={345}
                              heightSp={200}
                              srcPc={imgSrc}
                              widthPc={600}
                              heightPc={350}
                              alt={`${item.event}-${imgIndex}`}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. 応募方法 */}
        <section className={styles.recruit__entry}>
          <h2 className={styles.recruit__sectionTitle}>応募方法</h2>
          <div className={styles.recruit__entryInner}>
            <p className={styles.recruit__entryLead}>
              以下の内容を記載のうえ、メールまたは応募フォームよりご応募ください。
            </p>
            <ul className={styles.recruit__entryList}>
              <li>お名前・ご連絡先</li>
              <li>応募職種・勤務可能日</li>
              <li>簡単な職務経歴</li>
            </ul>
            <p className={styles.recruit__entryText}>
              書類選考のうえ、面接日程をご案内いたします。見学やご質問も随時受け付けておりますので、お気軽にご連絡ください。
            </p>
          </div>
        </section>

        {/* 7. 問い合わせ */}
        <section className={styles.recruit__contact}>
          <h2 className={styles.recruit__sectionTitle}>問い合わせ</h2>
          <div className={styles.recruit__contactBody}>
            <div className={styles.recruit__contactInfo}>
              <p>ホワイトロック歯科</p>
              <p>採用担当：橋場</p>
              <p>メール：t-hashiba@yuyusukoyakakai.com</p>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJW8UjTSSxqtWFzULSlNm72jzRiUbfAEkdkcNWpf-nMMh-3g/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className={styles.recruit__contactBtn}>
              応募フォームはこちら
            </a>
            <p className={styles.recruit__contactNote}>
              皆さまのご応募を心よりお待ちしております。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};