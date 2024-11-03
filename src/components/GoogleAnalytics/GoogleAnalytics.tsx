import React, { FC } from 'react';
import Script, { ScriptProps } from 'next/script';

interface IGoogleAnalyticsProps extends ScriptProps {
  gaId: string;
}

const GoogleAnalytics: FC<IGoogleAnalyticsProps> = ({ gaId }) => {
  return (
    <>
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
