// types/location.ts
type Location = {
  latitude: number
  longitude: number
  zoom: number
}

export type Offer = {
  bedrooms: number
  city: {
    name: string
    location: Location
  }
  description: string
  goods: string []
  host: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
  id: number
  images: string []
  isFavorite: boolean
  isPremium: boolean
  location: Location
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
};
