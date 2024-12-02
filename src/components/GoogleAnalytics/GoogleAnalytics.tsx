import React from 'react';
import Script from 'next/script';
import { COOKIEBOT_ID, GA_ID } from '@/constants';


const GoogleAnalytics = () => {
  return (
    <>
      <Script id='Cookiebot' src='https://consent.cookiebot.com/uc.js' data-cbid={COOKIEBOT_ID} data-blockingmode='auto' type='text/javascript' />
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} defer strategy='lazyOnload' />
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
