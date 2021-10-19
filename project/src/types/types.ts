import { RouteProps } from 'react-router-dom';
import { AuthorizationStatus } from '../const';

export type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element,
  authorizationStatus: AuthorizationStatus,
}

export type cityInfo = {
  location: {
    lat: number,
    lng: number,
    zoom: number,
  },
  name: string,
}

export type hostInfo = {
  avatarUrl: string,
  id: string,
  isPro: boolean,
  name: string,
}

export type locationInfo = {
  lat: number,
  lng: number,
  zoom: number,
}

export type Offer = {
  bedrooms: number,
  city: cityInfo,
  description: string,
  goods: string[],
  host: hostInfo,
  id: string,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: locationInfo,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

export type Offers = Offer[];

export type User = {
  avatarUrl: string,
  id: string,
  isPro: boolean,
  name: string,
}


export type Reviews = {
  comment: string,
  date: string,
  id: string,
  rating: number,
  user: User,
};

export type Point = {
    title: string,
    lat: number,
    lng: number,
  }

export type Points = Point[];

export type City = {
  title: string,
  lat: number,
  lng: number,
  zoom: number,
};

export type MainPageProps = {
  offersCount: number | string | JSX.Element,
  offers: Offers,
  city: City,
  points: Points,
  onListItemHover: (listItemName: string) => void,
  selectedPoint: Point | null;
}

export type AppScreenProps = {
  offersCount: number;
  offers: Offers,
  reviews: Reviews,
  city: City,
  points: Points,
}

export type FavoritesOffers = {
  offers: Offers,
}
