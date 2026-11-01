import type { Metadata } from 'next'
import Link from 'next/link'

import LegalPage, { type LegalPageData } from '@/components/LegalPage'
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from '@/lib/games'
import { legalMetadata } from '@/lib/seo'

const DESCRIPTION =
  'The licence Kick Off 2 is offered under, what you may and may not do with it, and the end-user licence terms Apple requires of apps distributed on the App Store.'

export const metadata: Metadata = legalMetadata({
  title: 'Terms of Use',
  description: DESCRIPTION,
  path: '/games/kick-off-2/terms',
  subject: 'Kick Off 2',
})

const Email = () => (
  <a href={SUPPORT_MAILTO} className="mono">
    {SUPPORT_EMAIL}
  </a>
)

const data: LegalPageData = {
  slug: 'kick-off-2',
  title: 'Terms of Use',
  lede:
    'The agreement between you and Astradite Private Limited covering your use of Kick Off 2. It is short, because the game is free, holds no account and asks nothing of you.',
  sections: [
    {
      id: 'agreement',
      heading: 'This agreement',
      blocks: [
        {
          kind: 'p',
          body: 'These Terms of Use (the “Terms”) are an agreement between you and Astradite Private Limited, a company incorporated in India with its registered office at 1/22, Mamidalapadu, Kurnool — 518004, Andhra Pradesh (“Astradite”, “we”, “us”), governing the Kick Off 2 mobile game and any updates to it (the “Game”).',
        },
        {
          kind: 'p',
          body: 'By downloading, installing or playing the Game you accept these Terms. If you do not accept them, do not install the Game, and delete it if you already have.',
        },
        {
          kind: 'callout',
          body: (
            <>
              This agreement is between you and Astradite only. It is not an agreement with Apple
              Inc. or with Google LLC, and neither of them is responsible for the Game or its
              contents &mdash; although Apple has certain rights under it, set out in section 10.
            </>
          ),
        },
      ],
    },
    {
      id: 'licence',
      heading: 'Your licence',
      blocks: [
        {
          kind: 'p',
          body: 'Astradite grants you a personal, non-exclusive, non-transferable, non-sublicensable, revocable licence to install and play the Game on devices you own or control, for your own non-commercial entertainment.',
        },
        {
          kind: 'p',
          body: 'Where the Game is obtained through the App Store, that licence is further limited by Apple’s Usage Rules in the Apple Media Services Terms and Conditions — including the right to use it on any Apple-branded device you own or control, and as permitted by Family Sharing. Where it is obtained through Google Play, Google’s Terms of Service apply alongside these Terms.',
        },
        {
          kind: 'p',
          body: 'The Game is licensed to you, not sold. Astradite and its licensors keep all right, title and interest in it.',
        },
      ],
    },
    {
      id: 'restrictions',
      heading: 'What you may not do',
      blocks: [
        { kind: 'p', body: 'You agree not to:' },
        {
          kind: 'list',
          items: [
            'Copy, redistribute, sell, rent, lease, lend or sublicense the Game, or make it available over a network where others could obtain it.',
            'Reverse-engineer, decompile or disassemble the Game, or attempt to derive its source code, except to the extent that applicable law expressly permits this despite the restriction.',
            'Modify the Game, create derivative works from it, or run modified or unofficial copies.',
            'Remove, obscure or alter any proprietary notice, mark or credit in the Game.',
            'Use cheats, automation software, memory editors or any other method to interfere with how the Game runs.',
            'Use the Game in any way that breaks applicable law.',
          ],
        },
      ],
    },
    {
      id: 'ownership',
      heading: 'Ownership and intellectual property',
      blocks: [
        {
          kind: 'p',
          body: 'The Game — including its code, artwork, user interface, sound, music, name and logo — is the property of Astradite Private Limited and is protected by copyright, trade mark and other intellectual-property law. Nothing in these Terms transfers any of those rights to you, and all rights not expressly granted are reserved.',
        },
        {
          kind: 'p',
          body: 'Kick Off 2 is not affiliated with, endorsed by or sponsored by any football club, league, association or governing body, or any player. Any resemblance to a real team, competition or person is incidental.',
        },
      ],
    },
    {
      id: 'price',
      heading: 'Price, purchases and advertising',
      blocks: [
        {
          kind: 'p',
          body: 'The Game is free to download and play. It contains no in-app purchases, no subscriptions, no virtual currency and no advertising. If that ever changes, the change will be described in the release notes of the version that introduces it and reflected on this page before it ships.',
        },
        {
          kind: 'p',
          body: 'Because we take no payment, refunds are not something we administer. Any refund request relating to a store transaction is handled by Apple or Google under their own policies.',
        },
      ],
    },
    {
      id: 'age',
      heading: 'Age and eligibility',
      blocks: [
        {
          kind: 'p',
          body: 'The Game is suitable for all ages and rated accordingly. If you are a minor in your jurisdiction, you may use the Game only with the consent of a parent or guardian, who accepts these Terms on your behalf. If you are entering into these Terms on behalf of a minor, you are responsible for their use of the Game.',
        },
      ],
    },
    {
      id: 'updates',
      heading: 'Updates, changes and availability',
      blocks: [
        {
          kind: 'p',
          body: 'We may release updates that add, change or remove features, and we may stop distributing or supporting the Game entirely. We will try to give reasonable notice before withdrawing it, but we are not obliged to keep it available indefinitely or to keep any particular feature in it.',
        },
        {
          kind: 'p',
          body: 'Your device may install updates automatically depending on your settings. Some updates may be required for the Game to keep working.',
        },
      ],
    },
    {
      id: 'warranty',
      heading: 'No warranty',
      blocks: [
        {
          kind: 'p',
          body: 'To the maximum extent permitted by applicable law, the Game is provided “as is” and “as available”, without warranty of any kind, express or implied — including any implied warranty of merchantability, fitness for a particular purpose, accuracy, quiet enjoyment or non-infringement. We do not warrant that the Game will be uninterrupted, error-free, or compatible with every device or operating-system version.',
        },
        {
          kind: 'p',
          body: 'Some jurisdictions do not allow the exclusion of implied warranties, so some of the above may not apply to you. Nothing in these Terms limits any statutory consumer right you have that cannot lawfully be limited.',
        },
      ],
    },
    {
      id: 'liability',
      heading: 'Limitation of liability',
      blocks: [
        {
          kind: 'p',
          body: 'To the maximum extent permitted by applicable law, Astradite will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of data, profits, goodwill or device functionality, arising out of or in connection with the Game, however caused and on any theory of liability.',
        },
        {
          kind: 'p',
          body: 'Where liability cannot lawfully be excluded, our total aggregate liability to you in connection with the Game is limited to the greater of the amount you paid us for it (which is zero) or ₹1,000.',
        },
        {
          kind: 'p',
          body: 'Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot lawfully be excluded or limited.',
        },
      ],
    },
    {
      id: 'apple',
      heading: 'Terms that apply to the App Store version',
      blocks: [
        {
          kind: 'p',
          body: 'The following apply where you obtained the Game from Apple’s App Store, and are included because Apple requires them of any developer who supplies its own licence agreement.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Acknowledgement',
              body: 'These Terms are between you and Astradite only, not with Apple. Astradite, not Apple, is solely responsible for the Game and its content. These Terms may not provide for usage rules less restrictive than Apple’s own Usage Rules.',
            },
            {
              term: 'Maintenance and support',
              body: (
                <>
                  Astradite is solely responsible for providing any maintenance and support for the
                  Game, as described in these Terms and on the{' '}
                  <Link href="/games/kick-off-2/support">support page</Link>. Apple has no
                  obligation whatsoever to furnish any maintenance or support services.
                </>
              ),
            },
            {
              term: 'Warranty',
              body: 'Astradite is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. If the Game fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the Game. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the Game, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty are Astradite’s sole responsibility.',
            },
            {
              term: 'Product claims',
              body: 'Astradite, not Apple, is responsible for addressing any claims by you or any third party relating to the Game or your possession and use of it — including product liability claims, any claim that the Game fails to conform to any applicable legal or regulatory requirement, and claims arising under consumer protection, privacy or similar legislation.',
            },
            {
              term: 'Intellectual property claims',
              body: 'In the event of any third-party claim that the Game or your possession and use of it infringes that third party’s intellectual property rights, Astradite, not Apple, is solely responsible for the investigation, defence, settlement and discharge of that claim.',
            },
            {
              term: 'Legal compliance',
              body: 'You represent and warrant that you are not located in a country subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country, and that you are not listed on any U.S. Government list of prohibited or restricted parties.',
            },
            {
              term: 'Third-party beneficiary',
              body: 'Apple and its subsidiaries are third-party beneficiaries of these Terms, and upon your acceptance of them Apple will have the right (and will be deemed to have accepted the right) to enforce them against you as a third-party beneficiary.',
            },
            {
              term: 'Contact',
              body: (
                <>
                  Any question, complaint or claim about the Game should be directed to{' '}
                  <Email />.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'termination',
      heading: 'Termination',
      blocks: [
        {
          kind: 'p',
          body: 'This licence lasts until terminated. It ends automatically if you breach these Terms, and you may end it at any time by deleting the Game from your devices. On termination you must stop using the Game and delete all copies of it. The sections on ownership, warranty, liability and governing law survive termination.',
        },
      ],
    },
    {
      id: 'law',
      heading: 'Governing law',
      blocks: [
        {
          kind: 'p',
          body: 'These Terms are governed by the laws of India, without regard to conflict-of-laws rules, and the courts at Kurnool, Andhra Pradesh have exclusive jurisdiction over any dispute arising out of them. If you are a consumer resident in the European Union, the United Kingdom or another jurisdiction whose law gives you the right to bring proceedings locally and to the protection of mandatory consumer-law provisions, nothing here removes that right.',
        },
        {
          kind: 'p',
          body: 'If any provision of these Terms is found unenforceable, it is severed and the rest remains in force. Our failure to enforce any provision is not a waiver of it.',
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
              Questions about these Terms go to <Email />.
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
              See also the <Link href="/games/kick-off-2/privacy">Privacy Policy</Link> and the{' '}
              <Link href="/games/kick-off-2/support">support page</Link>.
            </>
          ),
        },
      ],
    },
  ],
}

export default function KickOffTwoTermsRoute() {
  return <LegalPage data={data} />
}
