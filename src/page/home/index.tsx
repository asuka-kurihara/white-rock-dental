'use client';

import { useModal } from '@/components/Modal';
import styles from '@/page/home/home.module.scss';
import { ImageUtil } from '@/utils/ImageUtil';
import { companyInfo } from '@/utils/companyInfo';
import { ClinicHours } from '@/page/home/ClinicHours';
import { TopCarousel } from '@/page/home/TopCarousel';

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
    content: `口腔ケアとは、口の中を清潔に保ち、健康を維持するためのケアのことを指します。歯や歯茎だけでなく、舌や頬の内側、唇など口腔全体のお手入れを行います。\n\n特に高齢者や寝たきりの方、様々な理由により自分で満足に歯みがきができない方にとって、口腔ケアは非常に重要です。適切なケアを行うことで、感染症のリスクを減らし、食事や会話などの生活の質を保つことができます。`,
  },
  {
    id: 2,
    title: '口腔リハビリ',
    icon: iconOralRehabilitation,
    content: `口腔リハビリとは、口の中や口のまわりの筋肉をきたえて、話す・食べる・飲みこむなどの力を回復したり、維持したりするためのリハビリテーションです。\n\n昔より食べにくくなった、後遺症によりうまく話せなくなった、むせやすくなったり・・・そんなときに役立つのが、この口腔リハビリです。当院では一緒に歌をうたったり、ハーモニカを一緒に吹いたり、楽しいリハビリメニューも揃えています。`,
  },
  {
    id: 3,
    title: 'むし歯・歯周病',
    icon: iconCavities,
    content: `当院では訪問専用の持ち運びできる機械をつかい、ベッドサイドや車いすでも、歯を削る・詰めるなどの虫歯治療や、歯ブラシで取り切れない汚れを落とす歯周病の治療などを、受けることが可能です。歯の状態を確認するレントゲンも、ご自宅で撮影できます。痛みが強い場合には、麻酔も使用できますのでご安心ください。`,
  },
  {
    id: 4,
    title: '入れ歯の相談',
    icon: iconDentures,
    content: `訪問診療で最も多い依頼が入れ歯の修理・作成です。合わない入れ歯を無無理して使っていませんか？通院がむずかしい方でも、ご自宅で無理なく入れ歯の作成・修理・調整などの治療を受けられます。\n\n入れ歯ができるまでの流れ\n1. お口の診察\n歯科医師が現在のお口の状態を確認します。\n2. 型を取る（型取り）\n入れ歯をつくるために、歯ぐきの形に合わせて型を取ります。\n3.かみ合わせの確認\n上下の歯（または歯ぐき）がしっかり合うように調整します。\n4. 試し入れ（試適）\nできあがった入れ歯の仮のものをはめて、痛みや違和感がないかチェックします。\n5. 完成・調整\n問題がなければ、完成した入れ歯をお渡しし、必要に応じて微調整します。`,
  },
  {
    id: 5,
    title: '抜歯',
    icon: iconToothExtraction,
    content: `歯がぐらぐらして食べづらい、根っこが膿んでしまった、等どうしても抜歯を選択せざる得ない場合もあります。かかりつけの医師と連携し、 総合的に安全に抜歯ができるように情報共有をいたします。治療中は体調の管理をしながら、無理のない範囲で進めていきます。\n\nただし、ご自宅での処置がむずかしいと判断された場合も、病院歯科や口腔外科へご紹介しますので、ご安心ください。`,
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
            「もっとこうなれたら…」「いつかやってみたいけど…」そんな思い、ありませんか？
          </p>
          <p>私たちは、あなたの小さな“希望”を全力で後押しする歯科医院です。</p>
          <p>
            健康な身体は、お口から。
            <br />
            あなたのポテンシャルを引き出し、最良の口腔環境を一緒につくります。
          </p>
          <p>
            計画的で丁寧な診療を通じて、自分らしく生き生きと暮らせる毎日をサポート。
            <br />
            笑顔で一生を楽しめるコミュニティを目指しています。
          </p>
          <p>
            あなたの希望を叶えるお口づくり、
            <br />
            私たちと一緒にはじめてみませんか？
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
            <p className={styles.home__clinicHoursText}>※現在訪問しかのみ受付中。外来は準備中。</p>
          </div>
          <div className={styles.home__clinicHoursContact}>
            <p className={styles.home__clinicHoursContactTitle}>
              訪問歯科のご予約はこちら
            </p>
            <p className={styles.home__clinicHoursContactTel}>
              TEL.<span>{companyInfo.phone}</span>
            </p>
            <p className={styles.home__clinicHoursContactTime}>
              受付時間 9:00〜17:30
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
              {companyInfo.phone}
              <span className={styles.home__recruitContentTelTime}>受付時間  9:00〜17:30</span>
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export { HomeIndex };
