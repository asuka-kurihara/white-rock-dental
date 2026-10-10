import styles from './clinic.module.scss';
import { companyInfo } from '@/utils/companyInfo';
import { ClinicHours } from '@/page/home/ClinicHours';
import defaultHeroImg from '@/assets/img/recruit/recruit_title.png';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { AnchorNav } from '@/components/AnchorNav/AnchorNav';

export default function Page() {
  return (
    <div className={styles.clinic}>
      {/* 1. MV部分 */}
      <div className={styles.clinic__mv}>
        <div 
          className={styles.clinic__mvInner} 
          style={{ backgroundImage: `url(${defaultHeroImg.src})` }}
          aria-label="医院紹介"
        >
          <h1 className={styles.clinic__mvTitle}>医院紹介</h1>
        </div>
      </div>

      <div className={styles.clinic__container}>
        <Breadcrumb items={[
          { name: 'ホーム', href: '/' },
          { name: '医院紹介' }
        ]} />

        <AnchorNav items={[
          { id: 'section-clinic-1', title: '当院の特徴' },
          { id: 'section-clinic-2', title: '医院概要' },
          { id: 'section-clinic-3', title: '当院の感染症対策' }
        ]} />

        {/* 当院の特徴 */}
        <section id="section-clinic-1" className={styles.clinic__section}>
          <h2 className={styles.clinic__sectionTitle}>
            当院の特徴
          </h2>
          <div className={styles.clinic__content}>
            <p>
              私たちは、患者さんの問題と希望を、患者さんと発見します。<br></br>
              「患者さんは何に困っているか？何を気にしているか？」を、問題といいます。<br></br>
              また、「患者さん本人が望む、強い想いは何か？」を、希望とよびます。<br></br>
              もちろん、私たち医療者は、専門知識や技術を使い、医療上問題となる部分に対して、<br></br>
              医療上理想とする対応をするべきかもしれません。<br></br>
              しかし、何が「問題」であり、何が「希望」であるかを決める主体は、<br></br>
              あくまで患者さん本人であって、私たち術者ではありません。<br></br>
              なぜなら、「患者さんは何に困っているか？何を気にしているか？」は、<br></br>
              患者さんの「患者さん本人が望む、強い想い」にもとづいているからです。<br></br>
              もちろん、患者さん自身が判断できない場合は、ご家族のお考えが判断材料となります。 <br></br>
              <br></br>
              では、どのようにすれば、患者さんの内側にある問題と希望を、外側にいる私たちが発見できるのでしょうか？<br></br>
              私たちは、地域の医療者です。<br></br>
              ですから、私たちは地域医療者である以前に、地域の患者さんやご家族の「ご近所さん」のひとりでもあります。<br></br>
              私たちはまず、「よいご近所さん」となりましょう。<br></br>
              患者さんやご家族と、人と人とのしてのやりとりやおしゃべりを楽しみましょう。<br></br>
              そして、問診や診療・口腔ケア・またチーム全体の雰囲気を通じて、<br></br>
              安心して身を委ねてもらえる、よい医療者になりましょう。<br></br>
              患者さんやその家族、後見人の方々とともに、患者さんの問題と希望を発見し、<br></br>
              よいご近所づきあいー助け合い支えあう良好なコミュニティーをつくるのは、<br></br>
              「ちょっと歯にくわしい、楽しくて頼もしいご近所さん」である、私たちホワイトロックです。 
            </p>
          </div>
        </section>

        {/* 医院概要 */}
        <section id="section-clinic-2" className={styles.clinic__section}>
          <h2 className={styles.clinic__sectionTitle}>
            医院概要
          </h2>
          <table className={styles.clinic__table}>
            <tbody>
              <tr>
                <th>医院名</th>
                <td>{companyInfo.name}</td>
              </tr>
              <tr>
                <th>住所</th>
                <td>
                  〒{companyInfo.postalCode}
                  <br />
                  {companyInfo.address}
                </td>
              </tr>
              <tr>
                <th>お問い合わせ</th>
                <td>
                  TEL. <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                </td>
              </tr>
              <tr>
                <th>診療時間</th>
                <td>
                  <div className={styles.clinic__tableWrap}>
                    <ClinicHours />
                  </div>
                  <div className={styles.clinic__tableNote}>
                    <p><span>休診日：日曜、祝日</span></p>
                    <p>外来は完全予約制</p>
                    <p>訪問診療は朝9時半から、17時まで</p>
                    <p>デイサービス帰宅後など受付時間外希望の方は別途ご相談ください。</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 当院の感染症対策 */}
        <section id="section-clinic-3" className={styles.clinic__section}>
          <h2 className={styles.clinic__sectionTitle}>
            当院の感染症対策
          </h2>
          <div className={styles.clinic__content}>
            <p>
              当院では、皆さまに安心してご来院いただけるよう、以下の感染対策を徹底しています。
            </p>
          </div>
          <table className={styles.clinic__gridTable}>
            <tbody>
              <tr>
                <th>手指消毒の徹底</th>
                <td>スタッフは患者さまごとに手洗い・消毒を行います。患者さまにも来院時に手指消毒をお願いしています。</td>
              </tr>
              <tr>
                <th>マスク・<br className="sp_br" />グローブ・<br className="sp_br" />ゴーグルの着用</th>
                <td>スタッフは治療時にマスクやゴーグル、手袋を着用しています。感染症が疑われる場合には防護衣を着用して治療にあたります。</td>
              </tr>
              <tr>
                <th>治療器具の滅菌</th>
                <td>ハンドピースや治療器具は、患者さまごとに必ず滅菌・消毒しています。</td>
              </tr>
              <tr>
                <th>院内の清掃・消毒</th>
                <td>診療ユニットやドアノブなど、手が触れる場所はこまめに消毒しています。</td>
              </tr>
              <tr>
                <th>換気と飛沫対策</th>
                <td>院内では口腔外バキュームを使用し、空気中の飛沫を減らしています。院内も定期的に換気を行っています。</td>
              </tr>
              <tr>
                <th>体調確認へのご協力</th>
                <td>発熱や体調不良がある場合は、来院前にお電話ください。スタッフも毎日体調チェックを実施しています。</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
