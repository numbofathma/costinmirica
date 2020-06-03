import * as React from 'react';
import App, { AppContext } from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';
import OfflineSupport from '@components/OfflineSupport';
import '@public/static/css/style.css';

class MyApp extends App<unknown, unknown> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <OfflineSupport />
        <Component {...pageProps} />
      </>
    );
  }
}

export default withGA('UA-61042122-6', Router)(MyApp);
