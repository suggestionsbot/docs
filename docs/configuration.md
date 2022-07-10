---
sidebar_position: 5
title: Configuration
description: Learn how to configure various aspects of the Suggestions bot.
---

_**Key:**_  
`< >` = Required  
`[ ]` = Optional

**Note:** Although you're not supposed to type these placeholders, if you type them when running a command, the bot will ignore them.

`|` = Means "or"  
`bot` = Refers to the Suggestions bot  
`administrator` = Refers to a user with the Manage Server `(MANAGE_GUILD)` permission  
`emoji set` = Refers to the reactions added to suggestions

One of the core components of the bot is the fact that the administrators can configure various aspects of the bot to their liking. From the emojis used on suggestions to DM responses, you can take control of your server's experience.

Configuring the bot is really easy. The format goes as:
- To view all configurable options, run `config`.
- To view the information of a specific option, run `config [option]`. (Check the image below for different options.)
- To set a specific option, run `config [option] [value]`.

Here is an overview of all the configurable options. Keep scrolling for more information about each option.

![Suggestions Configuration Options](/img/configuration-1.png)

## Prefix
Usage: `config prefix` or `config prefix [prefix]`

You can either view or set the custom prefix to be used in your server. If at any time you forget the prefix, simply mention the bot `@Suggestions#2602` or run `@Suggestions#2602 prefix`.

The bot's mention can also be used as a command prefix.

## Suggestions Channel
Usage: `config channel` or `config channel [channel]`

You can either view or set the channel where suggestions will be posted. Channels that don't exist in the server can't be set. The options to pass through when setting the channel can be:

- the channel mention - `#suggestions`
- the channel name - `suggestions`
- the channel ID - `480265871596584970`

## Suggestions Logs Channel
Usage: `config logs` or `config logs [channel]`

You can either view or set the channel where suggestion results will be posted after a suggestion is approved or denied. The options to pass through follow the same as setting the [Suggestions Channel](#suggestions-channel). Keep in mind you can't set a channel that doesn't exist in the server.

## Staff Suggestions Channel
Usage: `config staffchannel` or `config staffchannel [channel]`

You can either view or set the channel where staff suggestions will be posted. The options to pass through follow the same as setting the [Suggestions Channel](#suggestions-channel). Keep in mind you can't set a channel that doesn't exist in the server.

Users can only have suggestions posted to the staff suggestions channel through the `staffsuggest` command. A user has access to this command if they're an admin or they're a member of one of the set staff roles. (Refer to the [Staff Roles](#staff-roles) section.)'

Read more about staff suggestions via the [Staff Suggestions](staff-suggestions.md) page.

## Staff Roles
Usage: `config roles` or `config roles [role]`

You can either view or set the various staff roles that are used for managing suggestions as well as submitting staff suggestions. Roles that don't exist in the server can't be set. The options to pass through when adding/removing a staff role can be:

- the role mention - `@Da Nerds`
- the role name - `Da Nerds`
- the role ID - `480249370382696458`

If the role you wish to set isn't mentionable, follow this format using the role ID: `<@&ROLE_ID>`. The bot will resolve the mention and set the role without tagging the role.

Adding/removing a staff role is automatically determined by if it's been set previously. So if you've previously added `Moderator` as a role and you run `config roles Moderator`, the bot will remove the role as a staff role. This applies vice versa.

## Vote Emojis
Usage: `config emojis` or `config emojis [id]`

You can either view all available vote emojis or set one to your liking. Invalid predefined emoji sets can't be set. You can set a specific emoji set via its ID (not the ID of the emoji itself) that's listed when running `config emojis`.

For more information on vote emojis, check out the [Suggestion Emojis](managing-suggestions.md#suggestions-emojis) section on the [Managing Suggestions](managing-suggestions.md) page.

## Rejection Responses
Usage: `config responses` or `config responses [true|false]`

You can either view or set if a response is required when rejecting a suggestion. If the setting is enabled and a staff member attempts to reject a suggestion without a response, the bot will return an error letting them know that.

## Disabled Commands
Usage: `config commands` or `config commands [command]`

You can either view all currently disabled commands in your server or add/remove commands that you wish to be disabled from usage in your server. When trying to use a server-disabled command, the bot will return an error letting the command sender know.

Enabling/disabling a command is automatically determined by if it's been adjusted previously. So if you've previously disabled the `approve` command and you run `config commands approve`, the bot will enable the `approve` command. This applies vice versa.

However, some commands have been "guarded", meaning they can't be enabled/disabled in your server. The commands go as followed:

- `config`
- `changelog`
- `help`
- `info`
- `invite`
- `patrons`
- `ping`
- `prefix`
- `serverinfo`
- `stats`
- `vote`

## DM Responses
Usage: `config dmResponses` or `config dmResponses [true|false]`

You can either view if DM responses are enabled/disabled or enable/disable them if you wish.

When disabling DM responses, the bot won't DM the user on these actions:

- A suggestion is submitted
- A suggestion is approved
- A suggestion is rejected
- A note is added to a suggestion

## Keep Logs
Usage: `config keepLogs` or `config keepLogs [true|false]`

You can either view if the suggestion message stays when approved/rejected or enable/disable the feature if you wish.

When enabling this feature, a number of things will happen (in this order) after the suggestion is approved/rejected:

1) The suggestion message will be updated with its status and result.
2) The reactions will be removed from the message.
3) The submitter (if DM responses are enabled) will be DMed that their suggestion has been processed.

By default, this feature is disabled. However, one of the two will happen, dependent on if you have a [suggestion logs channel](#suggestions-logs-channel) set or not.

1) If you have a suggestion logs channel, the normal process of deleting the original message and the results posted in the logs channel will occur.
2) If you don't have a suggestion logs channel, then the process of having `keepLogs` enabled will take place.
