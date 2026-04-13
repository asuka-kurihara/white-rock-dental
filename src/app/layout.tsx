import type { Metadata } from 'next';
import { Provider } from 'jotai';
import { ModalHandler } from '@/components/Modal';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notoSansJP, overpass } from '@/utils/font';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  // 1. 基本的なメタ情報（最重要）
  metadataBase: new URL('https://whiterock-dental.com'),
  title: 'ホワイトロック歯科 | 外来・訪問歯科',
  description:
    '神奈川県厚木市で外来・訪問歯科を行っています。地域の皆様のお口の健康をサポートします。',

  // 2. ビューポート設定（レスポンシブ対応）
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },

  // 3. 正規URL
  alternates: {
    canonical: '/',
  },

  // 4. 検索エンジン制御
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 5. キーワードと作者情報
  keywords: [
    '訪問歯科',
    '歯科診療',
    '厚木市',
    '神奈川県',
    'white-rock',
    'ホワイトロック',
  ],
  authors: [{ name: 'ホワイトロック歯科' }],
  creator: 'ホワイトロック歯科',
  publisher: 'ホワイトロック歯科',

  // 6. フォーマット検出制御
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // 7. Open Graph（Facebook、LINE等）
  openGraph: {
    title: 'ホワイトロック歯科 | 外来・訪問歯科',
    description:
      '神奈川県厚木市で外来・訪問歯科を行っています。地域の皆様のお口の健康をサポートします。',
    url: 'https://whiterock-dental.com',
    siteName: 'ホワイトロック歯科',
    images: [
      {
        url: 'https://whiterock-dental.com/ogp.jpg',
        width: 1200,
        height: 630,
        alt: 'ホワイトロック歯科',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },

  // 8. Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'ホワイトロック歯科 | 外来・訪問歯科',
    description:
      '神奈川県厚木市で外来・訪問歯科を行っています。地域の皆様のお口の健康をサポートします。',
    images: ['https://whiterock-dental.com/ogp.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${overpass.variable}`}>
      <body>
        <Provider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ModalHandler />
        </Provider>
      </body>
    </html>
  );
}
