import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { logger } from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import AppContainer from './containers/AppContainer';
import { IStoreState, rootReducer } from './reducers';


const epicMiddleware = createEpicMiddleware();

//define las epicas para Redux y procesarlas con rxjs

const store: Store<IStoreState> = createStore(
  rootReducer, 
  applyMiddleware( logger )
);

// definimos el root con el provider para el store de Redux, el cual define los middleware logger y par el redux rxjs. (Intercepta las actions correspondientes)
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
