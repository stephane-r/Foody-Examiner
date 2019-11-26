import React from 'react';
import NextApp from 'next/app';
import { Provider } from 'react-redux';
import widthRedux from '../lib/withRedux';
import { Store } from '../store/types';
import App from '../components/App';

interface MyAppProps {
  Component: JSX.Element;
  ctx: any;
  pageProps: any;
  reduxStore: Store;
}

class MyApp extends NextApp<MyAppProps> {
  render(): JSX.Element {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <App>
          <Component {...pageProps} reduxStore={reduxStore} />
        </App>
      </Provider>
    );
  }
}

export default widthRedux(MyApp);
