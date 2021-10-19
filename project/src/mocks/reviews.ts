import { nanoid } from '@reduxjs/toolkit';
import { Reviews } from '../types/types';

export const reviews: Reviews  = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: nanoid(),
  rating: 4,
  user: {
    avatarUrl: 'img/1.png',
    id: nanoid(),
    isPro: false,
    name: 'Max',
  },
};
