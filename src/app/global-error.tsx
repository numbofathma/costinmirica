'use client';

import { LangVars } from '@/constants/lang';
import ErrorBlock from '@/components/ErrorBlock';
import '@/styles/globals.scss';

const { name } = LangVars.Metadata;

const GlobalError = ({ reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <html lang='en' data-scroll-behavior='smooth'>
      <head>
        <title>{`${name} ~ Oops: Something went wrong!`}</title>
      </head>
      <body>
        <ErrorBlock action={reset} />
      </body>
    </html>
  );
};

export default GlobalError;
