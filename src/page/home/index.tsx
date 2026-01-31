'use client';

import { useModal } from '@/components/Modal';
import styles from '@/page/home/home.module.scss';
import { ImageUtil } from '@/utils/ImageUtil';
import { companyInfo } from '@/utils/companyInfo';
import { ClinicHours } from '@/page/home/ClinicHours';
import { TopCarousel } from '@/page/home/TopCarousel';
import Link from 'next/link';

// images
import imageConcept from '@/assets/img/top/concept.png';
import imageAccess from '@/assets/img/top/access.png';
import bannerRecruitPc from '@/assets/img/top/banner_recruit_pc.png';
import bannerRecruitSp from '@/assets/img/top/banner_recruit_sp.png';
import iconCavities from '@/assets/img/top/icon_cavities.svg';
import iconOralRehabilitation from '@/assets/img/top/icon_oral_rehabilitation.svg';
import iconOraCare from '@/assets/img/top/icon_ora_care.svg';
import iconDentures from '@/assets/img/top/icon_dentures.svg';
import iconToothExtraction from '@/assets/img/top/icon_tooth_extraction.svg';

const treatmentLists = [
  {
    id: 1,
    title: '口腔ケア',
    icon: iconOraCare,
    content: `口腔ケアとは、健康を維持するために、お口全体（歯や歯茎だけでなく、舌や頬の内側、唇など）の清潔を保つお手入れです。\n\n「寝たきりだから...」「高齢者だから...」。ご自分やご家族の歯みがきに悩んでいても、だいじょうぶ。\n\n私たち専門家のケアは、虫歯や歯周病を予防し、誤嚥や感染症のリスクを減らします。食事や会話を楽しんで、”自分らしく生き生きと”、毎日を笑顔で暮らしませんか。`,
  },
  {
    id: 2,
    title: '口腔リハビリ',
    icon: iconOralRehabilitation,
    content: `口腔リハビリは、お口の体操です。加齢や後遺症などにより、「最近、食べにくい、むせやすい、うまく話せない…」。\n\nでも、だいじょうぶ。お口や舌の運動、マッサージやストレッチなどで、食べる・飲みこむ・話す力を取り戻しましょう。\n\n私たちは、専門的なケアだけでなく、一緒に歌ったり、一緒にハーモニカを吹いたり、”自分らしく生き生きと”楽しめるリハビリメニューをそろえています。`,
  },
  {
    id: 3,
    title: 'むし歯・歯周病',
    icon: iconCavities,
    content: `「寝たきりだから...」「車いすだから…」通院がむずかしくても、だいじょうぶ。私たちは、訪問専用の機器をそろえています。\n\nご自宅にいながら、歯を削る・詰めるなどの虫歯の治療、歯ブラシでは取り切れない歯と歯茎の間の汚れを落すなどの歯周病の予防や治療が受けられます。\n\n歯の状態を確認するレントゲン撮影も、麻酔も使用できます。安心してご受診ください。`,
  },
  {
    id: 4,
    title: '入れ歯の相談',
    icon: iconDentures,
    content: `「入れ歯があわない…」でも、歯医者さんにいけない。だいじょうぶ。入れ歯の作成、修理や調整も、ご自宅でできます。 訪問診療で最も多い依頼は、入れ歯の修理や作成です。 \n\n【入れ歯ができるまでの流れ】\n\n1. お口の診察\n歯科医師がお口の状態を確認します。\n\n2. 型を取る（型取り）\n歯ぐきの形に合わせて型を取ります。 \n\n3. かみあわせをとる（咬合採得）\n患者さんの顎の位置を記録します。  \n\n4. 試し入れ（試適）\n完成前の入れ歯をはめて、痛みや違和感がないかなど最終チェックをします。 \n\n5. 完成・調整\n完成した入れ歯をお渡しします。必要に応じて、随時調整します。 `,
  },
  {
    id: 5,
    title: '抜歯',
    icon: iconToothExtraction,
    content: `「歯がぐらぐらして食べられない…」「歯茎が膿んで痛くて眠れない…」など、どうしても抜歯が必要な場合もあります。\n\nでも、安心してください。私たちは、かかりつけの医師と連携し、 体調の管理をしながら、清潔な器具と総合的な判断のもと、安全に抜歯をします。\n\nご自宅での処置がむずかしい場合は、病院歯科や口腔外科をご紹介します。 `,
  },
];

