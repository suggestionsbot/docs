---
sidebar_position: 2
title: Commands
description: View all the available commands and detailed information of the Suggestions bot.
---

## Key
| Key                 | Description                                            |
|---------------------|--------------------------------------------------------|
| `< >`               | Required                                               |
| `[ ]`               | Optional                                               |
| <code>&vert;</code> | Means "or"                                             |
| `bot`               | Refers to the Suggestions bot                          |

## General Commands

| Command |             Description             |                     Guide |
|---------|:-----------------------------------:|--------------------------:|
| dm      |  Enable or disable suggestion DMs   |      [click](#dm-command) |
| info    |        View bot information         |    [click](#info-command) |
| ping    | View the latency of the bot and API |    [click](#ping-command) |
| stats   |         View bot statistics         |   [click](#stats-command) |
| suggest |       Submit a new suggestion       | [click](#suggest-command) |

## Staff Commands

These commands require a staff role or the Manage Server (`MANAGE_GUILD`) permission.

| Command |          Description           |                     Guide |
|---------|:------------------------------:|--------------------------:|
| approve | Approve a submitted suggestion | [click](#approve-command) |
| reject  | Reject a submitted suggestion  |  [click](#reject-command) |

## Admin Commands

These commands require the Manage Server (`MANAGE_GUILD`) permission.

| Command |                        Description                        |                    Guide |
|---------|:---------------------------------------------------------:|-------------------------:|
| config  | View and update various configuration settings of the bot | [click](#config-command) |

## Command Information

### Approve Command

```
/approve <sID|message ID> [response]
```

Approve a submitted suggestion via its suggestion ID (sID) or message ID with an optional response.

### Config Command

```
/config get [setting]
/config <setting> <value>
```

View and update various configuration settings of the bot.

- You can check a specific setting by running `/config get [setting]`
- You can view an overview of all settings by running `/config get`
- You can update a specific setting by running `/config <setting> <value>`

Read more about configuring the bot via the [configuration](configuration.mdx) page.

### DM Command

```
/dm <view|enable|disable>
```

View or enable/disable if the bot can DM you regarding suggestions (cannot be overridden if the server has DMs disabled).

### Info Command

```
/info
```

The info command displays the bot's authors, description, important links, and the bot version. Some of the most significant information is found here.

### Ping Command

```
/ping
```

This command displays the latency of the bot (where it's hosted) and the API (Discord API).

### Reject Command

```
/reject <sID|message ID> [response]
```

Reject a submitted suggestion via its suggestion ID (sID) or message ID with an optional response.

### Stats Command

```
/stats
```

The stats command displays information regarding how many servers the bot is in, its uptime, bot version, library version, etc. Check here if you're a geek or just want to see how many servers the bot is in.

### Suggest Command

```
/suggest <suggestion>
```

This command will allow the user to submit a new suggestion that will be sent to the set suggestions channel in the server.
