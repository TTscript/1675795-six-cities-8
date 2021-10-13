export type cityInfo = {
  location: {
    latitude: number,
    longitude: number,
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
  latitude: number,
  longitude: number,
  zoom: number,
}

export type Offers = [
  {
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
},
{
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
},
{
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
},
{
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
];

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
