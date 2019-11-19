import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import widthRedux from '../lib/withRedux';
import { Store } from '../store/types';

interface MyAppProps {
  Component: JSX.Element;
  ctx: any;
  pageProps: any;
  reduxStore: Store;
}

class MyApp extends App<MyAppProps> {
  render(): JSX.Element {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} reduxStore={reduxStore} />
        </Provider>
      </Container>
    );
  }
}

export default widthRedux(MyApp);
