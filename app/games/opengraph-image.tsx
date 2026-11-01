import { OG_CONTENT_TYPE, OG_SIZE, gamesIndexOgImage } from '@/lib/og'

export const alt = 'Astradite Games — small games, built properly.'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function OpengraphImage() {
  return gamesIndexOgImage()
}
