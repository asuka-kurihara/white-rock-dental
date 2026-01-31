import { RecruitTemplate } from '@/page/recruit/RecruitTemplate';
import schImg01 from '@/assets/img/recruit/schedule_dentist01.png';
import schImg02 from '@/assets/img/recruit/schedule_dentist01.png';
import schImg03 from '@/assets/img/recruit/schedule_dentist01.png';
import schImg04 from '@/assets/img/recruit/schedule_dentist01.png';
import schImg05 from '@/assets/img/recruit/schedule_dentist01.png';
import schImg06 from '@/assets/img/recruit/schedule_dentist01.png';
// ...他のimport

export default function Page() {
  const dentistSchedule = [
    { time: '９：００', event: '出社・カルテ確認', image: schImg01.src },
    { time: '９：３０', event: '出発・午前の訪問診療', image: schImg02.src },
    { time: '１２：３０', event: 'お昼休憩', image: schImg03.src },
    { time: '１３：３０', event: '午後の訪問診療開始', image: schImg04.src },
    { time: '１７：３０', event: '帰院・事務作業', image: schImg05.src },
    { time: '１８：００', event: '退勤', image: schImg06.src },
  ];

  return (
    <RecruitTemplate 
      jobTitle="歯科医師"
      workDescription="訪問診療での口腔ケア、一般歯科診療、摂食嚥下リハビリ・食支援など"
      location="東京都板橋区高島平（訪問エリア：都内近郊）"
      workHours="週1日〜応相談（9:00〜18:00を基本）"
      salaryText="時給4,375円〜／月給3.5万円〜（経験・日数により優遇）"
      requirements="歯科医師免許（訪問診療未経験者も歓迎）"
      benefits={<>交通費支給、ユニフォーム貸与、講習会費用補助あり</>}
      messageContent={
        <>
          当院は、一般外来と在宅や施設への訪問診療を展開しています。<br />
          患者さまの”希望”と可能性を重視し、丁寧な関わりと計画的な治療を通じて、<br />
          自分らしく生き生きと暮らせる人生と、<br />
          一生を笑顔で楽しめるコミュニティづくりを創業の理念としています。<br /><br />
          働き方にご”希望”があれば、私たちに聞かせて下さい。<br /><br />
          訪問歯科診療が未経験でも、だいじょうぶ。安心して診療していただけるよう、チームでサポートします。<br />
          経験や知識を共有して助け合い、やりがいと社会貢献を感じる現場で、<br />
          先生方には”自分らしい"働き方をご選択いただけます。
        </>
      }
      scheduleLists={dentistSchedule}
    />
  );
}