const HomeIndex = () => {
  const { open } = useModal();

  const openModal = ({ id }: { id: number }) => {
    const modalContent = treatmentLists.find(treatment => treatment.id === id);
    if (!modalContent) return;

    open(
      <div className={styles.home__modal}>
        <div className={styles.home__modalImage}>
          <div className={styles.home__modalImageIcon}>
            <ImageUtil
              srcSp={modalContent.icon.src}
              widthSp={60}
              heightSp={60}
              alt={modalContent.title}
            />
          </div>
          <h2 className={styles.home__modalTitle}>{modalContent.title}</h2>
        </div>
        <p className={styles.home__modalContent}>{modalContent.content}</p>
      </div>,
      {
        closeOutside: true,
      }
    );
  };

  return (
    <>
      <h1 className="hidden-text">あなたの街の、新しい歯医者。</h1>
      <div className={styles.home__mv}>
        <TopCarousel />
      </div>
      <div className={styles.home__content}>
        <div className={styles.home__contentText}>
          <p>
            「もっとこうなったらいいのに…」「いつかやってみたいけど…」 歯や口について、ひとりで悩んだり、ひとりではためらったり、一度はあきらめたりした、あなたの“希望”を聞かせてください。 
          </p>
          <p>歯が一本しかなくても、だいじょうぶ。まだー本のこっています！ うまくのみこめない？だいじょうぶ、リハビリをしてみませんか 。私たちは、計画的で丁寧な診療を通じて、あなたがまだもっている 「なれること」「やれること」を、あなたとともに見つけ出します。 可能性を活かし、“希望”に向かうあなたを、そっと、そして全力で、ささえ続けます。 </p>
          <p>
            ”悠々すこやか”なこころとからだを、 自分らしく生き生きと暮らせる人生を、 一生を笑顔で楽しめるコミュニティを、 ここホワイトロックで、一緒につくりませんか？ 
          </p>
        </div>
        <div className={styles.home__contentImage}>
          <ImageUtil
            srcSp={imageConcept.src}
            widthSp={345}
            heightSp={267}
            alt="Concept"
          />
        </div>
      </div>
      <section className={styles.home__treatment}>
        <div className={styles.home__treatmentInner}>
          <h2 className={styles.home__treatmentTitle}>
            <span>TREATMENT</span>診療案内
          </h2>
          <ul className={styles.home__treatmentList}>
            {treatmentLists.map((treatment, index) => (
              <li key={index}>
                <button onClick={() => openModal({ id: treatment.id })}>
                  <ImageUtil
                    srcSp={treatment.icon.src}
                    widthSp={60}
                    heightSp={60}
                    alt={treatment.title}
                  />
                  <em>{treatment.title}</em>
                  <span></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.home__access}>
        <div className={styles.home__accessInner}>
          <div className={styles.home__accessContent}>
            <h2 className={styles.home__accessTitle}>
              <span>ACCESS</span>アクセス
            </h2>
            <p className={styles.home__accessAddress}>
              &#12306;{companyInfo.postalCode}
              <br />
              {companyInfo.address}
            </p>
            <div className={styles.home__accessImage}>
              <ImageUtil
                srcSp={imageAccess.src}
                widthSp={335}
                heightSp={170}
                alt="Access"
              />
            </div>
          </div>
          <div className={styles.home__accessMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.8312460192697!2d139.35987161192475!3d35.45897204203632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601900032c9ae101%3A0x98a3a6c22c3e381c!2z44CSMjQzLTA4MTMg56We5aWI5bed55yM5Y6a5pyo5biC5aa755Sw5p2x77yT5LiB55uu77yR77yW4oiS77yS77yS!5e0!3m2!1sja!2sjp!4v1758198809024!5m2!1sja!2sjp"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <section className={styles.home__clinicHours}>
        <div className={styles.home__clinicHoursInner}>
          <div className={styles.home__clinicHoursContent}>
            <ClinicHours />
          </div>
          <div className={styles.home__clinicHoursContact}>
            <p className={styles.home__clinicHoursContactTitle}>
              ご予約はこちら
            </p>
            <p className={styles.home__clinicHoursContactTel}>
              TEL.<a href={`tel:${companyInfo.phone}`}><span>{companyInfo.phone}</span></a>
            </p>
            <p className={styles.home__clinicHoursContactTime}>
              受付時間 9:30〜18:00
            </p>
          </div>
        </div>
      </section>
      <section className={styles.home__recruit}>
        <div className={styles.home__recruitInner}>
          <div className={styles.home__recruitImage}>
            <ImageUtil
              srcSp={bannerRecruitSp.src}
              widthSp={345}
              heightSp={495}
              srcPc={bannerRecruitPc.src}
              widthPc={1360}
              heightPc={390}
              alt="Recruit"
            />
          </div>
         <section>
            <h2 className={styles.home__recruitTitle}>募集職</h2>
            <div className={styles.home__recruitLinks}>
              <Link href="/recruit/hygienist" className={styles.home__recruitLinkBtn}>
                歯科衛生士
              </Link>
              <Link href="/recruit/dentist" className={styles.home__recruitLinkBtn}>
                歯科医師
              </Link>
            </div>
          </section>

          {/* <section>
            <h2 className={styles.home__recruitTitle}>ホワイトロック歯科の強み</h2>
            <ul className={styles.home__recruitList}>
              <li className={styles.home__recruitItem}>
                <div className={styles.home__recruitItemContent}>
                  <p className={styles.home__recruitItemNumber}>01</p>
                  <p className={styles.home__recruitItemTitle}>地域医療に貢献できる<br />実感が持てる環境です！</p>
                </div>
                <p className={styles.home__recruitItemText}>在宅での訪問診療から総合病院での口腔ケア、施設での口腔ケア指導など幅広く活躍できます。</p>
              </li>
              <li className={styles.home__recruitItem}>
                <div className={styles.home__recruitItemContent}>
                  <p className={styles.home__recruitItemNumber}>02</p>
                  <p className={styles.home__recruitItemTitle}>柔軟な勤務スタイルに<br />対応</p>
                </div>
                <p className={styles.home__recruitItemText}>子育てや介護など、ライフスタイルの変化にも柔軟に対応。安心して長く働き続ける環境を作っています。</p>
              </li>
              <li className={styles.home__recruitItem}>
                <div className={styles.home__recruitItemContent}>
                  <p className={styles.home__recruitItemNumber}>03</p>
                  <p className={styles.home__recruitItemTitle}>予約制で担当医制！</p>
                </div>
                <p className={styles.home__recruitItemText}>無理のないスケジュールで訪問未経験でも安心</p>
              </li>
            </ul>
          </section>
          <section>
            <h2 className={styles.home__recruitTitle}>募集職</h2>
            <p className={styles.home__recruitContentText}>歯科医師・歯科衛生士 土日祝休み 9:30-18:30 週１～</p>
            <p className={styles.home__recruitContentSecondText}>まずはお気軽にお問い合わせください</p>
            <p className={styles.home__recruitContentTel}>
              <span className={styles.home__recruitContentTelTitle}>TEL.</span>
              <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
              <span className={styles.home__recruitContentTelTime}>受付時間  9:30〜18:00</span>
            </p>
          </section> */}
        </div>
      </section>
    </>
  );
};

export { HomeIndex };
