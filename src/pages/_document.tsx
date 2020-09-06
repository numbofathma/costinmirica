import * as React from 'react';
import Document, {
  Head, Main, NextScript, DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="title" content="Costin Mirica - Full Stack Developer" />
          <meta name="description" content="Just another developer understanding the world one line of code at a time." />
          <meta name="keywords" content="personal website, portfolio, full stack developer" />
          <meta name="author" content="Costin Mirica" />

          <meta name="theme-color" content="#282931" />
          <meta name="apple-mobile-web-app-title" content="Costin Mirica" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#282931" />

          <meta property="og:url" content="https://costinmirica.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Costin Mirica - Full Stack Developer"
          />
          <meta property="og:image" content={`${publicRuntimeConfig.BASE_URL}/static/img/costin-mirica.jpg`} />
          <meta
            property="og:description"
            content="Just another developer understanding the world one line of code at a time."
          />

          <meta property="twitter:card" content={`${publicRuntimeConfig.BASE_URL}/static/img/costin-mirica.jpg`} />
          <meta property="twitter:url" content="https://costinmirica.com/" />
          <meta property="twitter:title" content="Costin Mirica - Full Stack Developer" />
          <meta property="twitter:description" content="Just another developer understanding the world one line of code at a time." />
          <meta property="twitter:image" content={`${publicRuntimeConfig.BASE_URL}/static/img/costin-mirica.jpg`} />

          <link rel="shortcut icon" href={`${publicRuntimeConfig.BASE_URL}/favicon.ico`} />
          <link rel="icon" type="image/png" sizes="64x64" href={`${publicRuntimeConfig.BASE_URL}/icons/icon-64x64.png`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`${publicRuntimeConfig.BASE_URL}/icons/icon-180x180.png`} />

          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
