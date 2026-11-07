import type { Metadata } from 'next'
import Link from 'next/link'

import LegalPage, { type LegalPageData } from '@/components/LegalPage'
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from '@/lib/games'
import { legalMetadata } from '@/lib/seo'

const DESCRIPTION =
  'What Slime Rush collects, what it never collects, how its advertising works, and how to turn personalised ads and diagnostics off. No accounts, no purchases.'

export const metadata: Metadata = legalMetadata({
  title: 'Privacy Policy',
  description: DESCRIPTION,
  path: '/games/slime-rush/privacy',
  subject: 'Slime Rush',
})

const Email = () => (
  <a href={SUPPORT_MAILTO} className="mono">
    {SUPPORT_EMAIL}
  </a>
)

/**
 * NOTE BEFORE SUBMISSION — two statements below describe the build, not just
 * our intent, and a reviewer will check both:
 *
 *   1. Section 3 says the advertising partners are named on this page. Replace
 *      "our advertising partners" with the networks the build actually ships
 *      (AdMob, Unity Ads, …) and link each one's own privacy policy.
 *   2. Section 8 says the game's settings screen can reopen the consent choice.
 *      The EEA/UK build must expose that control, or this sentence has to go
 *      and the consent flow has to change.
 */
const data: LegalPageData = {
  slug: 'slime-rush',
  title: 'Privacy Policy',
  lede:
    'Slime Rush has no accounts and no purchases, and your runs never leave your device. It is paid for by ads, which is the one part of it that involves anyone else — and you can make those non-personalised in two taps.',
  sections: [
    {
      id: 'summary',
      heading: 'The short version',
      blocks: [
        {
          kind: 'callout',
          body: (
            <>
              We do not ask for your name, your email address or any account. Your runs, your
              best and your settings are stored on your device and nowhere else. Two things do
              leave it: the data an ad network needs to show you an ad between runs
              (section&nbsp;3), and crash reports that tell us what to fix (section&nbsp;4).
              Both are described in full below, and both can be limited from your
              phone&rsquo;s own settings.
            </>
          ),
        },
        {
          kind: 'p',
          body: (
            <>
              This policy covers the Slime Rush mobile game for iOS and Android, published by
              Astradite Private Limited (&ldquo;Astradite&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;). It does not cover the App Store or Google Play themselves,
              which are operated by Apple and Google under their own privacy policies.
            </>
          ),
        },
      ],
    },
    {
      id: 'no-personal-data',
      heading: 'Personal information we do not collect',
      blocks: [
        {
          kind: 'p',
          body: 'Slime Rush has no sign-up, no sign-in and no profile. There is nothing in the game that asks who you are. Specifically, we do not collect:',
        },
        {
          kind: 'list',
          items: [
            'Your name, email address, phone number or postal address.',
            'Any account credentials — there is no account to hold them.',
            'Your contacts, calendar, photos, microphone or camera. The app never requests these permissions.',
            'Precise location. The app never requests location permission; see section 3 for the approximate, country-level location an ad network infers from an IP address.',
            'Health, fitness or financial data of any kind.',
            'Payment details. The game is free and has no in-app purchases, so no payment ever passes through it.',
          ],
        },
        {
          kind: 'p',
          body: 'We do not sell your personal information for money. Note that some privacy laws — California’s in particular — treat personalised advertising as a “sale” or “share” of personal information even when no money changes hands; section 7 explains how to switch it off, which is the opt-out those laws provide for.',
        },
      ],
    },
    {
      id: 'advertising',
      heading: 'Advertising',
      blocks: [
        {
          kind: 'p',
          body: 'Slime Rush is free. It is paid for by ads shown between runs, served by third-party advertising networks — our advertising partners — rather than by us. We do not host the ads, choose which specific ad you see, or receive any personal information back from the networks about you.',
        },
        {
          kind: 'p',
          body: 'To serve an ad and to count it, an advertising partner may collect:',
        },
        {
          kind: 'list',
          items: [
            'An advertising identifier — the Identifier for Advertisers (IDFA) on iOS, or the Google Advertising ID on Android. This is a resettable number that belongs to your device, not to you, and you can reset or remove it at any time.',
            'Your IP address, from which an approximate location — typically country or region, not a street — can be inferred.',
            'Device and app information: device model, operating-system version, language, time zone, screen size, and the fact that the ad was requested by Slime Rush.',
            'Ad interaction data: that an ad was shown, how long it was visible, and whether it was tapped.',
          ],
        },
        {
          kind: 'p',
          body: 'Where you have allowed it, that information may be used to choose ads relevant to you and to measure whether an ad worked, which can involve combining it with information the network holds from other apps and sites. Where you have not allowed it, ads are non-personalised: you still see an ad, it is simply chosen without reference to a profile.',
        },
        {
          kind: 'callout',
          body: (
            <>
              This is the only part of Slime Rush that needs a network connection. Your runs,
              your best and your settings are never sent to an advertising partner, or to us.
              If you play with no connection, the game works exactly as it always does and you
              simply do not see an ad.
            </>
          ),
        },
      ],
    },
    {
      id: 'diagnostics',
      heading: 'Crash and performance diagnostics',
      blocks: [
        {
          kind: 'p',
          body: 'Slime Rush includes a crash-reporting and performance-monitoring component. When the game crashes, freezes or misbehaves, it sends a technical report so we can find the fault and fix it. A report may contain:',
        },
        {
          kind: 'list',
          items: [
            'The device model and operating-system version — for example “Pixel 8, Android 15”.',
            'The version and build number of Slime Rush that was running.',
            'A crash stack trace: the internal code path the app was on when it failed.',
            'Basic performance measurements such as launch time, frame rate and memory use.',
            'Coarse, non-identifying usage counts — for example that a run was started — used only to tell whether a release broke something.',
            'A randomly generated installation identifier, created on your device, which lets us tell one crash from a hundred copies of the same crash. It is not your name, your device’s serial number, or an advertising identifier, and it is reset when you delete and reinstall the app.',
          ],
        },
        {
          kind: 'p',
          body: 'Diagnostic reports are used to fix bugs and improve performance, and for nothing else. They are not used to choose ads, are not shared with our advertising partners, and are not sold.',
        },
      ],
    },
    {
      id: 'on-device',
      heading: 'What stays on your device',
      blocks: [
        {
          kind: 'p',
          body: 'Your runs, your best distance, your chain records and your settings are written to your device’s own storage. They are not uploaded to us, they are not attached to an ad request, and we cannot read them.',
        },
        {
          kind: 'p',
          body: 'If your device backs itself up through iCloud or Google’s backup service, that save data may be included in the backup. Those backups belong to you and are governed by Apple’s and Google’s privacy policies, not ours. Deleting the app removes its on-device data; removing it from a backup is done through your device or platform account settings.',
        },
      ],
    },
    {
      id: 'third-parties',
      heading: 'Who else is involved',
      blocks: [
        {
          kind: 'p',
          body: 'Four parties can receive data in connection with Slime Rush, and only four:',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Apple and Google',
              body: 'As the operators of the App Store and Google Play, they handle the download itself and give us aggregate, anonymous statistics — install counts by country, crash rates, star ratings. We never see who any individual installer is. Their handling of your data is governed by their own privacy policies.',
            },
            {
              term: 'Our advertising partners',
              body: 'The third-party networks that serve and measure the ads described in section 3. They act as independent controllers of the data they collect through their SDK, under their own privacy policies, and we have no access to the profiles they build.',
            },
            {
              term: 'Our diagnostics provider',
              body: 'The crash-reporting and performance service described in section 4 processes those reports on our behalf, under a contract that permits it to use the data only to provide the service to us.',
            },
            {
              term: 'Nobody else',
              body: 'There are no attribution or install-tracking SDKs, no social-media SDKs, no analytics beyond what section 4 describes, and no data brokers in Slime Rush.',
            },
          ],
        },
        {
          kind: 'p',
          body: 'We may disclose information if we are legally required to — a valid court order or a binding request from a public authority — or where it is necessary to protect our rights or someone’s safety. Given what we hold, there is very little that could be disclosed.',
        },
      ],
    },
    {
      id: 'choices',
      heading: 'Your choices and controls',
      blocks: [
        {
          kind: 'p',
          body: 'Both of the things that leave your device are switchable from your phone’s own settings, without uninstalling the game.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Personalised ads on iOS and iPadOS',
              body: 'The first time Slime Rush wants to request tracking, iOS shows you the App Tracking Transparency prompt. Choosing “Ask App Not to Track” means the advertising identifier is not shared and ads are non-personalised. You can change it later in Settings → Privacy & Security → Tracking, or turn off “Allow Apps to Request to Track” to refuse every app at once. Settings → Privacy & Security → Apple Advertising also controls Apple’s own personalisation.',
            },
            {
              term: 'Personalised ads on Android',
              body: 'Settings → Google → All services → Ads. “Delete advertising ID” removes the identifier entirely, and apps can no longer request it; “Opt out of Ads Personalisation” keeps the identifier but tells networks not to profile you. Either one makes the ads in Slime Rush non-personalised. The exact path varies slightly by manufacturer and Android version.',
            },
            {
              term: 'Diagnostics on iOS and iPadOS',
              body: 'Settings → Privacy & Security → Analytics & Improvements. Turn off “Share iPhone Analytics”, and turn off “Share with App Developers” to stop analytics being shared with us.',
            },
            {
              term: 'Diagnostics on Android',
              body: 'Settings → Google → All services → Usage & diagnostics, and turn it off.',
            },
          ],
        },
        {
          kind: 'p',
          body: 'Slime Rush plays identically with every one of these switched off. Nothing in the game is gated behind them, there is no “watch an ad to continue”, and you are never asked again for having said no. Deleting the app stops all collection outright.',
        },
      ],
    },
    {
      id: 'consent',
      heading: 'Consent in the EEA, the UK and Switzerland',
      blocks: [
        {
          kind: 'p',
          body: 'If you are in the European Economic Area, the United Kingdom or Switzerland, Slime Rush asks for your consent before any advertising partner uses your data for personalised advertising, through a consent prompt shown when you first open the game. Declining is a real choice: you keep the whole game and simply get non-personalised ads.',
        },
        {
          kind: 'p',
          body: 'You can change that choice at any time from the game’s settings screen, which reopens the same prompt. Withdrawing consent does not affect the lawfulness of anything done before you withdrew it.',
        },
        {
          kind: 'p',
          body: 'Our legal basis for personalised advertising is your consent. Our legal basis for non-personalised advertising and for the diagnostics in section 4 is our legitimate interest in funding and maintaining a free game; you can object to either at any time using the controls in section 7.',
        },
      ],
    },
    {
      id: 'retention',
      heading: 'How long we keep it',
      blocks: [
        {
          kind: 'p',
          body: 'Crash and performance reports are retained for up to 90 days and then deleted automatically. Aggregated, non-identifying statistics — “this build crashed on 0.3% of launches” — may be kept longer, because once aggregated they can no longer be connected to any device or person.',
        },
        {
          kind: 'p',
          body: 'Data collected by our advertising partners is retained under their own policies and schedules, not ours. Resetting or deleting your advertising identifier, as described in section 7, severs the link between your device and anything they previously collected.',
        },
      ],
    },
    {
      id: 'security',
      heading: 'Security',
      blocks: [
        {
          kind: 'p',
          body: 'Diagnostic reports and ad requests are sent over encrypted connections (TLS). Diagnostic reports are stored by our provider in encrypted form, with access limited to the engineers who need it to fix faults. No method of transmission or storage is perfectly secure, but the volume and sensitivity of what we hold is deliberately kept as close to nothing as an ad-supported app allows — which is itself the strongest protection we can offer you.',
        },
      ],
    },
    {
      id: 'children',
      heading: 'Children',
      blocks: [
        {
          kind: 'p',
          body: 'Slime Rush is rated for all ages and contains nothing unsuitable for a child, but it is a general-audience game and is not directed at children under 13. We do not knowingly collect personal information from children, and the game has no feature capable of collecting it — no account, no chat, no user-generated content and no profile.',
        },
        {
          kind: 'p',
          body: 'Ads in Slime Rush are requested in a mode appropriate to its all-ages rating, and we instruct our advertising partners not to use data for behavioural advertising where a user is identified as a child. We do not knowingly permit interest-based advertising to children.',
        },
        {
          kind: 'p',
          body: (
            <>
              If you are a parent or guardian and believe a child has somehow provided us with
              personal information, write to <Email /> and we will delete whatever we hold.
            </>
          ),
        },
      ],
    },
    {
      id: 'rights',
      heading: 'Your rights',
      blocks: [
        {
          kind: 'p',
          body: 'Depending on where you live, data-protection law — including the EU and UK GDPR, India’s Digital Personal Data Protection Act 2023, and the California Consumer Privacy Act — gives you rights over personal data held about you. Those rights include access, correction, deletion, restriction, objection and portability, the right to opt out of personalised advertising, and the right not to be discriminated against for exercising any of them.',
        },
        {
          kind: 'p',
          body: (
            <>
              Because Slime Rush holds no account and no identifying information, there is
              usually nothing for us to look up. If you want the diagnostic reports associated
              with your installation deleted, email <Email /> from any address and tell us your
              device model and roughly when the crash happened; we will locate and delete what
              we can, and tell you plainly if we cannot find anything. We will not charge you
              and we will respond within 30 days.
            </>
          ),
        },
        {
          kind: 'p',
          body: 'For data held by an advertising partner rather than by us, the fastest route is the device-level control in section 7, which applies immediately and across every app. You can also exercise your rights directly with that partner under its own privacy policy. You have the right to lodge a complaint with your local supervisory authority.',
        },
      ],
    },
    {
      id: 'transfers',
      heading: 'Where data is processed',
      blocks: [
        {
          kind: 'p',
          body: 'Astradite Private Limited is based in India. Our diagnostics provider and our advertising partners operate servers in several countries, so a crash report or an ad request may be processed outside the country you live in, including in the United States and the European Union. Where such a transfer involves personal data from the EEA or the UK, it is made under the European Commission’s Standard Contractual Clauses or an equivalent lawful transfer mechanism.',
        },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      blocks: [
        {
          kind: 'p',
          body: 'If we change what Slime Rush collects, we will update this page and change the “last updated” date at the top before the change ships. A change that materially widens what we collect — adding an account system, in-app purchases, or a new category of advertising partner, for example — will also be announced in the release notes of the version that introduces it, so you can decide before you update.',
        },
        {
          kind: 'p',
          body: 'This page is the authoritative version, and it is the URL given to both stores. Older versions are superseded entirely.',
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [
        {
          kind: 'p',
          body: (
            <>
              Questions about this policy, or about anything else to do with Slime Rush, go to{' '}
              <Email />. We read everything that arrives there.
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
        {
          kind: 'p',
          body: (
            <>
              See also the <Link href="/games/slime-rush/terms">Terms of Use</Link> and the{' '}
              <Link href="/games/slime-rush/support">support page</Link>.
            </>
          ),
        },
      ],
    },
  ],
}

export default function SlimeRushPrivacyRoute() {
  return <LegalPage data={data} />
}
