import styles from './page.module.scss';
import defaultHeroImg from '@/assets/img/recruit/recruit_title.png';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { AnchorNav } from '@/components/AnchorNav/AnchorNav';

export default function Page() {
  return (
    <div className={styles.price}>
      {/* 1. MV部分 */}
      <div className={styles.price__mv}>
        <div 
          className={styles.price__mvInner} 
          style={{ backgroundImage: `url(${defaultHeroImg.src})` }}
          aria-label="料金"
        >
          <h1 className={styles.price__mvTitle}>料金</h1>
        </div>
      </div>

      <div className={styles.price__container}>
        <Breadcrumb items={[
          { name: 'ホーム', href: '/' },
          { name: '料金' }
        ]} />

        <AnchorNav items={[
          { id: 'section-price-1', title: '費用について' },
          { id: 'section-price-2', title: '外来診療との違い' },
          { id: 'section-price-3', title: '費用負担を軽減できる制度' },
          { id: 'section-price-4', title: '治療費の目安' },
          { id: 'section-price-5', title: 'ご利用対象' }
        ]} />

        <section id="section-price-1" className={styles.price__section}>
          <h2 className={styles.price__sectionTitle}>費用について</h2>
          <div className={styles.price__content}>
            <p>
              訪問歯科診療では、
              <strong>医療保険</strong>と<strong>介護保険（居宅療養管理指導）</strong>
              の費用が同時にかかります。
            </p>
            <p>
              ※居宅療養管理指導の指導料は、介護保険の支給限度基準額の対象外です。
              <br />
              そのため、他の介護保険サービスで支給限度基準額を利用している場合でも、訪問歯科診療をご利用いただけます。
            </p>
          </div>
        </section>

        <section id="section-price-2" className={styles.price__section}>
          <h2 className={styles.price__sectionTitle}>外来診療との違い</h2>
          <div className={styles.price__content}>
            <p>
              外来歯科診療と比べて、訪問診療の加算料（約1,000円）がかかります。
              <br />
              施設や病院では同一建物内で診療する人数によって費用が変わります。
              <br />
              詳しくは担当者にお問い合わせください。
            </p>
            <h3 className={styles.price__subsectionTitle}>例：1割負担の方の場合</h3>
            <table className={styles.price__tableTwoCol}>
              <tbody>
                <tr>
                  <th scope="row">同一建物内で1人のみ診療</th>
                  <td>1,100円（1回あたり）</td>
                </tr>
                <tr>
                  <th scope="row">同一建物内で複数人（2～9人）診療</th>
                  <td>360円（1回あたり）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="section-price-3" className={styles.price__section}>
          <h2 className={styles.price__sectionTitle}>費用負担を軽減できる制度</h2>
          <div className={styles.price__content}>
            <table className={styles.price__tableTwoCol}>
              <tbody>
                <tr>
                  <th scope="row">高額療養費制度</th>
                  <td>一定額を超えた分が払い戻されます。</td>
                </tr>
                <tr>
                  <th scope="row">医療費控除</th>
                  <td>確定申告で一部が還付される場合があります。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="section-price-4" className={styles.price__section}>
          <h2 className={styles.price__sectionTitle}>治療費の目安</h2>
          <div className={styles.price__content}>
            <p>
              1割負担の方：1回あたり約2,000円～2,500円（2025年9月現在）
              <br />
              ※症状や治療内容によって異なります。詳しくは担当医にご相談ください。
            </p>
            <h3 className={styles.price__subsectionTitle}>例</h3>
            <table className={styles.price__table}>
              <thead>
                <tr>
                  <th>治療内容</th>
                  <th>一部負担金</th>
                  <th>治療回数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>食べる訓練</td>
                  <td>約2,000円／回</td>
                  <td>1ヶ月～半年</td>
                </tr>
                <tr>
                  <td>入れ歯の調整</td>
                  <td>
                    入れ歯の修理：約5,000円
                    <br />
                    入れ歯を新しく作る（上下）：約30,000円
                  </td>
                  <td>1ヶ月～3ヶ月</td>
                </tr>
                <tr>
                  <td>
                    お口のお掃除
                    <br />
                    肺炎の予防
                  </td>
                  <td>約1,500円／回</td>
                  <td>訪問頻度や期間については相談可能です。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="section-price-5" className={styles.price__section}>
          <h2 className={styles.price__sectionTitle}>ご利用対象</h2>
          <div className={styles.price__content}>
            <p>
              在宅医療（訪問歯科診療）は、疾病や傷病のため、
              <strong>お一人で通院が困難な方</strong>が対象です。
            </p>
            <div className={styles.price__noteBlock}>
              <h3>例</h3>
              <ul>
                <li>在宅療養中で通院が困難な方</li>
                <li>入院中で通院が困難な方</li>
                <li>認知症や寝たきりの方</li>
                <li>誤嚥性肺炎を繰り返している方</li>
                <li>食事がうまくとれず困っている方</li>
                <li>胃ろうなど経管栄養で栄養をとっている方</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
