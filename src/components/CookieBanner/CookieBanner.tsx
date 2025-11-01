'use client';
import { LangVars } from '@/constants/lang';
import { useEffect, useState } from 'react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const { agreementText, buttonTextAccept, buttonTextReject } = LangVars.CookieBanner;

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('analytics_consent');
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (hasConsent: boolean) => () => {
    // Update Consent Mode
    window.gtag?.('consent', 'update', {
      analytics_storage: hasConsent ? 'granted' : 'denied',
    });

    // Persist choice
    localStorage.setItem('analytics_consent', hasConsent ? 'granted' : 'denied');
    setVisible(false);

    if (hasConsent) {
      window.gtag?.('event', 'page_view');
    }
  };

  if (!visible) return null;

  return (
    <div className='fixed inset-x-0 bottom-0 z-50 border-t border-gray-300 bg-white shadow-lg'>
      <div className='mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row'>
        <p className='whitespace-pre-line text-center text-sm text-gray-700 sm:text-left'>
          {agreementText}{' '}
          <a href='https://business.safety.google/privacy/' target='_blank' rel='noreferrer'>
            Learn more
          </a>
          {'.'}
        </p>
        <div className='flex gap-3'>
          <button onClick={handleConsent(false)} className='button-base px-4 py-1'>
            {buttonTextReject}
          </button>
          <button onClick={handleConsent(true)} className='button-base px-4 py-1'>
            {buttonTextAccept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
