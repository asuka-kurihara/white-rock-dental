import styles from './page.module.scss';
import Link from 'next/link';
import defaultHeroImg from '@/assets/img/recruit/recruit_title.png';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { AnchorNav } from '@/components/AnchorNav/AnchorNav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '訪問歯科診療をお探しの方へ | ホワイトロック歯科',
  description: '訪問歯科診療の受診の流れや対象となる方についてのご案内です。',
};

export default function Page() {
  return (
    <div className={styles.homeVisits}>
      <div className={styles.homeVisits__mv}>
        <div
          className={styles.homeVisits__mvInner}
          style={{ backgroundImage: `url(${defaultHeroImg.src})` }}
          aria-label="訪問歯科診療をお探しの方へ"
        >
          <h1 className={styles.homeVisits__mvTitle}>訪問歯科診療をお探しの方へ</h1>
        </div>
      </div>

      <div className={styles.homeVisits__container}>
        <Breadcrumb items={[
          { name: 'ホーム', href: '/' },
          { name: '訪問歯科診療をお探しの方へ' }
        ]} />

        <AnchorNav items={[
          { id: 'section-1', title: '訪問歯科診療でできること' },
          { id: 'section-2', title: '訪問歯科診療の受診の流れ' },
          { id: 'section-3', title: 'わたしたちの取り組み' }
        ]} />

        <section id="section-1" className={styles.homeVisits__section}>
          <h2 className={styles.homeVisits__sectionTitle}>訪問歯科診療でできること</h2>
          <div className={styles.homeVisits__content}>
            <p className={styles.homeVisits__text}>
              訪問歯科診療とは、患者さまのご自宅や施設に歯科医師や歯科衛生士が直接訪問し、診療や口腔ケアを行う歯科医療サービスです。
              当院で対応できる診療内容は次の通りです。
            </p>
            <ul className={styles.homeVisits__text} style={{ listStyle: 'disc', paddingLeft: '1.5em' }}>
              <li>むし歯や歯周病の治療</li>
              <li>入れ歯の作製や調整</li>
              <li>摂食・嚥下のサポート(専門医によるVE検査)</li>
              <li>口腔ケア（歯磨き指導、清掃など）</li>
              <li>その他、痛みや違和感の相談</li>
            </ul>
            <p className={styles.homeVisits__text}>
              これらはすべて、健康保険で対応できます。難病等の医療費助成の対象にもなりますので詳しくはスタッフまでお問い合わせください。
            </p>
          </div>
        </section>

        <section id="section-2" className={styles.homeVisits__section}>
          <h2 className={styles.homeVisits__sectionTitle}>訪問歯科診療の受診の流れ</h2>
          <div className={styles.homeVisits__content}>
            <p className={styles.homeVisits__text}>
              訪問歯科診療は、特に次のような方であれば受診することが可能です。
            </p>

            <table className={styles.homeVisits__table}>
              <tbody>
                <tr>
                  <th scope="row">
                    通院困難の方<br />
                    （高齢者の方、障がいをお持ちの方）
                  </th>
                  <td>
                    通院が困難な方であれば、入れ歯の調整やむし歯治療、嚥下評価などでご自宅に訪問することが可能です。担当のケアマネジャーに当院の訪問歯科診療を受診したい旨をご相談いただけるとスムーズだと思います。
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    病院や有料老人ホーム、<br />
                    介護保険施設に入居中の方
                  </th>
                  <td>
                    高齢者施設に入居している方でも、訪問診療に伺うことができます。まずは入院中の病院のスタッフや入所中の施設のスタッフに当院が訪問可能かお問い合わせください。
                  </td>
                </tr>
              </tbody>
            </table>

            <p className={styles.homeVisits__text}>
              わからないことがあれば下記にご相談ください。<br />
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSduxIRzjnSex6iQLbN3-mSCet4QHmdBdpuoYRkDYjggCJ9gig/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                お問い合わせはこちら
              </Link>
            </p>
          </div>
        </section>

        <section id="section-3" className={styles.homeVisits__section}>
          <h2 className={styles.homeVisits__sectionTitle}>わたしたちの取り組み</h2>
          <div className={styles.homeVisits__content}>
            <p className={styles.homeVisits__text}>
              私たちは、患者さまの”希望”を患者さまと見出し、チームが”一枚岩”となって問題を解決します。<br />丁寧かつ安全な診療と、地域・医科歯科の連携を通じて、お口の健康と食べる楽しみを支え、誰もが最期まで自分らしく生きられる、安心と”希望”にあふれるコミュニティをつくります。
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

