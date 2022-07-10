---
sidebar_position: 1
title: Getting Started
description: Get started with inviting the Suggestions bot and setting up its primary features.
---

To invite the bot, you must use [this link](https://discord.com/oauth2/authorize?client_id=474051954998509571&permissions=388160&scope=applications.commands+bot).

Here you can choose the server you wish to invite the bot to and choose what permissions it should have. It's best to leave the permissions alone or you'll most likely run into issues. The bot is only assigned the permissions it needs. Those permissions are:

* View Channels (`VIEW_CHANNEL`)
* Send Messages (`SEND_MESSAGES`)
* Manage Messages (`MANAGE_MESSAGES`)
* Embed Links (`EMBED_LINKS`\)
* Read Message History (`READ_MESSAGE_HISTORY`)
* Add Reactions (`ADD_REACTIONS`)

## Setting Up the Bot

Once the bot is in your server, there are a few housekeeping things you need to do. (You must have the Manage Server (`MANAGE_GUILD`) permission to complete these steps.)

The bot now uses application/slash commands. This provides better integration into Discord and is a more efficient way to use the bot.

1. Create and set a suggestions channel by running `config channel <channel>`.

   a) Add the bot to that channel's permissions and exclusively give it the `SEND MESSAGES` and `ADD REACTIONS` permissions. (Add anymore depending on what permissions you gave the bot globally.)

   b) Disable `SEND MESSAGES` and `ADD REACTIONS` for `@everyone` to keep the channel clean and that users only vote with the configured emoji set (e.g. the ✅ and ❌ emojis).

2. Adjust the permissions of the `approve` and `reject` slash commands in your server's settings via the "Integrations" page. Choose the roles that you would like to have the permissions to approve and reject suggestions.

3. Choose an emoji set for your server. You can view the available sets via the `config get emojis` command and choose which one you want in your server with `config emojis <#>`, where `#` indicates which emoji option.

*- Step 2 is only required if you'll be managing suggestions using the `approve` and `reject` slash commands.*

*- If you wish to use a separate channel for posting suggestion results, check out [this section](managing-suggestions.md#suggestions-logging).*

Once you completed those steps, you should be set to go! Click "Managing Suggestions" on the left or down below for more information on approving/rejecting user suggestions.
