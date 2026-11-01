import type { Metadata } from 'next'
import Link from 'next/link'

import LegalPage, { type LegalPageData } from '@/components/LegalPage'
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from '@/lib/games'
import { legalMetadata } from '@/lib/seo'

const DESCRIPTION =
  'Support for Kick Off 2: how to reach a person, what to send so we can help, and answers to the things that go wrong most often.'

export const metadata: Metadata = legalMetadata({
  title: 'Support',
  description: DESCRIPTION,
  path: '/games/kick-off-2/support',
  subject: 'Kick Off 2',
})

const Email = () => (
  <a href={SUPPORT_MAILTO} className="mono">
    {SUPPORT_EMAIL}
  </a>
)

const data: LegalPageData = {
  slug: 'kick-off-2',
  title: 'Support',
  lede:
    'One address, read by the people who built the game. No ticket number, no bot, no account to log into first.',
  sections: [
    {
      id: 'contact',
      heading: 'Getting help',
      blocks: [
        {
          kind: 'callout',
          body: (
            <>
              Email <Email />. We answer within two working days, usually sooner. We are in India
              (IST, UTC+5:30), so a message sent late in a European or American evening is
              typically answered overnight.
            </>
          ),
        },
        {
          kind: 'p',
          body: 'There is no support account, no login and no help desk to register with. You can write from any address, and you do not need to have bought anything — the game is free.',
        },
      ],
    },
    {
      id: 'what-to-send',
      heading: 'What to put in the message',
      blocks: [
        {
          kind: 'p',
          body: 'A bug report that contains these four things usually gets a real answer on the first reply rather than a round of questions:',
        },
        {
          kind: 'list',
          items: [
            'Your device and OS version — “iPhone 13, iOS 18.2” or “Pixel 7a, Android 15”.',
            'The version of Kick Off 2, shown at the bottom of the game’s settings screen.',
            'What you were doing when it went wrong, in as much or as little detail as you have.',
            'What you expected to happen instead. This is the one people leave out, and it is often the most useful.',
          ],
        },
        {
          kind: 'p',
          body: 'A screen recording is worth a great deal for anything visual or timing-related, but it is never required.',
        },
      ],
    },
    {
      id: 'common',
      heading: 'Things that go wrong most often',
      blocks: [
        {
          kind: 'terms',
          items: [
            {
              term: 'The game will not open, or closes straight after the splash screen',
              body: 'Force-quit it and reopen, then restart the device if that does not help. If it persists, delete and reinstall — your progress is stored on the device, so see the next item first if that matters to you. Tell us the device and OS version either way; a crash on launch is almost always something we can fix.',
            },
            {
              term: 'I lost my progress',
              body: 'Progress lives on your device, not on a server, so deleting the app deletes it. If your device backs up to iCloud or Google’s backup service, restoring that backup normally brings it back. We cannot restore progress remotely, because we never had a copy of it — that is the same design decision that means we hold no personal data about you.',
            },
            {
              term: 'No sound, or sound only through the speaker',
              body: 'Check the device is not on silent, check the in-game sound setting, and check nothing else has claimed audio output — a Bluetooth device still paired in another room is the usual culprit. If sound is missing only in Kick Off 2 while other apps are fine, write to us.',
            },
            {
              term: 'The controls feel unresponsive',
              body: 'The game reads swipe, hold and tap. A screen protector with a lifted edge, or playing with a case that overlaps the display, can swallow a swipe. If it is genuinely the game, tell us which control and on which device — frame-timing problems are device-specific and we need the model to reproduce them.',
            },
            {
              term: 'My device is not supported',
              body: 'Kick Off 2 needs a reasonably current OS. If the store says your device is not compatible, that is the store applying the minimum version we build against. Tell us the device; if there are enough of them we will look at lowering the floor.',
            },
            {
              term: 'I want a refund',
              body: 'The game is free and has no in-app purchases, so there is nothing for us to refund. Any charge you see associated with it did not come from us — check your store purchase history, and contact Apple or Google, who administer all store transactions.',
            },
          ],
        },
      ],
    },
    {
      id: 'privacy',
      heading: 'Privacy and your data',
      blocks: [
        {
          kind: 'p',
          body: (
            <>
              Kick Off 2 has no accounts and collects no personal information. The only thing it
              sends anywhere is crash and performance diagnostics, and you can turn those off in
              your device settings. The{' '}
              <Link href="/games/kick-off-2/privacy">Privacy Policy</Link> sets out exactly what is
              collected, who processes it and how long it is kept.
            </>
          ),
        },
        {
          kind: 'p',
          body: (
            <>
              To have diagnostic data associated with your installation deleted, email <Email /> with
              your device model and roughly when the problem occurred. There is no account to
              delete, because there is no account.
            </>
          ),
        },
      ],
    },
    {
      id: 'feedback',
      heading: 'Feature requests and feedback',
      blocks: [
        {
          kind: 'p',
          body: 'The same address takes feature requests, and they are read by the people who decide what gets built. We cannot promise to act on any particular one, and we do not run a public roadmap, but a specific request with a reason behind it carries real weight with a team this size.',
        },
        {
          kind: 'p',
          body: 'If you are reporting something that affects other players — a crash, an exploit, a scoring bug — please tell us before posting it publicly, so a fix can go out alongside the news.',
        },
      ],
    },
    {
      id: 'security',
      heading: 'Reporting a security issue',
      blocks: [
        {
          kind: 'p',
          body: (
            <>
              Send security reports to <Email /> with &ldquo;security&rdquo; in the subject line.
              We will acknowledge within two working days and keep you informed while we work on
              it. Please give us a reasonable window to ship a fix before disclosing publicly. We
              have no bug-bounty programme, but we will credit you if you want to be credited.
            </>
          ),
        },
      ],
    },
    {
      id: 'about',
      heading: 'Who you are writing to',
      blocks: [
        {
          kind: 'p',
          body: (
            <>
              Kick Off 2 is made by Astradite Private Limited, a software product studio in
              Kurnool, Andhra Pradesh. The same team builds{' '}
              <Link href="/products/dineontap">DineOnTap</Link>,{' '}
              <Link href="/products/wellness-axis">Wellness Axis</Link> and{' '}
              <Link href="/products/medico-nexus">Medico Nexus</Link>.
            </>
          ),
        },
        {
          kind: 'callout',
          body: (
            <>
              Astradite Private Limited
              <br />
              1/22, Mamidalapadu
              <br />
              Kurnool &mdash; 518004
              <br />
              Andhra Pradesh, India
              <br />
              <Email />
            </>
          ),
        },
      ],
    },
  ],
}

export default function KickOffTwoSupportRoute() {
  return <LegalPage data={data} />
}
