import { RecruitTemplate } from '@/page/recruit/RecruitTemplate';

// スケジュール画像をインポート（素材が揃うまで同じものを使い回す設定）
import schImg01 from '@/assets/img/recruit/schedule_hygienist01.png';
import schImg02 from '@/assets/img/recruit/schedule_hygienist01.png';
import schImg03 from '@/assets/img/recruit/schedule_hygienist01.png';
import schImg04 from '@/assets/img/recruit/schedule_hygienist01.png';
import schImg05 from '@/assets/img/recruit/schedule_hygienist01.png';
import schImg06 from '@/assets/img/recruit/schedule_hygienist01.png';

export default function Page() {
  const hygienistSchedule = [
    { 
      time: '９：３０', 
      event: '出社', 
      image: schImg01.src
    },
    { 
      time: '１０：００', 
      event: '車に乗り込む', 
      image: schImg02.src
    },
    { 
      time: '１２：００', 
      event: 'お昼休憩', 
      image: schImg03.src
    },
    { 
      time: '１３：００', 
      event: '訪問開始', 
      image: schImg04.src
    },
    { 
      time: '１７：００', 
      event: '帰院', 
      image: schImg05.src
    },
    { 
      time: '１８：００', 
      event: '退勤', 
      image: schImg06.src
    },
  ];

  return (
    <RecruitTemplate 
      jobTitle="歯科衛生士"
      workDescription="外来一般診療、訪問歯科診療（ご自宅・施設訪問）（希望部署を優先します）"
      location="東京都板橋区高島平（訪問診療の場合は訪問エリア：板橋区・練馬区・北区）"
      workHours="週3日〜応相談（9:00〜18:00を基本・日曜祝日休み）"
      salaryText="日給1.2万円〜／月給25万円〜（経験・日数により優遇）"
      requirements="歯科衛生士免許（訪問経験不問）"
      benefits={
        <>
          社会保険完備、交通費支給、ユニフォーム貸与、勉強会参加支援あり<br />
          昇給年1回、賞与年2回（夏・冬）、休暇：年末年始、GW、夏季休暇
        </>
      }
      annualModel={
        <>
          新卒1年目：月給25万、賞与年2回／年間支給額合計（残業除く）／340万円<br />
          衛生士歴5年目（経験者）：月給30万、賞与年2回／年間支給額合計（残業除く）／420万円<br />
          （その他、経験者は経験に応じて支給しておりますのでご相談ください。）
        </>
      }
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
          専門を活かしながら、自分の可能性や得意分野をみつけて、”自分らしい"働き方をしてみませんか？<br />
          未経験でもだいじょうぶ！仕事も学びもサポートいたします。<br />
          一生を笑顔で楽しめるコミュニティを一緒につくりましょう。
        </>
      }
      scheduleLists={hygienistSchedule}
    />
  );
}