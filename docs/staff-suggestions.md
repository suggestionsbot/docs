---
sidebar_position: 3
title: Staff Suggestions
description: Allow staff members to internally vote on staff suggestions without interference or the need for a second bot.
---

::: warning
This feature doesn't mirror the regular user suggestions. This means there's no logging, a unique sID for each suggestion, or a way to manage a staff suggestion by using its message ID, nor does the configured emoji set apply to staff suggestions. It's a lightweight feature that allows staff members to vote on matters internally with zero interference of the user suggestions feature.  
However, it'll be possible to manage staff suggestions when the bot version 3 is released.
:::

## Setting Things Up

This feature makes the bot unique, versatile, and prevents server owners from having to get a second bot to deal with matters like this. And getting a second bot for the same feature used in a different way isn't always practical. That's why this bot has the feature for staff members to submit suggestions to be voted on and dealt with internally.

Remember the slash command permissions you set back at the [Getting Started](intro.md) section? Well, it comes to use here as well! This is because users with that role can not only manage suggestions, but they can also submit suggestions internally! The setup mirrors the initial suggestions channel setup process:

1. Create and set a staff suggestions channel by doing `config staffchannel <channel>`. (you must be an administrator to do this action.)

   a) Add the bot to that channel's permissions and exclusively give it the `SEND MESSAGES` and `ADD REACTIONS` permissions. (Add anymore depending on what permissions you gave the bot globally.)

   b) Disable `SEND MESSAGES` and `ADD REACTIONS` for the staff role to keep the channel clean and that users only vote with the ✅ and ❌ emojis.

2. Double check you are in one of the roles or are one of the users configured for the `approve` and `reject` roles back in the Getting Started section. Run `/staffsuggest` to submit a new staff suggestion.

Once this is all setup, your staff members should be good to suggest new ideas and vote!
