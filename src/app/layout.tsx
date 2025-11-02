import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inconsolata } from 'next/font/google';
import { CDN_URL, DEV_MODE } from '@/constants';
import { LangVars } from '@/constants/lang';
import { MetadataIconSizes } from '@/constants/icons';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import '@/styles/globals.scss';
import CookieBanner from '@/components/CookieBanner';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
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
    <body className={`${inconsolata.className}`}>
      {!DEV_MODE && <GoogleAnalytics />}
      {children}
      <CookieBanner />
    </body>
  </html>
);

export default RootLayout;
