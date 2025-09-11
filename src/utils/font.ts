import { Noto_Sans_JP, Overpass } from 'next/font/google';

export const notoSansJP = Noto_Sans_JP({
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export const overpass = Overpass({
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-overpass',
});
