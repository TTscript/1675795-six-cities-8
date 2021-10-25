import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import { mockMainOffers } from './mocks/mock-main-offers';
import { POINTS } from './mocks/points';
import { reviews } from './mocks/reviews';
import { CITY } from './mocks/city';
import { reducer } from './store/reducer';

const Setting = {
  OFFERS_COUNT: 5,
};

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offersCount = {Setting.OFFERS_COUNT}
        offers = {mockMainOffers}
        reviews = {reviews}
        city = {CITY}
        points={POINTS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
