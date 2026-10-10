import { LowerPageTemplate } from '@/page/common/LowerPageTemplate';
import Image from 'next/image';
import styles from './page.module.scss';

import farm01 from '@/assets/img/farm/farm01.png';
import farm02 from '@/assets/img/farm/farm02.png';
import farm03 from '@/assets/img/farm/farm03.png';
import farm04 from '@/assets/img/farm/farm04.png';
import farm05 from '@/assets/img/farm/farm05.png';
import farm06 from '@/assets/img/farm/farm06.png';
import farm07 from '@/assets/img/farm/farm07.png';
import farm08 from '@/assets/img/farm/farm08.png';
import farm09 from '@/assets/img/farm/farm09.png';
import farm10 from '@/assets/img/farm/farm10.png';

const images = [
  farm01, farm02, farm03, farm04, farm05, 
  farm06, farm07, farm08, farm09, farm10
];

export default function FarmPage() {
  return (
    <LowerPageTemplate title="わたしたちの畑">
      <div className={styles.farm}>
        <section className={styles.farm__section}>
          <h2 className={styles.farm__title}>ホワイトロックファームの想い</h2>
          <div className={styles.farm__text}>
            <p>私たちは、畑をつくっています。みなさんといっしょに楽しく野菜をつくり、美味しくたべたいからです。畑から食卓まで、みなさんとよい時間をともにすごし、人と人としてつながりたいからです。</p>
            <p>私たちは、お口をつくっています。患者さんといっしょに”希望”を見出し、丁寧に診療しています。診療から笑顔まで、患者さんとよい時間をともにすごし、医療者と患者として、そして、人と人としてつながりたいからです。チームで支えた”希望”を、患者さんといっしょによろこびたいからです。</p>
            <p>お口づくりは、畑づくりに似ています。豊かな畑づくりは、その土を耕すところからはじまります。どれだけ高価な種をまいても、石ころやゴミだらけのかたい土に、野菜は育ちません。また、健康なお口づくりは、その環境を整えるところからはじめます。どれだけ高価な治療を施しても、プラーク（歯垢）や歯石、食渣（食べかす）だらけの拘縮した（動かしにくい）お口では、虫歯や歯周病は治りません。丁寧に土を耕すように、当院では、お口の衛生環境を整える口腔ケアや、お口の機能を維持する口腔リハビリに力を入れています。</p>
            <p>蒔かれた種は実を結びます。しかし、暑すぎれば干からび、寒すぎれば芽は出ません。手入れを怠れば虫に食われ病気になりますが、水や肥料をやりすぎても野菜は枯れてしまいます。より多く、より長く、立派に実らせるためには、それぞれの野菜にかなった時期と手入れがあります。</p>
            <p>診療は、野菜づくりに似ています。なされた診療が笑顔を結びます。しかし、患者さんには、ご都合や、お気持ちやお体の状態があります。口腔ケアを怠れば虫歯や歯周病になりますが、患者さんの意に反する治療をすれば納得のいかないお痛みやご不快をもたらしてしまいます。健康な歯を一本でも多く残し、衛生的なお口でより長く食べ、“希望”に近づく生活を実現するためには、それぞれの患者さんによりそう計画と診療が必要です。</p>
            <p>丁寧に野菜を育てるように、当院では、計画と診療に力を入れています。患者さんのご都合や、お気持ちやお体の状態によりそいつつ、患者さんと相談しながらお口のポテンシャルを最大限に活かす計画をたて、患者さんに選択していただき、丁寧に診療をすすめています。</p>
            <p>私たちホワイトロックファームのとれたて野菜は、とてもつややかでみずみずしく、自然と笑顔がこぼれるほど美味しいです！収穫の際には、ともに育てたみなでその旬の野菜を分かち合い、いっしょに美味しく食べています。</p>
            <p>お口づくりと診療は、畑づくりと野菜づくりに似ています。私たちホワイトロックの患者さんは、とてもかろやかですがすがしく、自然と笑顔がこぼれるほどうれしそうです！患者さんがご希望に近づけたお話を耳にするときには、ともに支えたチームのみなでその“希望” を分かち合い、いっしょに嬉しく喜んでいます。</p>
            <p>私たちは、医療者と患者であるとともに、人と人です。美味しい野菜をつくるように、健康な歯と衛生的なお口、“希望”に近づく生活を、いっしょに育てましょう。豊かな畑をつくるように、誰もが最期まで自分らしく生きられるコミュニティ、安心と”希望”にあふれる人と人のつながりを、いっしょに耕していきましょう。</p>
          </div>
        </section>

        <section className={styles.farm__gallery}>
          {images.map((img, index) => (
            <div key={index} className={styles.farm__galleryItem}>
              <Image src={img} alt={`Farm Image ${index + 1}`} placeholder="blur" />
            </div>
          ))}
        </section>
      </div>
    </LowerPageTemplate>
  );
}
