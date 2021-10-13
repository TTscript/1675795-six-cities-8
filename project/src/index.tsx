import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { mockMainOffers } from './mocks/mock-main-offers';
import { reviews } from './mocks/reviews';

const Setting = {
  OFFERS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersCount = {Setting.OFFERS_COUNT}
      offers = {mockMainOffers}
      reviews = {reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
