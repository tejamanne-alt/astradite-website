# Slime Rush — store submission reference

Everything App Store Connect and the Play Console ask for, in one place. The
URLs below are live on this site; the copy is a draft to paste in and edit, not
a finished decision.

> **Slime Rush is not Kick Off 2.** It carries a third-party ad SDK, and that
> single difference changes the privacy labels, the Data Safety form, the Play
> ads declaration, the Android manifest and the iOS `Info.plist`. Do not copy
> Kick Off 2's answers across. Everything marked **ads** below exists only
> because of it.

## Build work this policy assumes

The published privacy policy states these as facts. A reviewer reads the policy
and the binary, so each one has to be true before submission:

1. **Name the ad networks.** Section 3 of the policy says "our advertising
   partners". Replace that with the networks the build actually ships — AdMob,
   Unity Ads, whichever — and link each one's own privacy policy.
2. **A consent control in settings.** Section 8 says the choice can be reopened
   "from the game's settings screen". The EEA/UK/Swiss build must expose that
   (Google UMP's `showPrivacyOptionsForm`, or your CMP's equivalent).
3. **ATT on iOS.** The build must present the App Tracking Transparency prompt
   before requesting the IDFA, with an `NSUserTrackingUsageDescription` string
   in `Info.plist`. Requesting the IDFA without the prompt is an automatic
   rejection.
4. **`AD_ID` permission on Android.** Targeting Android 13+ and reading the
   advertising ID requires `com.google.android.gms.permission.AD_ID` declared
   in the manifest.
5. **Age-appropriate ad requests.** The game is rated 4+/Everyone, so ad
   requests must be capped to a matching content rating (AdMob's
   `maxAdContentRating` of `G`, and the equivalent on any other network).
   Section 11 of the policy promises this.

## URLs

| Field | Value |
| --- | --- |
| Marketing URL (App Store) | `https://www.astradite.com/games/slime-rush` |
| Support URL (App Store) | `https://www.astradite.com/games/slime-rush/support` |
| Privacy Policy URL (both stores) | `https://www.astradite.com/games/slime-rush/privacy` |
| EULA / Licence Agreement (App Store) | `https://www.astradite.com/games/slime-rush/terms` |
| Website (Play Console) | `https://www.astradite.com/games/slime-rush` |
| Support email (both stores) | `contact@astradite.com` |
| Data deletion URL (Play, if asked) | `https://www.astradite.com/games/slime-rush/privacy#rights` |

## App Store Connect

**Name** (30) — `Slime Rush`

**Subtitle** (30) — `Run until the floor runs out`

**Promotional Text** (170) — editable without a new build, so use it for news:

```
One slime, one lane, and a floor that keeps disappearing. No streaks, no chests, no login bonus — just the next thirty seconds and a best worth beating.
```

**Keywords** (100, comma-separated, no spaces) — the name and subtitle are
already indexed, so these avoid "slime", "rush" and "floor":

```
runner,endless,arcade,jump,reflex,one tap,casual,high score,dodge,platform,speedrun,offline
```

**Description** (4000):

```
Open a runner today and the running is the smallest thing in it. There is a
streak to protect, a chest counting down, a battle pass at 40%, a bonus for
coming back tomorrow — all of it built so that stopping costs you something.

Slime Rush has none of that machinery. There is a slime, a lane, a floor with
holes in it, and a number.

A RUN STARTS BEFORE YOU'RE READY
No menu, no loadout, no daily objective to dismiss. The slime is already moving
when the screen settles. Your first decision is a jump, not a tap-through.

ONE THUMB, THREE VERBS
Tap to jump. Hold to slam. Swipe to dash. Everything you will ever need to do is
reachable without looking at your hand.

THE FLOOR IS THE WHOLE ENEMY
No health bar, no enemies to grind down. Just gaps, spikes, and the moment you
commit a fraction too late — which is always your fault, and always legible.

A BEST THAT IS ACTUALLY YOURS
Your record sits on your device, not on a leaderboard full of strangers and
scripts. Nothing resets it, nothing inflates it, and nothing asks you to sign in
to keep it.

THE HONEST PART
Slime Rush is free and paid for by ads between runs. There is no "watch an ad to
continue", no ad during a run, and no paid tier you are being nudged towards —
there are no in-app purchases at all. You can make the ads non-personalised in
two taps from your phone's settings, and the game plays identically either way.

WHAT IS NOT IN IT
No account. No login. No energy timer. No subscription. No in-app purchases. No
daily streak to lose.

Slime Rush is made by Astradite Private Limited, a software product studio in
Kurnool, India.

Support: https://www.astradite.com/games/slime-rush/support
Privacy: https://www.astradite.com/games/slime-rush/privacy
Terms: https://www.astradite.com/games/slime-rush/terms
```

