import { RecruitTemplate } from '@/page/recruit/RecruitTemplate';
import gallery01 from '@/assets/img/recruit/gallery_dentist01.png';
import gallery02 from '@/assets/img/recruit/gallery_dentist02.png';
import gallery03 from '@/assets/img/recruit/gallery_dentist03.png';

export default function Page() {


  return (
    <RecruitTemplate 
      jobTitle="歯科医師"
      workDescription="訪問歯科診療、一般歯科診療、摂食嚥下リハビリ・食支援（可能な方）"
      location="神奈川県厚木市妻田東3丁目16番22号2階（訪問エリア：16㎞圏内）"
      workHours="週1～応相談（9:30～18:30を基本。応相談）"
      salaryText="時給 3,750円 〜 6,250円　/  日給35,000円～（日数・経験によって優遇）"
      requirements="歯科医師免許（訪問診療未経験者も歓迎）"
      benefits={<>交通費支給</>}
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
      galleryImages={[gallery01.src, gallery03.src, gallery02.src]}
    />
  );
}