---
sidebar_position: 5
title: Error Codes
description: Find more information on various error codes the bot can provide and what to do about it.
---
import ErrorEmbed from '@site/src/components/Embeds/ErrorEmbed';

## Table
| Code | Name                        | Guide                                 |
|------|-----------------------------|---------------------------------------|
| 1    | SUGGESTION_MESSAGE_DELETED  | [click](#suggestion-message-deleted)  |
| 2    | MISSING_PERMISSIONS         | [click](#missing-permissions)         |
| 3    | MISSING_SUGGESTIONS_CHANNEL | [click](#missing-suggestions-channel) |
| 4    | MISSING_LOG_CHANNEL         | [click](#missing-log-channel)         |
| 5    | SUGGESTION_NOT_FOUND        | [click](#suggestion-not-found)        |
| 6    | OWNER_ONLY                  | [click](#owner-only)                  |
| 7    | SUGGESTION_CONTENT_TOO_LONG | [click](#suggestion-content-too-long) |
| 8    | INVALID_GUILD_CONFIG_CHOICE | [click](#invalid-guild-config-choice) |
| 9    | COMMAND_ON_COOLDOWN         | [click](#command-on-cooldown)         |
| 10   | GENERIC_FORBIDDEN           | [click](#generic-forbidden)           |
| 11   | UNHANDLED_ERROR             | [click](#unhandled-error)             |
| 12   | GENERIC_NOT_FOUND           | [click](#generic-not-found)           |

## Error Information

### Suggestion Message Deleted
This error is thrown when attempting to manage a suggestion which it's corresponding message has been deleted.
<ErrorEmbed title="Lorem ipsum" description="Hello world" code={1} />

### Missing Permissions
This error is thrown when the bot is missing permissions to perform an action.

### Missing Suggestions Channel
This error is thrown when the bot is missing a configured suggestions channel.

### Missing Log Channel
This error is thrown when the bot is missing a configured suggestions log channel.

### Suggestion Not Found
This error is thrown when the bot is unable to find a suggestion with the given ID.

### Owner Only
This error is thrown when the bot is unable to perform an action which is only available to the bot owners.

### Suggestion Content Too Long
This error is thrown when the bot is unable to submit a suggestion with a content length greater than the configured maximum.

### Invalid Guild Config Choice
This error is thrown when trying to provide an invalid configuration choice.

### Command On Cooldown
This error is thrown when the bot is on cooldown for a command.

### Generic Forbidden
This error is thrown as a generic response when the bot is forbidden from performing an action.

### Unhandled Error
This error is thrown when the bot is unable to handle an error.

### Generic Not Found
This error is thrown as a generic response when the bot is unable to find an item.
