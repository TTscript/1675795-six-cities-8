import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { mockMainOffers } from './mocks/mock-main-offers';
import { POINTS } from './mocks/points';
import { reviews } from './mocks/reviews';
import { CITY } from './mocks/city';

const Setting = {
  OFFERS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersCount = {Setting.OFFERS_COUNT}
      offers = {mockMainOffers}
      reviews = {reviews}
      city = {CITY}
      points={POINTS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
