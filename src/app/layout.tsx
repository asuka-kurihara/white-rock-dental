import type { Metadata } from 'next';
import { Provider } from 'jotai';
import { ModalHandler } from '@/components/Modal';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notoSansJP, overpass } from '@/utils/font';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'white-rock',
  description: 'white-rock description',
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
