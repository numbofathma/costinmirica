import React, { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inconsolata } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { BASE_URL, DEV_MODE, GA_ID } from '@/constants';
import { LangVars } from '@/constants/lang';
import '@/styles/globals.scss';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

const { name, title, description, keywords } = LangVars.Metadata;

export const metadata: Metadata = {
  metadataBase: new URL('https://costinmirica.com'),
  title,
  description,
  keywords,
  authors: [{ name, url: 'https://github.com/numbofathma' }],
  appleWebApp: {
    capable: true,
    title,
    statusBarStyle: 'black',
  },
  openGraph: {
    url: 'https://costinmirica.com',
    type: 'website',
    title,
    images: [{ url: `${BASE_URL}/static/img/costin-mirica.webp` }],
    description,
  },
  twitter: {
    card: 'summary',
    site: 'https://costinmirica.com/',
    title,
    description,
    images: [{ url: `${BASE_URL}/static/img/costin-mirica.webp` }],
  },
  icons: {
    shortcut: `favicon.ico`,
    icon: `${BASE_URL}/icons/icon-64x64.png`,
    apple: [`${BASE_URL}/icons/icon-64x64.png`, `${BASE_URL}/icons/icon-180x180.png`],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <body suppressHydrationWarning={true} className={inconsolata.className}>
      {children}
    </body>
    {!DEV_MODE && <GoogleAnalytics gaId={GA_ID} />}
  </html>
);

export default RootLayout;
