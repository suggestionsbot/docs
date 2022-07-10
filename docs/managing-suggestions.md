---
sidebar_position: 2
title: Managing Suggestions
description: Use the easy but powerful suggestions management to stay organized in your Discord.
---

_**Key:**_  
`< >` = Required  
`[ ]` = Optional

**Note:** The above placeholders are _not_ required. They are simply to show you what the required fields are.

`|` = Means "or"  
`administrator` = A user with the Manage Server (`MANAGE_GUILD`) permission

Managing suggestions is simple. Each suggestion is assigned a **Suggestion ID** \(sID\). From there, staff members can either approve, reject, or add a note to a suggestion with the sID. The sID is located in the footer of each suggestion:

![Suggestion Example w/ sID](/img/managing-suggestions-1.png)

![Suggestion DM](/img/managing-suggestions-2.png)

Alternatively, you can use the message ID of the suggestion message to manage a suggestion, especially if you're using the bot on mobile. Click [here](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) to check out a tutorial on how to find a message ID.

## DM Responses
DM responses are sent to the suggestion submitter based on various actions. DM responses may be toggled by running `config dmResponses <true/false>`. This means DMs to the suggestion sumbitter will or won't be sent via these actions based on how you configure the bot for your server:

- suggestion submitted
- suggestion approved
- suggestion rejected
- suggestion note added

By default, DM responses are enabled. This can be configured by an administrator.

## Setting Up Slash Command Permissions

If you haven't already done so, please refer to the [Getting Started](intro.md#setting-up-the-bot) section to set up slash command permissiosn. By default, only administrators can manage suggestions. However, if you want other staff members to have access to these commands, please refer to the aforementioned section.

## Approving Suggestions

Suggestions are approved via the sID. Once you have it, run the command `approve <sID|message ID>`. Afterward, series of actions will happen:

* The suggestion will update as "Approved" in the suggestions channel and its results will be logged.
* The user will receive a DM that you approved their suggestion.
* The results of that suggestion will either be posted to the suggestion logs channel or the suggestion message will be kept with its results displayed. (dependent on [`config keepLogs`](configuration.md#keep-logs))
* _An optional response can be added by running_ `approve <sID|message ID> [response]`.

![Suggestion Approved Status](/img/managing-suggestions-3.png)

![Suggestion Approved DM](/img/managing-suggestions-4.png)

It seems like a lot, doesn't it? It really isn't, because it all happens in the matter of seconds!

## Rejecting Suggestions

Rejecting suggestions work the same way as approving suggestions. Once you run the command `reject <sID|message ID> [response]`, the same series of actions will happen as stated above, but information of the suggestion being rejected will be posted instead.

If responses are set to `true` via the usage of the [`config responses`](configuration.md#rejection-responses) command, then adding a response when rejecting a suggestion is required.

![Suggestion Rejected Status](/img/managing-suggestions-5.png)

![Suggestion Rejected DM](/img/managing-suggestions-6.png)

## Suggestions Logging

When a suggestion is approved or rejected, one of two things will happen, depending on if you have a suggestions logs channel set and if [`/config keepLogs`](configuration.md#keep-logs) is enabled (by default, it's `false`).

- If you have no suggestion logs channel set or `config keepLogs` is true, then the suggestion message will be updated with its results and the reactions removed.
- If you have a suggestion logs channel set and `config keepLogs` is false, The bot will delete the original suggestion message and its results posted to the set logs channel. You'll find the following information in the log message either way:

* the results (both upvotes and downvotes)
* the suggestion
* the submitter
* the staff member that approved or rejected the suggestion
* the sID
* the response (if one was given)

![Suggestion Results](/img/managing-suggestions-6.png)

If you wish to set up the suggestion logs channel, you may refer to the steps below:

1) Add the bot to the suggestion channel's permissions and exclusively give it the `SEND MESSAGES` permission.
    - Add any more depending on what permissions you gave the bot globally.
2) Disable `SEND MESSAGES` and `ADD REACTIONS` for `@everyone` to keep the channel clean.

## Suggestions Emojis

![The available emoji sets.](/img/managing-suggestions-7.png)

To change to any of these options, you can simply run `config emojis <#>`\(e.g. `config emojis 3`\)*. The number is in front of each emoji set. Upon changing, any future suggestions will use that emoji set, as shown below:

![An example of one of the emoji sets.](/img/managing-suggestions-8.png)

**User must be an administrator to use this command.*

## Suggestion Notes

![An example of a suggestion note](/img/managing-suggestions-9.png)

To add a note to a suggestion, simply retrieve the sID or message ID and run `note <sID|suggestion ID> <note>`, where `note` can be any message you wish to choose. Upon adding a note, the submitter of the suggestion will receive a DM with that information:

![An example of a suggestion note in DM](/img/managing-suggestions-10.png)

A new note can be added, and it'll override the current note on the suggestion. However, all previous notes are saved and will be accessible in the future (TBD).