**Copyright** — `2026 Astradite Private Limited`

**Category** — Primary: Games → Arcade. Secondary: Games → Action.

**Age rating** — 4+. No objectionable content in any category; no unrestricted
web access; no user-generated content; no gambling or contests. **ads** The ad
content rating must be capped to match — see build item 5 above.

**App Privacy (nutrition labels)** — confirm against each SDK's own disclosure
before submitting. Note the tracking column: it is what separates this app from
Kick Off 2.

| Type | Data | Purpose | Linked to user | Used to track |
| --- | --- | --- | --- | --- |
| Identifiers | Device ID (IDFA) | Third-Party Advertising | No | **Yes** |
| Usage Data | Advertising Data | Third-Party Advertising | No | **Yes** |
| Diagnostics | Crash Data | App Functionality | No | No |
| Diagnostics | Performance Data | App Functionality | No | No |
| Usage Data | Product Interaction | Analytics | No | No |

Because two rows are marked "Used to track", App Store Connect will require the
App Tracking Transparency prompt — build item 3.

Nothing else. No Contact Info, no Location, no Purchases, no User Content.

**Still outstanding before you can hit Add for Review:** screenshots. Apple
needs at least one set for iPhone with Dynamic Island (medium display); the
other device sizes scale down from it unless you upload them separately.

## Google Play Console

**App name** (30) — `Slime Rush`

**Short description** (80):

```
One slime, one lane, a floor full of holes. Thirty seconds to beat your best.
```

**Full description** (4000) — the App Store description above works as-is.

**Category** — Games → Arcade. Tags: arcade, endless runner, casual, one tap.

**Content rating questionnaire** — category "Game"; no violence, no sexuality,
no language, no controlled substances, no gambling, no user interaction, no
location sharing, no personal information sharing, no digital purchases.
**ads** Answer *yes* to the question about advertising. Expected outcome:
Everyone / PEGI 3 / USK 0.

**Target audience** — 13 and over. The game is suitable for all ages and rated
accordingly, but the privacy policy states it is not directed at children under
13, and selecting an under-13 age group brings the app under the Play Families
Policy — which, for an ad-supported app, additionally restricts you to
Google-certified ad SDKs and bans interest-based advertising outright. Keep the
two consistent: wanting under-13 in the target audience means changing the
privacy policy and the ad configuration first, not just this answer.

**Ads** — **Yes, this app contains ads.** The listing will show a "Contains
ads" label. **ads**

**App access** — All functionality is available without special access. No
login, no credentials for review.

**Data safety form**:

- Does your app collect or share any of the required user data types? **Yes.**
- Is all of the user data collected by your app encrypted in transit? **Yes.**
- Do you provide a way for users to request that their data is deleted?
  **Yes** — `https://www.astradite.com/games/slime-rush/privacy#rights`

| Data type | Collected | Shared | Required | Purpose |
| --- | --- | --- | --- | --- |
| Device or other IDs | Yes | **Yes** | Optional | Advertising or marketing |
| App activity → App interactions | Yes | No | Optional | Analytics |
| App info and performance → Crash logs | Yes | No | Optional | Analytics, App functionality |
| App info and performance → Diagnostics | Yes | No | Optional | Analytics, App functionality |
| Location → Approximate location | Yes | **Yes** | Optional | Advertising or marketing |

Mark each as optional, since both the ad identifier and the diagnostics are
switchable off at the OS level. **ads** The "Shared" answers and the approximate
location row exist because the ad SDK sends the advertising ID and the IP
address to a third party that acts as its own controller — that is sharing
under Play's definition even though we receive nothing back. Approximate
location is listed because an IP address resolves to a country or region; if
your ad SDK's own Data Safety guidance says otherwise for your configuration,
follow it and note why.

**Still outstanding:** a 512×512 app icon, a 1024×500 feature graphic, and at
least two phone screenshots.

## When the listings go live

Both store links are deliberately held back until each listing resolves. To turn
them on, uncomment the `href` on the matching entry in `lib/games.ts` and change
`status` / `statusLabel` to `live` / `LIVE`. Slime Rush has no App Store id
recorded yet — add it when App Store Connect issues one.

The store cards, the hero pill, the `/games` list, the share cards and the
`sameAs` entries in the structured data all read from that one file.
