import type { Metadata } from 'next'
import Link from 'next/link'

import LegalPage, { type LegalPageData } from '@/components/LegalPage'
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from '@/lib/games'
import { legalMetadata } from '@/lib/seo'

const DESCRIPTION =
  'What Kick Off 2 collects, what it never collects, and how to turn off the diagnostics it does send. No accounts, no ads, no personal data.'

export const metadata: Metadata = legalMetadata({
  title: 'Privacy Policy',
  description: DESCRIPTION,
  path: '/games/kick-off-2/privacy',
  subject: 'Kick Off 2',
})

const Email = () => (
  <a href={SUPPORT_MAILTO} className="mono">
    {SUPPORT_EMAIL}
  </a>
)

const data: LegalPageData = {
  slug: 'kick-off-2',
  title: 'Privacy Policy',
  lede:
    'Kick Off 2 has no accounts, no advertising and no gameplay that leaves your device. The only thing it sends anywhere is crash and performance diagnostics — and you can switch those off.',
  sections: [
    {
      id: 'summary',
      heading: 'The short version',
      blocks: [
        {
          kind: 'callout',
          body: (
            <>
              We do not ask for your name, your email address or any account. We cannot see what
              you play, when you play it, or your score. The game stores its save data on your
              device and nowhere else. The one exception is crash and performance diagnostics,
              described in full in section 3 — technical data about the app and the device, never
              about you, and switchable off in your phone&rsquo;s own settings.
            </>
          ),
        },
        {
          kind: 'p',
          body: (
            <>
              This policy covers the Kick Off 2 mobile game for iOS and Android, published by
              Astradite Private Limited (&ldquo;Astradite&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;). It does not cover the App Store or Google Play themselves, which
              are operated by Apple and Google under their own privacy policies.
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
          body: 'Kick Off 2 has no sign-up, no sign-in and no profile. There is nothing in the game that asks who you are, and nothing in it that could find out. Specifically, we do not collect:',
        },
        {
          kind: 'list',
          items: [
            'Your name, email address, phone number or postal address.',
            'Any account credentials — there is no account to hold them.',
            'Your contacts, calendar, photos, microphone or camera. The app never requests these permissions.',
            'Your location, at any precision. The app never requests location permission.',
            'Health, fitness or financial data of any kind.',
            'Advertising identifiers. Kick Off 2 contains no advertising and no ad SDK, so it does not read the iOS Identifier for Advertisers (IDFA) or the Google Advertising ID, and it never presents an App Tracking Transparency prompt.',
          ],
        },
        {
          kind: 'p',
          body: 'We do not sell, rent or share personal information, because we do not have any to sell, rent or share. We do not track you across apps or websites owned by other companies.',
        },
      ],
    },
    {
      id: 'diagnostics',
      heading: 'Crash and performance diagnostics',
      blocks: [
        {
          kind: 'p',
          body: 'Kick Off 2 includes a crash-reporting and performance-monitoring component. When the game crashes, freezes or misbehaves, it sends a technical report so we can find the fault and fix it. A report may contain:',
        },
        {
          kind: 'list',
          items: [
            'The device model and operating-system version — for example “iPhone 14, iOS 18.2”.',
            'The version and build number of Kick Off 2 that was running.',
            'A crash stack trace: the internal code path the app was on when it failed.',
            'Basic performance measurements such as launch time, frame rate and memory use.',
            'Coarse, non-identifying usage counts — for example that a match was started — used only to tell whether a release broke something.',
            'A randomly generated installation identifier, created on your device, which lets us tell one crash from a hundred copies of the same crash. It is not your name, your device’s serial number, or an advertising identifier, and it is reset when you delete and reinstall the app.',
          ],
        },
        {
          kind: 'p',
          body: 'Diagnostic reports are used to fix bugs and improve performance, and for nothing else. They are not used to build a profile of you, are not used for advertising, and are not sold or shared for any commercial purpose.',
        },
      ],
    },
    {
      id: 'on-device',
      heading: 'What stays on your device',
      blocks: [
        {
          kind: 'p',
          body: 'Your progress — matches played, results, cup runs, settings, sound and control preferences — is written to your device’s own storage. It is not uploaded to us and we cannot read it.',
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
          body: 'Three parties can receive data in connection with Kick Off 2, and only three:',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Apple and Google',
              body: 'As the operators of the App Store and Google Play, they handle the download itself and give us aggregate, anonymous statistics — install counts by country, crash rates, star ratings. We never see who any individual installer is. Their handling of your data is governed by their own privacy policies.',
            },
            {
              term: 'Our diagnostics provider',
              body: 'The crash-reporting and performance service described in section 3 processes those reports on our behalf, under a contract that permits it to use the data only to provide the service to us.',
            },
            {
              term: 'Nobody else',
              body: 'There are no advertising networks, no attribution or install-tracking SDKs, no social-media SDKs and no data brokers in Kick Off 2.',
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
      heading: 'Turning diagnostics off',
      blocks: [
        {
          kind: 'p',
          body: 'Diagnostics are a platform-level setting on both operating systems, so you control them from your device rather than from inside the game:',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'iOS and iPadOS',
              body: 'Settings → Privacy & Security → Analytics & Improvements. Turn off “Share iPhone Analytics”, and turn off “Share with App Developers” to stop analytics being shared with us.',
            },
            {
              term: 'Android',
              body: 'Settings → Google → All services → Usage & diagnostics, and turn it off. The exact path varies slightly by manufacturer and Android version.',
            },
          ],
        },
        {
          kind: 'p',
          body: 'Kick Off 2 plays identically with diagnostics switched off. Nothing is gated behind them. Deleting the app stops all collection outright.',
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
      ],
    },
    {
      id: 'security',
      heading: 'Security',
      blocks: [
        {
          kind: 'p',
          body: 'Diagnostic reports are sent over encrypted connections (TLS) and stored by our provider in encrypted form, with access limited to the engineers who need it to fix faults. No method of transmission or storage is perfectly secure, but the volume and sensitivity of what we hold is deliberately kept as close to nothing as a shipped app allows — which is itself the strongest protection we can offer you.',
        },
      ],
    },
    {
      id: 'children',
      heading: 'Children',
      blocks: [
        {
          kind: 'p',
          body: 'Kick Off 2 is rated for all ages and contains nothing unsuitable for a child, but it is a general-audience game and is not directed at children under 13. We do not knowingly collect personal information from children, and the game has no feature capable of collecting it — no account, no chat, no user-generated content, no profile and no advertising.',
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
          body: 'Depending on where you live, data-protection law — including the EU and UK GDPR, India’s Digital Personal Data Protection Act 2023, and the California Consumer Privacy Act — gives you rights over personal data held about you. Those rights include access, correction, deletion, restriction, objection and portability, and the right not to be discriminated against for exercising them.',
        },
        {
          kind: 'p',
          body: (
            <>
              Because Kick Off 2 holds no account and no identifying information, there is usually
              nothing for us to look up. If you want the diagnostic reports associated with your
              installation deleted, email <Email /> from any address and tell us your device model
              and roughly when the crash happened; we will locate and delete what we can, and tell
              you plainly if we cannot find anything. We will not charge you and we will respond
              within 30 days.
            </>
          ),
        },
        {
          kind: 'p',
          body: 'Our legal basis for processing diagnostic data, where the GDPR applies, is our legitimate interest in keeping the game working correctly. You can object to that processing at any time by turning diagnostics off as described in section 6. You also have the right to lodge a complaint with your local supervisory authority.',
        },
      ],
    },
    {
      id: 'transfers',
      heading: 'Where data is processed',
      blocks: [
        {
          kind: 'p',
          body: 'Astradite Private Limited is based in India. Our diagnostics provider operates servers in several countries, so a crash report may be processed outside the country you live in, including in the United States and the European Union. Where such a transfer involves personal data from the EEA or the UK, it is made under the European Commission’s Standard Contractual Clauses or an equivalent lawful transfer mechanism.',
        },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      blocks: [
        {
          kind: 'p',
          body: 'If we change what Kick Off 2 collects, we will update this page and change the “last updated” date at the top before the change ships. A change that materially widens what we collect — adding advertising, an account system or in-app purchases, for example — will also be announced in the release notes of the version that introduces it, so you can decide before you update.',
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
              Questions about this policy, or about anything else to do with Kick Off 2, go to{' '}
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
              See also the <Link href="/games/kick-off-2/terms">Terms of Use</Link> and the{' '}
              <Link href="/games/kick-off-2/support">support page</Link>.
            </>
          ),
        },
      ],
    },
  ],
}

export default function KickOffTwoPrivacyRoute() {
  return <LegalPage data={data} />
}
