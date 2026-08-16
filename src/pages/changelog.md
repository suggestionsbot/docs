---
title: Changelog
description: Look at past non-technical changes made to the documentation.
---

# Changelog
Review previous changelogs in regard to newly added bot features and when they were documented on the website.

## Version 4 Changelog

### Version 4.2 - August 8th 2026

#### User facing changes

- Added guild premium
  - This can be managed via the [dashboard here](https://dashboard.suggestions.gg/stripe/guilds/tokens)
- Added support for sending custom content with suggestions, such as pinging a reviewer role
- Added support for custom suggestion cooldowns
- Added support for custom names and avatars (Only on custom instances)
- Limited the view voters message commands to guilds
- Limit Suggestion message commands to guild only

#### Technical changes

- Handle if users leave anonymous blank
- Add tests for the payment flow
- Disabled various dashboard pages that are still under construction
- Cleaned up our translation files

### Version 4.1 - August 1st 2026

#### User facing changes

- Added support for custom thread names on suggestions
- Added a link to resolved suggestions containing a link to the initial suggestion thread
- Localise the view docs buttons
- Error if trying to resolve things anonymously when disabled
- Allow suggesting from suggestion buttons without a log channel configured
- Modify voter storage to also track user names

#### Technical changes

- Remove null bytes from stored error tracebacks
- Added an aggregated statistics page to the dashboard
- Aggregate statistics per week
- Cache DM channel ids
- Fix OTEL user attributes

## Migrating to Version 4

We have migrated all user data to the new version. You should not need to reconfigure anything and should be able to continue using the bot as you do today. although some command names have changed.

#### Noteworthy user changes

- Easier onboarding with a `/setup` command.
- Support for up to five images in suggestions.
- Anonymous interactions are now opt in. Moderators are no longer anonymous by default and have to set `anonymously:True` instead.
- Guild configuration has been massively simplified and is now behind one command: `/configure guild`. See [here](docs/guild-configuration) for more info.
- Users now have a specific configuration command. See [here](docs/user-configuration) for more info.
- The suggestion embed has been revamped. More changes may occur based on feedback, but now it's way more feature packed.
- We now use pop-up modals for things such as `/suggest`. If a slash command doesn't feature requests for info it is likely going to ask for it later.
- The entire bot is localized and can be configured at both the user and guild level.
- More configuration options and slash command changes.
- More ways to resolve suggestions on top of approve and reject. See `/resolve`.

#### Technical changes

- Rewrote the bot in Hikari
- Moved to using Discords components version two for UI items instead of embeds
- Moved from MongoDB to Postgres
- We now actually have a background job worker
- OpenTelemetry for all commands

We recognize this is a lot of changes and some may differ from existing functionality, but we recommend giving it a go. If you have any feedback please join our [discord](https://suggestions.gg/contact) and let us know.

---

:::info
Only changelogs newer than _December 4, 2023_, are documented.
:::

## Bot Version 3

### `September 12th, 2025` - Version 3.31

#### Changes & Features

- Made errors in suggestions with images more clear
- Added a maximum file upload size
- Added Spanish language support
- Automatically attempt to retry file uploads if they fail the first time

#### Bug fixes

- NoneType errors within suggestion creation
- Some criticals being raised in logs that are actually just error
- Fixed EN translations mentioning that files persist for two weeks. This is no longer true

#### Technical Changes

- Move from `poetry` to `uv`
- Remove our pytest GitHub workflow
- Downgrade stats enum logs to debug level

### `September 9th, 2025` - Version 3.30

#### Technical Changes

- Fixed the memory issues so in theory the bot will become more responsive now

### `Feburary 17th, 2025` - Version 3.29

#### Changes & Features

- `/stats` now uses the correct `disnake` version
- Fix `/clear` failing in some cases

#### Technical changes

- Remove backend status pushes as the status page no longer exists
- Move to GHCR
- Add `__slots__` to primary DB objects
- Add blocking monitor to try figure out runtime slowness in clusters
- Remove push stats

### `January 26th, 2025` - Version 3.28

#### Bug fixes

- Fixed the location of `da` locales
- Fixed threads failing to archive when suggestions are resolved

#### Technical changes

- Upgraded to the latest versions of Disnake and disnake ext components
- Dockerfile builds

### `November 4th, 2024` - Version 3.27 

#### Changes & Features

- Added Danish and Turkish translations
- Show physical queue items within /queue view

#### Bug fixes

- Allow using /clear on queued items
- Fix the queue numbers within /queue info
- Fix queue resolution if a message is deleted

#### Technical changes

- Move to poetry

### `July 30th, 2024` - Version 3.26

#### Bug fixes

- Better handle errors where a thread fails to archive
- Report a suggestion not found while editing suggestion messages
- Resolved items not being removed from the virtual queue
- Resolved the `Moderator Note` being added inline within suggestions embeds
- Fixed `notes` commands failing to respond

#### Technical changes

- Emit tracebacks on more logs

### `June 13th, 2024` - Version 3.25

#### Changes / Features

- Support `\n` in notes
- Add moderator notes to resolved suggestions
- When suggestion content length is exceeded, return the suggestion text to user

#### Bug fixes

-  Fixed some errors with suggestions being incomplete server side

#### Technical changes

- Fully removed our need to fork `disnake`
- Fully removed our need to use `bot base`
- More internal logging

### `June 9th, 2024` - Version 3.24

#### Changes / Features

- Added German translations
- More Portuguese translations
- Users can now add notes to suggestions
- Users can toggle on and off the ability to be pinged in new suggestion threads of theirs
- Guilds can toggle pings for this as well
- Queued suggestions can be approved and rejected using /approve and /reject
    - Users can add notes to these as well. On approval this note is set as the new suggestions note, on rejection this is added to the rejection embed

#### Bug fixes

- Fixed the blocklist remove command without arguments
- Fixed some errors happening silently in buttons
- Queued suggestions turn red upon rejection

#### Technical changes

- Bumped our logging library for some bug fixes
- Modified logging levels to reduce log fatigue
- Removed some background debug logging

### `March 29, 2024` - Version 3.23

#### New features

- Suggestions support newline characters (`\n`) allowing for better suggestion formatting
- The bot will ping the suggestions author in newly created suggestions threads

#### Bug fixes

- Fixed a condition where resolving a suggestion when the bot was missing log channel permissions would result in the suggestion disappearing
- Fixed the CDN including an extra `.` in image urls

#### Technical changes

##### Bot

- Reduced the amount of API requests required to delete messages
- Moved functionality from our Disnake fork into the bot 
- Updated Zonis to the next major version
- More metadata in certain log messages
- Removed some unused methods
- All unhandled errors are pushed into our logging pipeline so we can catch and fix them easier

##### Garven

- Updated Zonis to the next major version

### `March 10, 2024` - Version 3.22

#### Documented Changes
- Ability to configure suggestions channel queue ([`acff1c1`](https://github.com/suggestionsbot/suggestions-bot/pull/75/commits/acff1c12711b4d16a932549a95d12d5c0724bfdc))

#### Minor Changes
- `pt_BR` translations ([`79a0be9`](https://github.com/suggestionsbot/suggestions-bot/pull/75/commits/79a0be99eaaea785b20ae0380adcd41b761b926f))

#### Bug Fixes
- Fix information disclosures in commands using the wrong value for the command author ([`5840093`](https://github.com/suggestionsbot/suggestions-bot/pull/75/commits/584009376f51621e524521ab8ef971a25de70698))
- Fix images 404'ing after 2 weeks ([`d38a3c7`](https://github.com/suggestionsbot/suggestions-bot/pull/75/commits/d38a3c7a22cc91e77d4c827dd363a111e8f89e24))

#### Technical Changes

##### Documentation
- No technical changes, but maybe upgrading to a v4 alpha version of [skyra-components](https://github.com/skyra-project/discord-components/blob/main/packages/core/UPGRADING-TO-V4.md) soon if a public release isn't available by then

##### Bot
- Moved to centralised logging ([`e083d20`](https://github.com/suggestionsbot/suggestions-bot/pull/75/commits/e083d20492d7c8c258f5d5664f029de1339cd794))
- Added internal helper classes ([`cee879e`](https://github.com/suggestionsbot/suggestions-bot/pull/75/commits/cee879ebde7c7cb325e64095fa7a128f92f672f2))

### `January 4, 2024`

#### Documented Changes
- Add missing documentation for the [`/clear`](../../docs/commands#clear-command) command ([v3.2](https://github.com/suggestionsbot/suggestions-bot/issues/1))

#### Minor Changes
- Remove the `/coming-soon` route as the bot is stable and has nearly all features from the previous JavaScript version

#### Bug Fixes
- Voters should no longer display on cleared suggestions ([v3.20](https://github.com/suggestionsbot/suggestions-bot/pull/70/))

#### Technical Changes

##### Documentation
- No technical changes

##### Bot
- The bot runs behind a gateway proxy for zero downtime deployments (reverted as of [`c5727a6`](https://github.com/suggestionsbot/suggestions-bot/commit/c5727a6658c8f2dd5f1daf631fb9cd7e2a75bf1f))
- The ability to expose further information via our API
- The shard count is now **5** shards per cluster with a total of **14** clusters

### `December 4, 2023`

#### Documented Changes
- Suggestion queue via the `/queue` command (v3.12)
- Configure if images are able to be attached to suggestions via `/config images_in_sugggestions` (v3.14)
- View who voted on a suggestion `/view voters` command (v3.14)
- Anonymous suggestion resolutions via `/config anonymous_resolutions` (v3.15)
- Block users from submitting suggestions via `/blocklist user` (v3.18)

#### Minor Changes
- Improved rendered embeds and other Discord React componenents

#### Bug Fixes
- To many to address in this one changelog

#### Technical Changes

##### Documentation
- Upgraded repo Yarn to `v3.9.4`
- Upgraded repo to Node `v18.12.1`
- Upgade all other repo dependencies to latest major sem versions (holding off on Docusaurus v3)

##### Bot
- General infrastructure and codebase refactoring and changes. Too much to properly document on this page