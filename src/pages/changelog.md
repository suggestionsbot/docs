---
title: Changelog
description: Look at past non-technical changes made to the documentation.
---

# Changelog
Review previous changelogs in regard to newly added bot features and when they were documented on the website.

:::info
Only changelogs newer than _December 4, 2023_, are documented.
:::

## `March 29, 2024` - Version 3.23

### New features

- Suggestions support newline characters (`\n`) allowing for better suggestion formatting
- The bot will ping the suggestions author in newly created suggestions threads

### Bug fixes

- Fixed a condition where resolving a suggestion when the bot was missing log channel permissions would result in the suggestion disappearing
- Fixed the CDN including an extra `.` in image urls

### Technical changes

#### Bot

- Reduced the amount of API requests required to delete messages
- Moved functionality from our Disnake fork into the bot 
- Updated Zonis to the next major version
- More metadata in certain log messages
- Removed some unused methods

#### Garven

- Updated Zonis to the next major version

## `March 10, 2024` - Version 3.22

### Documented Changes
- Ability to configure suggestions channel queue ([`acff1c1`](https://github.com/suggestionsbot/suggestions-bot/pull/75/commits/acff1c12711b4d16a932549a95d12d5c0724bfdc))

### Minor Changes
- `pt_BR` translations ([`79a0be9`](https://github.com/suggestionsbot/suggestions-bot/pull/75/commits/79a0be99eaaea785b20ae0380adcd41b761b926f))

### Bug Fixes
- Fix information disclosures in commands using the wrong value for the command author ([`5840093`](https://github.com/suggestionsbot/suggestions-bot/pull/75/commits/584009376f51621e524521ab8ef971a25de70698))
- Fix images 404'ing after 2 weeks ([`d38a3c7`](https://github.com/suggestionsbot/suggestions-bot/pull/75/commits/d38a3c7a22cc91e77d4c827dd363a111e8f89e24))

### Technical Changes

#### Documentation
- No technical changes, but maybe upgrading to a v4 alpha version of [skyra-components](https://github.com/skyra-project/discord-components/blob/main/packages/core/UPGRADING-TO-V4.md) soon if a public release isn't available by then

#### Bot
- Moved to centralised logging ([`e083d20`](https://github.com/suggestionsbot/suggestions-bot/pull/75/commits/e083d20492d7c8c258f5d5664f029de1339cd794))
- Added internal helper classes ([`cee879e`](https://github.com/suggestionsbot/suggestions-bot/pull/75/commits/cee879ebde7c7cb325e64095fa7a128f92f672f2))

## `January 4, 2024`

### Documented Changes
- Add missing documentation for the [`/clear`](../../docs/commands#clear-command) command ([v3.2](https://github.com/suggestionsbot/suggestions-bot/issues/1))

### Minor Changes
- Remove the `/coming-soon` route as the bot is stable and has nearly all features from the previous JavaScript version

### Bug Fixes
- Voters should no longer display on cleared suggestions ([v3.20](https://github.com/suggestionsbot/suggestions-bot/pull/70/))

### Technical Changes

#### Documentation
- No technical changes

#### Bot
- The bot runs behind a gateway proxy for zero downtime deployments (reverted as of [`c5727a6`](https://github.com/suggestionsbot/suggestions-bot/commit/c5727a6658c8f2dd5f1daf631fb9cd7e2a75bf1f))
- The ability to expose further information via our API
- The shard count is now **5** shards per cluster with a total of **14** clusters

## `December 4, 2023`

### Documented Changes
- Suggestion queue via the `/queue` command (v3.12)
- Configure if images are able to be attached to suggestions via `/config images_in_sugggestions` (v3.14)
- View who voted on a suggestion `/view voters` command (v3.14)
- Anonymous suggestion resolutions via `/config anonymous_resolutions` (v3.15)
- Block users from submitting suggestions via `/blocklist user` (v3.18)

### Minor Changes
- Improved rendered embeds and other Discord React componenents

### Bug Fixes
- To many to address in this one changelog

### Technical Changes

#### Documentation
- Upgraded repo Yarn to `v3.9.4`
- Upgraded repo to Node `v18.12.1`
- Upgade all other repo dependencies to latest major sem versions (holding off on Docusaurus v3)

#### Bot
- General infrastructure and codebase refactoring and changes. Too much to properly document on this page