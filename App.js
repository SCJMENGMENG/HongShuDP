import React, {Component} from 'react';

import AppContainer from './src/component/navigators/navigators';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootRedux from './src/redux/index';

import type {Node} from 'react';

let rootStore = createStore(RootRedux, applyMiddleware(thunk, logger));

const App: () => Node = () => {
  return (
      <Provider store={rootStore}>
        <AppContainer
            ref={nav => {
              this.appNavigator = nav;
            }}
            oonNavigationStateChange={(prevState, newState, action) => {}}
        />
      </Provider>
  );
};

export default App;
