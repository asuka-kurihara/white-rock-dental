import { IconLogoSc } from '@/assets/img/common/IconLogoSc';
import { IconLogoSukoyaka } from '@/assets/img/common/IconLogoSukoyaka';
import { IconLogo } from '@/assets/img/common/IconLogo';
import { IconTel } from '@/assets/img/common/IconTel';
import { IconInsta } from '@/assets/img/common/IconInsta';

const iconMap = {
  logoSc: IconLogoSc,
  logoSukoyaka: IconLogoSukoyaka,
  logo: IconLogo,
  tel: IconTel,
  insta: IconInsta,
} as const;

type SvgIconName = keyof typeof iconMap;

const SvgIcon = ({
  name,
  className,
  width = 16,
  height = 16,
}: {
  name: SvgIconName;
  className?: string;
  width?: number;
  height?: number;
}) => {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} width={width} height={height} />;
};

export { SvgIcon };
