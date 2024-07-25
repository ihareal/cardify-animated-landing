import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const halvar = localFont({
  src: '../../public/fonts/HalvarBreit-Md.ttf',
  variable: '--font-halvar',
});

export const metadata: Metadata = {
  title: 'Cardify',
  description: 'Cardify Landing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${halvar.variable} ${inter.className} font-sans`}>
        {children}
      </body>
    </html>
  );
}
