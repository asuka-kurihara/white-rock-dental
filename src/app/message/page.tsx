import Image from 'next/image';
import { LowerPageTemplate } from '@/page/common/LowerPageTemplate';
import styles from './page.module.scss';
import eriMaruyama from '@/assets/img/message/eri_maruyama.png';
import directorMessage from '@/assets/img/message/director-message-139697.png';

const messageText = `「あなたなら、だいじょうぶ」。が、 私の父の口癖です。

父は、３５年間、内科医として厚木の方々を元気にしてきました。
 患者さんや“希望”によりそい、がむしゃらに働く父の姿をみて、
私は育ちました。

人生には、さまざまな「まさか」が起こります。
ひとりで悩んでいる人がいたら、話を聞く。
一緒に考え、「あなたなら、だいじょうぶ」と
その人の “希望” に、よりそいつづける。

ひとりでも多く、厚木の方々を元気にしよう。
「悠々すこやか」に、自分らしく生きられる、
笑顔で一生を楽しめるコミュニティを創ろう。

私は、そのような“希望”とともに、
ホワイトロックを開業いたしました。

私たちホワイトロックは、悠々すこやか会の一員として、
みなさんと一緒に、厚木の方々を元気にします。
みなさんと一緒に、厚木の方々の“希望”をつなぎます。
合言葉は、「あなたなら、だいじょうぶ」です！ `;

export default function Page() {
  return (
    <LowerPageTemplate title="院長挨拶">
      <section className={styles.message}>
        <p className={styles.message__text}>{messageText}</p>

        <div className={styles.message__profile}>
          <p className={styles.message__name}>院長　丸山 恵莉</p>
          <div className={styles.message__image}>
            <Image
              src={eriMaruyama}
              alt="院長 丸山恵莉"
              placeholder="blur"
            />
            <Image
              src={directorMessage}
              alt="院長メッセージ"
              placeholder="blur"
              style={{ marginTop: '2rem' }}
            />
          </div>
        </div>
      </section>
    </LowerPageTemplate>
  );
}

