import type { Metadata } from 'next'
import Link from 'next/link'

import LegalPage, { type LegalPageData } from '@/components/LegalPage'
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from '@/lib/games'
import { legalMetadata } from '@/lib/seo'

const DESCRIPTION =
  'Support for Slime Rush: how to reach a person, what to send so we can help, ad problems, and answers to the things that go wrong most often.'

export const metadata: Metadata = legalMetadata({
  title: 'Support',
  description: DESCRIPTION,
  path: '/games/slime-rush/support',
  subject: 'Slime Rush',
})

const Email = () => (
  <a href={SUPPORT_MAILTO} className="mono">
    {SUPPORT_EMAIL}
  </a>
)

const data: LegalPageData = {
  slug: 'slime-rush',
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
              Email <Email />. We answer within two working days, usually sooner. We are in
              India (IST, UTC+5:30), so a message sent late in a European or American evening is
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
            'The version of Slime Rush, shown at the bottom of the game’s settings screen.',
            'What you were doing when it went wrong, in as much or as little detail as you have.',
            'What you expected to happen instead. This is the one people leave out, and it is often the most useful.',
          ],
        },
        {
          kind: 'p',
          body: 'A screen recording is worth a great deal for anything to do with timing, collision or a run that ended when it should not have — but it is never required.',
        },
      ],
    },
    {
      id: 'ads',
      heading: 'Problems with an ad',
      blocks: [
        {
          kind: 'p',
          body: 'Slime Rush is free because of the ads between runs. They come from third-party networks rather than from us, which means we do not choose them — but we can escalate a bad one, and we want to.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'An ad will not close, or froze the game',
              body: 'Force-quit and reopen the game; your best is saved and you will lose at most the run you were on. Then send us a screenshot or recording with your device and OS version. A close button that does not work is a fault in the ad creative, and with a screenshot we can get the specific campaign blocked.',
            },
            {
              term: 'I saw an ad that is not appropriate for an all-ages game',
              body: (
                <>
                  Send a screenshot to <Email />. We request ads in a mode appropriate to the
                  game&rsquo;s rating, but ad networks are large and one occasionally slips
                  through. A screenshot identifies the campaign; without one there is usually
                  nothing we can act on.
                </>
              ),
            },
            {
              term: 'Can I pay to remove the ads?',
              body: 'Not today — the game has no in-app purchases at all. What you can do is make the ads non-personalised, which costs nothing and takes two taps; see the next section.',
            },
            {
              term: 'I am seeing too many ads',
              body: 'Ads appear between runs, never during one, and there is no “watch an ad to continue”. If you are seeing them more often than that, tell us what you were doing and we will look at it — that would be a bug.',
            },
          ],
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
              body: 'Force-quit it and reopen, then restart the device if that does not help. If it persists, delete and reinstall — your best is stored on the device, so see the next item first if that matters to you. Tell us the device and OS version either way; a crash on launch is almost always something we can fix.',
            },
            {
              term: 'I lost my best',
              body: 'Your best lives on your device, not on a server, so deleting the app deletes it. If your device backs up to iCloud or Google’s backup service, restoring that backup normally brings it back. We cannot restore a record remotely, because we never had a copy of it — that is the same design decision that means we hold no personal data about you.',
            },
            {
              term: 'A jump did not register',
              body: 'The game reads tap, hold and swipe. A screen protector with a lifted edge, or a case that overlaps the display, can swallow an input near the edge. If it is genuinely the game, a recording helps enormously — tell us which input and on which device, since timing problems are device-specific and we need the model to reproduce them.',
            },
            {
              term: 'No sound, or sound only through the speaker',
              body: 'Check the device is not on silent, check the in-game sound setting, and check nothing else has claimed audio output — a Bluetooth device still paired in another room is the usual culprit. If sound is missing only in Slime Rush while other apps are fine, write to us.',
            },
            {
              term: 'The game stutters or drops frames',
              body: 'Close other apps and check whether a battery-saver mode is capping the frame rate, which both operating systems do silently. If it stutters at a particular point in a run rather than throughout, tell us where — that is the useful detail.',
            },
            {
              term: 'My device is not supported',
              body: 'Slime Rush needs a reasonably current OS. If the store says your device is not compatible, that is the store applying the minimum version we build against. Tell us the device; if there are enough of them we will look at lowering the floor.',
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
              Slime Rush has no accounts and collects no personal information. Two things leave
              your device: what an ad network needs to show you an ad, and crash reports. Both
              can be limited from your phone&rsquo;s settings, and the{' '}
              <Link href="/games/slime-rush/privacy">Privacy Policy</Link> sets out exactly what
              each one is, who processes it and how long it is kept.
            </>
          ),
        },
        {
          kind: 'p',
          body: 'To make the ads non-personalised: on iOS, Settings → Privacy & Security → Tracking, and turn Slime Rush off (or decline the prompt when it appears). On Android, Settings → Google → All services → Ads, then “Delete advertising ID” or “Opt out of Ads Personalisation”. The game plays identically either way.',
        },
        {
          kind: 'p',
          body: (
            <>
              To have diagnostic data associated with your installation deleted, email <Email />{' '}
              with your device model and roughly when the problem occurred. There is no account
              to delete, because there is no account.
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
          body: 'If you are reporting something that affects other players — a crash, an exploit, a way to inflate a score — please tell us before posting it publicly, so a fix can go out alongside the news.',
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
              Slime Rush is made by Astradite Private Limited, a software product studio in
              Kurnool, Andhra Pradesh. The same team builds{' '}
              <Link href="/games/kick-off-2">Kick Off 2</Link>,{' '}
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

export default function SlimeRushSupportRoute() {
  return <LegalPage data={data} />
}
