import type { Metadata } from "next";
import "@/app/globals.scss";

export const metadata: Metadata = {
  title: "white-rock",
  description: "white-rock description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
