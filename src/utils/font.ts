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

// 100 Thin
// 200 ExtraLight
// 300 Light
// 400 Regular
// 500 Medium
// 600 SemiBold
// 700 Bold
// 800 ExtraBold
// 900 Black
