import React from 'react';
import {
  DiscordItalic,
  DiscordMessage,
  DiscordMessages,
  DiscordReply,
} from '@skyra/discord-components-react';

type QueueViewResponseProps = {
  status: 'approved' | 'rejected';
};

export default function QueueViewResponseMessage(
  options: QueueViewResponseProps,
) {
  const status: Record<QueueViewResponseProps['status'], string> = {
    approved: 'accepted',
    rejected: 'removed',
  };

  return (
    <DiscordMessages>
      <DiscordMessage profile='suggestions' ephemeral>
        <DiscordReply slot='reply' profile='suggestions' command>
          <DiscordItalic>Click to see command</DiscordItalic>
        </DiscordReply>
        I have {status[options.status]} that suggestion from the queue.
      </DiscordMessage>
    </DiscordMessages>
  );
}
