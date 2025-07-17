export interface Thumbnail {
  id: number
  sport: 'basketball' | 'esports' | 'soccer'
  teamA: string
  teamB: string
  commentator: string
  status: 'LIVE' | 'Huy lich' | 'Dat lich'
  statusColor: string
  hot: boolean
  date: string
  time: string
}

export interface SportsSection {
  id: string
  title: string
  thumbnails: Thumbnail[]
  hasNavigation?: boolean
  expandable?: boolean
}