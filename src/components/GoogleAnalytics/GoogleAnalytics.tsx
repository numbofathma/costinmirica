'use client';
import Script from 'next/script';
import { GA_ID } from '@/constants';

const GoogleAnalytics = () => {
  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy='afterInteractive' />
      <Script id='ga-init' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}

          // Default: deny tracking until consent
          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });

          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            send_page_view: false
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
