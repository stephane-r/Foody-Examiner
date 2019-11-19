import React from 'react';
import initializeStore from '../store';
import { isServer } from '../constants';
import { Store } from '../store/types';

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState: Store): any {
  if (isServer) {
    return initializeStore(initialState);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

const withRedux = (WrapperComponent): JSX.Element => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext): any {
      const reduxStore = getOrCreateStore();

      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};

      if (typeof WrapperComponent.getInitialProps === 'function') {
        appProps = await WrapperComponent.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render(): JSX.Element {
      return <WrapperComponent {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};

export default withRedux;
