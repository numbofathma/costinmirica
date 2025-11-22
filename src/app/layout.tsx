import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inconsolata } from 'next/font/google';
import { CDN_URL, DEV_MODE, RECAPTCHA_SITE_KEY } from '@/constants';
import { LangVars } from '@/constants/lang';
import { MetadataIconSizes } from '@/constants/icons';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import '@/styles/globals.scss';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  display: 'swap',
});

const { name, title, description, keywords } = LangVars.Metadata;
const { apple, icon } = MetadataIconSizes;

export const metadata: Metadata = {
  metadataBase: new URL('https://costinmirica.com'),
  title,
  description,
  keywords,
  authors: [{ name, url: 'https://github.com/numbofathma' }],
  openGraph: {
    url: 'https://costinmirica.com',
    type: 'website',
    title,
    images: [{ url: `${CDN_URL}/static/img/costin-mirica.webp` }],
    description,
  },
  twitter: {
    card: 'summary',
    site: 'https://costinmirica.com/',
    title,
    description,
    images: [{ url: `${CDN_URL}/static/img/costin-mirica.webp` }],
  },
  icons: {
    shortcut: `favicon.ico`,
    icon: icon.map((size: number) => ({
      url: `${CDN_URL}/icons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
    })),
    apple: apple.map((size: number) => ({
      url: `${CDN_URL}/icons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
    })),
  },
  manifest: '/manifest.json',
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
    <head>
      <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
    </head>
    <body className={`${inconsolata.className}`}>
      {children}
      <CookieBanner />
      <Script id='recaptcha-v3' src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} strategy='afterInteractive' />
      {!DEV_MODE && <GoogleAnalytics />}
    </body>
  </html>
);

export default RootLayout;
