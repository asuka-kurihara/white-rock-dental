import { Carousel } from '@/utils/Carousel';

import mvPc01 from '@/assets/img/top/mv_pc01.png';
import mvSp01 from '@/assets/img/top/mv_sp01.png';
import mvPc02 from '@/assets/img/top/mv_pc02.png';
import mvSp02 from '@/assets/img/top/mv_sp02.png';
import mvPc03 from '@/assets/img/top/mv_pc03.png';
import mvSp03 from '@/assets/img/top/mv_sp03.png';
import mvPc04 from '@/assets/img/top/mv_pc04.png';
import mvSp04 from '@/assets/img/top/mv_sp04.png';

const carouselItems = [
  {
    alt: 'あなたの街の、新しい歯医者。',
    imagePc: mvPc01.src,
    imageSp: mvSp01.src,
  },
  {
    alt: '生涯を全うする、よろこびを共に。',
    imagePc: mvPc02.src,
    imageSp: mvSp02.src,
  },
  {
    alt: '一人一人に合った、計画的な治療を。',
    imagePc: mvPc03.src,
    imageSp: mvSp03.src,
  },
  {
    alt: '地域への、恩返し。',
    imagePc: mvPc04.src,
    imageSp: mvSp04.src,
  },
];

const TopCarousel = () => {
  return (
    <Carousel
      items={carouselItems}
      widthSp={355}
      heightSp={451}
      widthPc={1360}
      heightPc={590}
    />
  );
};

export { TopCarousel };
