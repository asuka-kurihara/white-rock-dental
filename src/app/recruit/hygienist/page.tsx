import { RecruitTemplate } from '@/page/recruit/RecruitTemplate';

// スケジュール画像をインポート（素材が揃うまで同じものを使い回す設定）
import schImg01 from '@/assets/img/recruit/schedule_hygienist01.png';
import schImg02 from '@/assets/img/recruit/schedule_hygienist02.png';
import schImg03 from '@/assets/img/recruit/schedule_hygienist03.png';
import schImg04 from '@/assets/img/recruit/schedule_hygienist04.png';
import schImg04_02 from '@/assets/img/recruit/schedule_hygienist04_02.png';
import schImg04_03 from '@/assets/img/recruit/schedule_hygienist04_03.png';
import schImg05 from '@/assets/img/recruit/schedule_hygienist05.png';
import schImg06 from '@/assets/img/recruit/schedule_hygienist06.png';
import gallery01 from '@/assets/img/recruit/gallery_hygienist01.png';
import gallery02 from '@/assets/img/recruit/gallery_hygienist02.png';
import gallery03 from '@/assets/img/recruit/gallery_hygienist03.png';
import gallery04 from '@/assets/img/recruit/gallery_hygienist04.png';

export default function Page() {
  const hygienistSchedule = [
    { 
      time: '９：３０', 
      event: '出社', 
      images: [schImg01.src]
    },
    { 
      time: '１０：００', 
      event: '車に乗り込む', 
      images: [schImg02.src]
    },
    { 
      time: '１２：００', 
      event: 'お昼休憩', 
      images: [schImg03.src]
    },
    { 
      time: '１３：００', 
      event: '訪問開始', 
      images: [schImg04.src, schImg04_02.src, schImg04_03.src]
    },
    { 
      time: '１７：００', 
      event: '帰院', 
      images: [schImg05.src]
    },
    { 
      time: '１８：００', 
      event: '退勤', 
      images: [schImg06.src]
    },
  ];

  return (
    <RecruitTemplate 
      jobTitle="歯科衛生士"
      workDescription="訪問歯科の口腔ケア、一般歯科診療の補助、摂食嚥下リハビリ・食支援（可能な方）"
      location="神奈川県厚木市妻田東3丁目16番22号2階（訪問エリア：16㎞圏内）"
      workHours="週1～応相談（9:30～18:30を基本。応相談）"
      salaryText="時給1,500円～2,000円　（日数・経験によって優遇）"
      requirements="歯科衛生士免許（訪問診療未経験者も歓迎）"
      benefits={
        <>
          交通費支給
        </>
      }
      // annualModel={
      //   <>
      //     新卒1年目：月給25万、賞与年2回／年間支給額合計（残業除く）／340万円<br />
      //     衛生士歴5年目（経験者）：月給30万、賞与年2回／年間支給額合計（残業除く）／420万円<br />
      //     （その他、経験者は経験に応じて支給しておりますのでご相談ください。）
      //   </>
      // }
      messageContent={
        <>
          ”あの仕事をやってみたいな”　”もっとこうできたらいいな”<br />
          働き方にご”希望”があれば、私たちに聞かせてください。<br /><br />
          ホワイトロックは、一般外来と在宅や施設への訪問診療を展開、<br />
          患者さまの一生を通じた地域医療を提供しています。<br /><br />
          外来も訪問も、できれば両方やってみたい。<br />
          まだまだ子育てに手がかかる。介護がある。<br />
          でも、仕事やスキルアップは諦めたくない。<br />
          そろそろ次のステップにチャレンジしたい。<br />
          もっと患者さんと丁寧に関わっていきたい。<br /><br />
          だいじょうぶ！私たちは、好奇心をもってチャレンジしたいあなたを応援します。<br />
          専門性を活かしながら、自分の可能性や得意分野をみつけて、”自分らしい"働き方をしてみませんか？<br />
          未経験でもだいじょうぶ！仕事も学びもサポートいたします。<br />
          一生を笑顔で楽しめるコミュニティを一緒につくりましょう。
        </>
      }
      scheduleLists={hygienistSchedule}
      galleryImages={[gallery01.src, gallery02.src, gallery03.src, gallery04.src]}
    />
  );
}