import React from 'react';
import Script from 'next/script';
import { GA_ID } from '@/constants';

const GoogleAnalytics = () => {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} defer strategy='lazyOnload' />
      <Script id='google-analytics' defer strategy='lazyOnload'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)};
        gtag('js', new Date());

        gtag('config', '${GA_ID}');
      `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
