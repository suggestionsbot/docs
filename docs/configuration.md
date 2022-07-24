---
sidebar_position: 3
title: Configuration
description: Learn how to configure various aspects of the Suggestions bot.
---
import ServerConfiguration from '@site/src/components/Embeds/ServerConfiguration';

_**Key:**_  
`< >` = Required  
`[ ]` = Optional

**Note:** Although you're not supposed to type these placeholders, if you type them when running a command, the bot will ignore them.

`|` = Means "or"  
`bot` = Refers to the Suggestions bot  
`administrator` = Refers to a user with the **Manage Server** permission

One of the core components of the bot is the fact that the administrators can configure various aspects of the bot to their liking. From the suggestions channel to DM responses, you can take control of your server's experience.

With Discord's slash commands, it's easy to configure the bot with readable and UI-friendly commands and options.

Configuring the bot is really easy. The format goes as:
- To view the current configuration, run `/config get`.
- To view the information of a specific option, run `/config get [option]`. The bot will give you a list of all available options to choose from.
- To set a specific option, run `/config [option] [value]`.

Here is an overview of all the configurable options. Keep scrolling for more information about each option.

<ServerConfiguration />

## Suggestions Channel
Usage: `/config get channel` (to view) or `/config channel [channel]` (to set)

You can either view or set the channel where suggestions will be posted. You will be able to choose from a list of text channels in your server.

## Suggestions Logs Channel
Usage: `/config get logs` (to view) or `/config logs [channel]` (to set)

You can either view or set the channel where suggestion results will be posted after a suggestion is approved or denied. The options to pass through follow the same as setting the [Suggestions Channel](#suggestions-channel).

## DM Responses
Usage: `/config get dm` or `/config dm [enable|disable]`

You can either view if DM responses are enabled/disabled or enable/disable them if you wish.

When disabling DM responses, the bot won't DM the user on these actions:

- A suggestion is submitted
- A suggestion is approved
- A suggestion is rejected
- A note is added to a suggestion

Users are also able to configure their own DM settings using the `/dm <enable|disable>` command. This allows a user to choose their own preferences. However, they cannot override your server's settings. 

This means if you disabled DMs via the `/config` command, the user will not be able to receive them if they tried to enable them.
