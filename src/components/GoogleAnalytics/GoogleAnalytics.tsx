import React, { FC } from 'react';
import Script, { ScriptProps } from 'next/script';

interface IGoogleAnalyticsProps extends ScriptProps {
  gaId: string;
}

const GoogleAnalytics: FC<IGoogleAnalyticsProps> = ({ gaId }) => {
  return (
    <>
      <Script id='cookieyes' type='text/javascript' src='https://cdn-cookieyes.com/client_data/fdf3173583a2e15614a9a4da/script.js' />
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} defer strategy='lazyOnload' />
      <Script id='google-analytics' defer strategy='lazyOnload'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)};
        gtag('js', new Date());

        gtag('config', '${gaId}');
      `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
