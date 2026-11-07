import type { Metadata } from 'next'

import GamePage, { type GamePageData } from '@/components/GamePage'
import KickOffTwoMockup from '@/components/mockups/KickOffTwoMockup'
import { BallIcon, OfflineIcon, StopwatchIcon, TrophyIcon } from '@/components/icons'
import { gameMetadata } from '@/lib/seo'

/** Kept under ~160 characters so a search result does not truncate it. */
const SEO_DESCRIPTION =
  'Kick Off 2 is an arcade football game for iOS and Android: a match in one tap, ninety seconds a side, and no connection required.'

export const metadata: Metadata = gameMetadata('kick-off-2', SEO_DESCRIPTION)

const data: GamePageData = {
  slug: 'kick-off-2',
  kicker: 'GAME 01',
  seoDescription: SEO_DESCRIPTION,
  mockup: <KickOffTwoMockup />,
  why: {
    eyebrow: 'Why another football game',
    title: 'The ball got further away every year.',
    paragraphs: [
      'Football on a phone used to be a thing you did while the kettle boiled. Then it grew a squad screen, a card economy, a login, an energy meter and a download measured in gigabytes — and somewhere in all of it, the part where you kick a ball became the shortest thing in the session.',
      'Kick Off 2 is a deliberate step back. One tap to a match, three controls, ninety seconds a side, and nothing on the other end of a network call. It is a small game, finished — not a service that wants your evenings.',
    ],
  },
  features: {
    eyebrow: 'What’s in it',
    title: 'Four things, done properly.',
    cards: [
      {
        icon: <BallIcon />,
        title: 'A match in one tap',
        body: 'No squad screen, no transfer window, no tutorial you have to sit through. Open it, pick a side, kick off — the whole thing between launch and first touch is one screen.',
      },
      {
        icon: <StopwatchIcon />,
        title: 'Ninety seconds a side',
        body: 'A full match fits inside a lift ride. Short enough that losing costs you nothing, which is the only reason anyone plays one more.',
      },
      {
        icon: <OfflineIcon />,
        title: 'Works with the radio off',
        body: 'Every match runs on the device. Aeroplane mode, a dead patch on the metro, a hotel with hostile wifi — none of it touches the game.',
      },
      {
        icon: <TrophyIcon />,
        title: 'A season you can actually finish',
        body: 'A cup run is a handful of matches, not a second job. Your progress sits on the phone and carries forward; nothing resets because a server went away.',
      },
    ],
  },
  play: {
    eyebrow: 'How it plays',
    title: 'Kick off to full time.',
    steps: [
      {
        label: 'STEP 01',
        title: 'Pick a side',
        body: 'A short list of teams, each one honestly different to play. No stats to study first.',
      },
      {
        label: 'STEP 02',
        title: 'Kick off',
        body: 'Swipe to pass, hold to shoot, tap to slide. Three verbs, no on-screen stick.',
      },
      {
        label: 'STEP 03',
        title: 'Read the run',
        body: 'The ball carries real weight and your players make real runs. Find one before the keeper does.',
      },
      {
        label: 'STEP 04',
        title: 'Finish',
        body: 'Full time in ninety seconds a side. Then the only decision left: go again.',
      },
    ],
  },
  stores: {
    eyebrow: 'Where to get it',
    title: 'Coming to both stores.',
    lede: 'Kick Off 2 is in submission. Nothing links out yet, because a store badge that goes nowhere helps no one — the links land here the day each listing is live.',
  },
  closing: {
    title: 'Found a bug? Tell us.',
    note: 'One address, read by the people who built it. Device, OS version and what you were doing gets you a useful answer fastest.',
  },
}

export default function KickOffTwoRoute() {
  return <GamePage data={data} />
}
