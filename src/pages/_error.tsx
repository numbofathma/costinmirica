import * as React from 'react';
import Router from 'next/router';

class ErrorPage extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/',
      });
      res.end();
    } else {
      Router.push('/');
    }
    return {};
  }
}

export default ErrorPage;
