export type RatingBucket = {
  name: '1 star'|'2 star'|'3 star'|'4 star'|'5 star'
  count: number
}

export type AppItem = {
  image: string
  title: string
  companyName: string
  id: number
  description: string
  size: number
  reviews: number
  ratingAvg: number
  downloads: number
  ratings: RatingBucket[]
}
