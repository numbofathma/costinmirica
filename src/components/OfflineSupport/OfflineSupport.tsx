import React from 'react';

class OfflineSupport extends React.PureComponent {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js');
    }
  }

  render() {
    return null;
  }
}

export default OfflineSupport;
