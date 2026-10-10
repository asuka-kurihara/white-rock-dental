import { LowerPageTemplate } from '@/page/common/LowerPageTemplate';
import styles from './page.module.scss';

type Step = {
  number: string;
  title: string;
  description: string;
  noteTitle?: string;
  noteItems?: string[];
  note?: string;
};

const steps: Step[] = [
  {
    number: '1',
    title: 'お問い合わせ',
    description:
      'お電話でのお問い合わせは080-4470-6052まで\n（受付時間：平日9時～18時）\nFAXやフォームでのお申し込みは24時間受付しています。',
  },
  {
    number: '2',
    title: '予約日の決定',
    description:
      'お電話でのお問い合わせは080-4470-6052まで\n（受付時間：平日9時～18時）\nFAXやフォームでのお申し込みは24時間受付しています。',
  },
  {
    number: '3',
    title: '検診',
    description:
      'お口の状態を拝見し、具体的な治療方法をご説明します。\nお身体の状態や患者さまのご希望に沿った治療プランを一緒に考えていきます。',
    noteTitle: '初回訪問日に必要なもの',
    noteItems: [
      '保険証（医療保険証・介護保険証）',
      '医療受給者証（お持ちの方）',
      'お薬手帳',
      'かかりつけ医やケアマネジャーの情報が分かる書類（お持ちの方）',
    ],
    note: '※初回は必要書類への記入があります。',
  },
  {
    number: '4',
    title: '治療スタート',
    description:
      'お口やお身体の状態に合わせて治療を開始します。\n寝たきりの方はベッドで寝たまま治療が可能です。\n口から食べるリハビリを行う場合は、食べ物をご用意いただくことがあります。',
  },
  {
    number: '5',
    title: '次回ご予約の決定',
    description:
      '診療後に次回の予約日を決定します。\n以降は担当の歯科医師・歯科衛生士が、お約束した日に伺います。',
  },
];

export default function Page() {
  return (
    <LowerPageTemplate title="診療の流れ">
      <section className={styles.flow}>
        <ol className={styles.flow__list}>
          {steps.map((step) => (
            <li key={step.number} className={styles.flow__item}>
              <div className={styles.flow__numberWrap}>
                <span className={styles.flow__number}>{step.number}</span>
              </div>

              <div className={styles.flow__body}>
                <h2 className={styles.flow__title}>{step.title}</h2>
                <p className={styles.flow__description}>{step.description}</p>

                {step.noteTitle ? (
                  <div className={styles.flow__noteBlock}>
                    <p className={styles.flow__noteTitle}>{step.noteTitle}</p>
                    <ul className={styles.flow__noteList}>
                      {step.noteItems?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {step.note ? <p className={styles.flow__note}>{step.note}</p> : null}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </LowerPageTemplate>
  );
}

