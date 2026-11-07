import type { Metadata } from 'next'

import GamePage, { type GamePageData } from '@/components/GamePage'
import SlimeRushMockup from '@/components/mockups/SlimeRushMockup'
import { GapIcon, JumpIcon, SlimeIcon, SpeedIcon } from '@/components/icons'
import { gameMetadata } from '@/lib/seo'

/** Kept under ~160 characters so a search result does not truncate it. */
const SEO_DESCRIPTION =
  'Slime Rush is an endless runner for iOS and Android: one slime, one lane, a floor that keeps disappearing, and a best you are always chasing.'

export const metadata: Metadata = gameMetadata('slime-rush', SEO_DESCRIPTION)

const data: GamePageData = {
  slug: 'slime-rush',
  kicker: 'GAME 02',
  seoDescription: SEO_DESCRIPTION,
  mockup: <SlimeRushMockup />,
  why: {
    eyebrow: 'Why another runner',
    title: 'Most runners are a calendar.',
    paragraphs: [
      'Open a runner today and the game is the smallest thing in it. There is a streak to protect, a chest counting down, a battle pass at 40%, a bonus for coming back tomorrow — all of it engineered so that stopping costs you something. The running is the bait.',
      'Slime Rush has none of that machinery. There is a slime, a lane, a floor with holes in it, and a number. The number is yours, it lives on your phone, and it does not decay while you sleep. The only reason to open it again is that you think you can beat it.',
    ],
  },
  features: {
    eyebrow: 'What’s in it',
    title: 'Four things, done properly.',
    cards: [
      {
        icon: <SlimeIcon />,
        title: 'A run starts before you’re ready',
        body: 'No menu, no loadout, no daily objective to dismiss first. The slime is already moving when the screen settles — your first decision is a jump, not a tap-through.',
      },
      {
        icon: <JumpIcon />,
        title: 'One thumb, three verbs',
        body: 'Tap to jump, hold to slam, swipe to dash. Everything you will ever need to do is reachable without looking at your hand.',
      },
      {
        icon: <GapIcon />,
        title: 'The floor is the whole enemy',
        body: 'No health bar, no enemies to grind down. Just gaps, spikes and the moment you commit a fraction too late — which is always your fault, and always legible.',
      },
      {
        icon: <SpeedIcon />,
        title: 'A best that is actually yours',
        body: 'Your record sits on your device, not on a leaderboard full of strangers and scripts. Nothing resets it, nothing inflates it, and nothing asks you to sign in to keep it.',
      },
    ],
  },
  play: {
    eyebrow: 'How it plays',
    title: 'Drop in to wipe out.',
    steps: [
      {
        label: 'STEP 01',
        title: 'Drop in',
        body: 'One tap and the slime is running. No countdown, no loading screen between you and the lane.',
      },
      {
        label: 'STEP 02',
        title: 'Read the gap',
        body: 'The floor tells you what is coming about a second ahead. That second is the entire game.',
      },
      {
        label: 'STEP 03',
        title: 'Chain it',
        body: 'Clean landings build a chain, and the chain is where a good run turns into a record one.',
      },
      {
        label: 'STEP 04',
        title: 'Go again',
        body: 'You fall, the number lands, and the restart is one tap away. The whole loop is under a second.',
      },
    ],
  },
  stores: {
    eyebrow: 'Where to get it',
    title: 'Coming to both stores.',
    lede: 'Slime Rush is in submission. Nothing links out yet, because a store badge that goes nowhere helps no one — the links land here the day each listing is live.',
  },
  closing: {
    title: 'Found a bug? Tell us.',
    note: 'One address, read by the people who built it. Device, OS version and what you were doing gets you a useful answer fastest.',
  },
}

export default function SlimeRushRoute() {
  return <GamePage data={data} />
}
