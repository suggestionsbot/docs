---
title: Changelog
description: Look at past non-technical changes made to the documentation.
---

# Changelog
Review previous changelogs in regard to newly added bot features and when they were documented on the website.

:::info
Only changelogs newer than _December 4, 2023_, are documented.
:::

## `March 10, 2024`

### Documented Changes
- TBD

### Minor Changes
- TBD

### Bug Fixes
- TBD

### Technical Changes

#### Documentation
- TBD

#### Bot
- TBD

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