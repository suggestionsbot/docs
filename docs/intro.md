---
sidebar_position: 1
title: Getting Started
description: Get started with inviting the Suggestions bot and setting up its primary features.
---

To invite the bot, you may use [this link](https://discord.com/oauth2/authorize?client_id=474051954998509571&permissions=388160&scope=applications.commands+bot).

Here you can choose the server you wish to invite the bot to and choose what permissions it should have. It's best to leave the permissions alone, or you'll most likely run into issues. By default, the bot is assigned the following [scopes](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes) and [permissions](https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ):

Scopes:
* `bot`
* `applications.commands`

Permissions:
* Read Messages
* Send Messages
* Manage Messages
* Embed Links
* Attach Files
* Read Message History
* Add Reactions
* Use External Emojis

## Setting Up the Bot

The bot now uses application/slash commands. This provides better integration into Discord and is a more efficient way to use the bot.

Once the bot is in your server, there are a few housekeeping things you need to do. (You must have the **Manage Server** permission to complete these steps.)

1. Create and set a suggestions channel by running `/config channel <channel>`. 
   1. Add the bot to that channel's permissions and exclusively give it the permissions **Send Messages** and **Add Reactions**. (Add additional permissions depending on what you gave the bot in your server.)
   2. Disable **Send Messages** and **Add Reactions** for `@everyone` to only allow the bot to send messages and for users to only vote with the configured emoji set (e.g. the ✅ and ❌ emojis).
2. Set up your logs/results channel for approved/rejected suggestions by running `/config logs <channel>`.
   1. Add the bot to that channel's permissions and exclusively give it the permissions **Send Messages**. (Add additional permissions depending on what you gave the bot in your server.)
   2. Disable **Send Messages** and **Add Reactions** for `@everyone` to only allow the bot to send messages and to prevent users from adding message reactions.
3. Adjust the permissions of the `approve` and `reject` slash commands in your server's settings via the [Integrations](https://support.discord.com/hc/en-us/articles/360045093012-Server-Integrations-Page) page.

Once you completed those steps, you should be set to go! Go to [Managing Suggestions](managing-suggestions.mdx) for more information on approving/rejecting suggestions.
