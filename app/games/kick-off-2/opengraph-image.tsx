import { gameBySlug } from '@/lib/games'
import { OG_CONTENT_TYPE, OG_SIZE, gameOgImage } from '@/lib/og'

const game = gameBySlug('kick-off-2')

export const alt = `${game.name} — ${game.tagline}`
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function OpengraphImage() {
  return gameOgImage('kick-off-2')
}
