'use client';

import { useModal } from '@/components/Modal';
import styles from '@/page/home/home.module.scss';
import { ImageUtil } from '@/utils/ImageUtil';
import { companyInfo } from '@/utils/companyInfo';
import { ClinicHours } from '@/page/home/ClinicHours';

// images
import mvPc from '@/assets/img/top/mv_pc.png';
import mvSp from '@/assets/img/top/mv_sp.png';
import imageConcept from '@/assets/img/top/concept.png';
import imageAccess from '@/assets/img/top/access.png';
import recruitPc from '@/assets/img/top/recruit_pc.png';
import recruitSp from '@/assets/img/top/recruit_sp.png';
import iconAestheticDentistry from '@/assets/img/top/icon_aesthetic_dentistry.svg';
import iconGeneralMedicalTreatment from '@/assets/img/top/icon_general_medical_treatment.svg';
import iconPediatricDentistry from '@/assets/img/top/icon_pediatric_dentistry.svg';
import iconPreventiveDentistry from '@/assets/img/top/icon_preventive_dentistry.svg';
import iconVisitingDentistry from '@/assets/img/top/icon_visiting_dentistry.svg';

const treatmentLists = [
  {
    id: 1,
    title: '一般診療',
    icon: iconGeneralMedicalTreatment,
    content: `一般歯科では虫歯治療や歯周病の治療など、一人一人に合った歯とお口に関する一般的な歯科治療を行います。\n\nまず基本的なお口の検査を行い、患者さま一人ひとりに合った最善・最良の治療計画を歯科医師が立案します、トリートメントコーディネーターがわかりやすく説明いたしますので、治療計画を一緒に考えていきましょう。\n\n当院ではインフォームドコンセント(相互理解)を最重視し、患者様に治療計画の内容を十分に ご理解いただいた上で治療をすすめてまいります。`,
  },
  {
    id: 2,
    title: '訪問歯科',
    icon: iconVisitingDentistry,
    content: `歯科医院への通院が困難な方に対して、歯科医師や歯科衛生士がご自宅や各種施設へ歯の検診や治療にお伺いいたします。\n\n持ち運び可能な機材をお持ちして、医院同等の治療をすることができます。`,
  },
  {
    id: 3,
    title: '審美歯科',
    icon: iconAestheticDentistry,
    content: `審美歯科治療とは、単に見せかけの美しさを求めるものではなく、本来の目的は「歯の機能回復」です。\n\n総合的な知識と技術を用い、歯科医学をベースにさまざまな方法で審美的な治療を心がけています。\n\n歯並びや歯の色にコンプレックスを持っている方に自信を持って素敵な笑顔になっていただく治療でもあります。\n\n歯並びの気になる方、変色などご相談下さい。`,
  },
  {
    id: 4,
    title: '予防歯科',
    icon: iconPreventiveDentistry,
    content: `生涯にわたって健康な歯を維持していただくために早期発見・早期治療を心掛けることはもちろん、いかに日々の生活の中でしっかりケアし、定期的に予防することができるかが重要になってきます。`,
  },
  {
    id: 5,
    title: '小児歯科',
    icon: iconPediatricDentistry,
    content: `子供のうちに、お口の役割や小児歯科では、来院することは怖いことではなく、楽しいことだと感じてもらうことを大切にしています。\n\n生えたての歯は、弱くむし歯になりやすい状態です。\n\n子供の、食生活やきちんとした歯磨きは大人にしか管理できません。\n\n大人が正しい知識と実行力を持っていれば、まず虫歯にはなりません。\n\nただ、フッ素がより効果を発揮するのもこの時期の歯です。生えたての歯にフッ素によるケアを行うことで、より効率的なむし歯予防につながります。`,
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
      <h1 className={styles.home__mv}>
        <ImageUtil
          srcPc={mvPc.src}
          srcSp={mvSp.src}
          alt="あなたの街の、新しい歯医者。"
          widthSp={355}
          heightSp={451}
          widthPc={1360}
          heightPc={590}
        />
      </h1>
      <div className={styles.home__content}>
        <div className={styles.home__contentText}>
          <p>
            2025年11月8日
            <br />
            厚木に新しい歯医者が誕生します。
            <br />
            当院は、
            <span className={styles.home__contentText_bold}>訪問診療</span>と
            <span className={styles.home__contentText_bold}>外来診療</span>
            を組み合わせた、
            <br />
            地域に根差したハイブリッド歯科です。
          </p>
          <p>
            小さなお子さんからご高齢の方まで、
            <br />
            歯のことでお困りなら、
            <br className="sp_br" />
            もう一人で悩まないでください。
          </p>
          <p>
            「通うのが難しい…」「歯医者がちょっと苦手…」
            <br />
            そんなあなたの声に寄り添い、
            <br className="sp_br" />
            患者さんはもちろん、
            <br />
            スタッフも笑顔になれる場所を目指しています。
            <br />
            あなたの笑顔が、私たちの力になります。
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
          <ClinicHours />
          <div className={styles.home__clinicHoursContact}>
            <p className={styles.home__clinicHoursContactTitle}>
              ご予約はこちら
            </p>
            <p className={styles.home__clinicHoursContactTel}>
              TEL.<span>{companyInfo.phone}</span>
            </p>
            <p className={styles.home__clinicHoursContactTime}>
              受付時間 9:00〜18:00
            </p>
          </div>
        </div>
      </section>
      <section className={styles.home__contact}>
        <div className={styles.home__contactInner}>
          <div className={styles.home__contactImage}>
            <ImageUtil
              srcSp={recruitSp.src}
              widthSp={345}
              heightSp={495}
              srcPc={recruitPc.src}
              widthPc={1360}
              heightPc={390}
              alt="Recruit"
            />
          </div>
          <div className={styles.home__contactContent}>
            <h2 className={styles.home__contactTitle}>
              患者さまの笑顔を
              <br className="sp_br" />
              つくる仲間を募集！
            </h2>
            <p className={styles.home__contactText}>
              歯科医師・歯科衛生士・歯科助手・受付スタッフ、幅広く募集中です。
              <br />
              地域に愛される歯科医院で、やりがいと働きやすさを両立しませんか？
            </p>
            <p className={styles.home__contactTel}>
              TEL.<span>{companyInfo.phone}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export { HomeIndex };
