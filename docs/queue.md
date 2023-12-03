---
sidebar_position: 8
title: Suggestion Queue
description: Learn how to utilize the suggestion queue to manage the flow of suggestions to the public.
---
import SuggestionEmbedMessage from '@site/src/components/Messages/SuggestionEmbedMessage';
import QueueInfo from '@site/src/components/Embeds/QueueCommand/QueueInfo.tsx'
import QueueView from '@site/src/components/Embeds/QueueCommand/QueueView.tsx'
import QueueRejection from '@site/src/components/Embeds/QueueCommand/QueueRejection.tsx'
import QueueViewResponseMessage from '@site/src/components/Messages/QueueViewResponseMessage.tsx'

Gone are the days of constantly deleting duplicate suggestions or cleaning up thirty spam suggestions that your community despises looking at. Now comes the day when you, the server owner or administrator, can take control of what suggestions the public gets to vote on.

The suggestion queue is one of our most powerful features on the bot. By putting suggestions into a "queue" before they go to the public for voting, you can ensure that a suggestion meets your server's criteria before the public votes.

Improve the quality of your community by moderating its suggestions. Learn more about it below.

## Purpose
This feature will send all suggestions made via `/suggest` to a queue, after which a moderator for your server can approve or reject suggestions before the public views them in your suggestions channel for voting.

## Usage
To enable the suggestions queue, run `/config suggestion_queue enable`.  You can then use the following commands to manage your queue:

- [`/queue info`](#queue-info)
- [`/queue view`](#queue-view)

## Queue Info
The [`/queue info`](commands.md#queue-command) command will display the status of your server's suggestions queue.

You can check if new suggestions go to the queue and see how many are there.
<QueueInfo />

The above example displays that the server has the suggestions queue enabled and that there's currently `1` suggestion in the queue.

## Queue View
The [`/queue view`](commands.md#queue-command) command will display active suggestions in the queue. You can cycle through the queue and approve/reject suggestions.
<QueueView />


Each button has a different action. You may find out what they are below. 


| Button                                                                  | Action                                          |
|-------------------------------------------------------------------------|-------------------------------------------------|
| ⬅️                                                                      | Go the previous suggestion in the queue         |
| ⏹️                                                                      | Cancel the queue                                |
| ➡️                                                                      | Go to the next suggestion in the queue          |
| <img src="/img/emojis/upvote.webp" alt="Upvote emoji" width={24} />     | Approve and forward the suggestion for voting   |
| <img src="/img/emojis/downvote.webp" alt="Downvote emoji" width={24} /> | Reject and remove the suggestion from the queue |


The first three buttons are self-explanatory. We'll talk about the last two more in-depth.

### Approving a suggestion
When you hit the green checkmark, you approve the suggestion for voting in your set suggestions channel. This action does _not_ mean that you have committed to approving the suggestion. You only approve it to be voted on.

Once approved, the suggestion is moved to a pending state, allowing your users to vote. If the suggestion gets approved in this state, the message is updated, and the bot captures the results. The same goes if the suggestion gets rejected.

Check below for example embeds on the previous actions.

<QueueViewResponseMessage status="approved" />
You'll receive this message in the channel when approving the selected queued suggestion.

### Rejecting a suggestion
When you hit the red 'x' button, you reject and remove the suggestion from the queue. When this happens, the bot will also attempt to [DM the author](configuration#dm-responses) of the suggestion about their suggestion's rejection.

Check below for example embeds on the previous actions.

<QueueViewResponseMessage status="rejected" />
You'll receive this message in the channel when rejecting the selected queued suggestion.
<br /> <br />

<SuggestionEmbedMessage
  embed={<QueueRejection />}
/>
The bot will also attempt to DM the user this message.