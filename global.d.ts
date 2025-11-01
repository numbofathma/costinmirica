// global.d.ts
export {};

declare global {
  interface Window {
    /**
     * Google Analytics gtag() function
     * https://developers.google.com/gtagjs/reference/api
     */
    gtag: (
      command: 'consent' | 'config' | 'event' | 'set',
      targetIdOrParams: string | Record<string, unknown>,
      params?: Record<string, unknown>,
    ) => void;

    /**
     * Google reCAPTCHA v3 object
     * https://developers.google.com/recaptcha/docs/v3
     */
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      ready: (callback: () => void) => void;
    };
  }
}
