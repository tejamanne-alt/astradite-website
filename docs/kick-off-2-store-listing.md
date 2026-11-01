# Kick Off 2 — store submission reference

Everything App Store Connect and the Play Console ask for, in one place. The
URLs below are live on this site; the copy is a draft to paste in and edit, not
a finished decision.

> **Confirm before you submit.** The data declarations here describe a game
> that is fully offline, has no accounts, no advertising and no in-app
> purchases, and ships a crash/performance SDK. That is what the privacy policy
> on the site says. If the build does anything else, the policy and these
> answers both have to change — a store rejection for mismatched data
> declarations is one of the most common, and one of the slowest to clear.

## URLs

| Field | Value |
| --- | --- |
| Marketing URL (App Store) | `https://www.astradite.com/games/kick-off-2` |
| Support URL (App Store) | `https://www.astradite.com/games/kick-off-2/support` |
| Privacy Policy URL (both stores) | `https://www.astradite.com/games/kick-off-2/privacy` |
| EULA / Licence Agreement (App Store) | `https://www.astradite.com/games/kick-off-2/terms` |
| Website (Play Console) | `https://www.astradite.com/games/kick-off-2` |
| Support email (both stores) | `contact@astradite.com` |
| Data deletion URL (Play, if asked) | `https://www.astradite.com/games/kick-off-2/privacy#rights` |

The games hub lives at `https://www.astradite.com/games`.

## App Store Connect

**Name** (30) — `Kick Off 2`

**Subtitle** (30) — `Ninety seconds of football`

**Promotional Text** (170) — editable without a new build, so use it for news:

```
A match in one tap, ninety seconds a side, and nothing that needs a connection. No accounts, no ads, no energy timers. Just the ball.
```

**Keywords** (100, comma-separated, no spaces) — the name and subtitle are
already indexed, so these deliberately avoid "kick", "off" and "football":

```
soccer,arcade,offline,sports,penalty,goal,striker,match,retro,casual,pitch,shootout,no wifi
```

**Description** (4000):

```
Football on a phone used to be a thing you did while the kettle boiled. Then it
grew a squad screen, a card economy, a login, an energy meter and a download
measured in gigabytes — and the part where you actually kick a ball became the
shortest thing in the session.

Kick Off 2 goes the other way.

ONE TAP TO A MATCH
No squad screen. No transfer window. No tutorial you have to sit through. Open
it, pick a side, kick off.

NINETY SECONDS A SIDE
A full match fits inside a lift ride. Short enough that losing costs you
nothing, which is the only reason anyone ever plays one more.

THREE CONTROLS, NO VIRTUAL STICK
Swipe to pass. Hold to shoot. Tap to slide. The ball carries real weight and
your players make real runs — find one before the keeper does.

WORKS WITH THE RADIO OFF
Every match runs on your device. Aeroplane mode, a dead patch on the metro, a
hotel with hostile wifi — none of it touches the game.

A SEASON YOU CAN FINISH
A cup run is a handful of matches, not a second job. Your progress sits on your
phone and carries forward. Nothing resets because a server went away.

WHAT IS NOT IN IT
No ads. No in-app purchases. No subscription. No account. No energy timer. No
data collection beyond the crash reports that tell us what to fix.

Kick Off 2 is made by Astradite Private Limited, a software product studio in
Kurnool, India.

Support: https://www.astradite.com/games/kick-off-2/support
Privacy: https://www.astradite.com/games/kick-off-2/privacy
Terms: https://www.astradite.com/games/kick-off-2/terms
```

**Copyright** — `2026 Astradite Private Limited`

**Category** — Primary: Games → Sports. Secondary: Games → Arcade.

**Age rating** — 4+. No objectionable content in any category; no unrestricted
web access; no user-generated content; no gambling or contests.

**App Privacy (nutrition labels)** — confirm against the SDK's actual
configuration before submitting:

| Type | Data | Purpose | Linked to user | Tracking |
| --- | --- | --- | --- | --- |
| Diagnostics | Crash Data | App Functionality | No | No |
| Diagnostics | Performance Data | App Functionality | No | No |
| Usage Data | Product Interaction | Analytics | No | No |

Nothing else. No Contact Info, no Identifiers used for tracking, no Location,
no Purchases, no User Content. The app presents no App Tracking Transparency
prompt, because it does not track.

**Still outstanding before you can hit Add for Review:** screenshots. Apple
needs at least one set for iPhone with Dynamic Island (medium display); the
other device sizes scale down from it unless you upload them separately. App
previews are optional.

## Google Play Console

**App name** (30) — `Kick Off 2`

**Short description** (80):

```
Arcade football. One tap to a match, ninety seconds a side, fully offline.
```

**Full description** (4000) — the App Store description above works as-is; Play
accepts the same text and allows the same plain-text formatting.

**Category** — Games → Sports. Tags: arcade, football, offline, casual.

**Content rating questionnaire** — category "Game"; no violence, no sexuality,
no language, no controlled substances, no gambling, no user interaction, no
location sharing, no personal information sharing, no digital purchases.
Expected outcome: Everyone / PEGI 3 / USK 0.

**Target audience** — 13 and over. The game is suitable for all ages and rated
accordingly, but the privacy policy states it is not directed at children under
13, and selecting an under-13 age group brings the app under the Play Families
Policy, with its own SDK, advertising and consent requirements. Keep the two
consistent: if you want under-13 in the target audience, the privacy policy
needs a COPPA/Families section first.

**Ads** — No, this app contains no ads.

**App access** — All functionality is available without special access. No
login, no credentials for review.

**Data safety form**:

- Does your app collect or share any of the required user data types? **Yes.**
- Is all of the user data collected by your app encrypted in transit? **Yes.**
- Do you provide a way for users to request that their data is deleted?
  **Yes** — `https://www.astradite.com/games/kick-off-2/privacy#rights`

| Data type | Collected | Shared | Required | Purpose |
| --- | --- | --- | --- | --- |
| App activity → App interactions | Yes | No | Optional | Analytics |
| App info and performance → Crash logs | Yes | No | Optional | Analytics, App functionality |
| App info and performance → Diagnostics | Yes | No | Optional | Analytics, App functionality |
| Device or other IDs | Yes | No | Optional | Analytics |

Mark each as optional, since the diagnostics are switchable off at the OS level.
Nothing is shared with third parties for their own purposes, and nothing is used
for advertising or marketing.

**Still outstanding:** a 512×512 app icon, a 1024×500 feature graphic, and at
least two phone screenshots.

## When the listings go live

Both store links are deliberately held back until each listing resolves. To turn
them on, uncomment the `href` on the matching entry in `lib/games.ts` and change
`status` / `statusLabel` to `live` / `LIVE`:

- App Store — `https://apps.apple.com/app/id6829455628` (the id is already in
  the file as `APP_STORE_ID`).
- Google Play — `https://play.google.com/store/apps/details?id=<package name>`;
  the package name is not recorded here yet.

The store cards, the hero pill, the `/games` list, the share cards and the
`sameAs` entries in the structured data all read from that one file.
