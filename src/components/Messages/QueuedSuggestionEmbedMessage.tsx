import React from 'react';
import {
  DiscordActionRow,
  DiscordAttachments,
  DiscordButton,
} from '@skyra/discord-components-react';

import QueuedSuggestion from '@site/src/components/Embeds/QueuedSuggestion';
import SuggestionEmbedMessage from '@site/src/components/Messages/SuggestionEmbedMessage';
import { SuggestionEmbedMessageProps } from '@site/src/constants';

export default function QueuedSuggestionEmbedMessage(
  options: SuggestionEmbedMessageProps,
): JSX.Element {
  return (
    <>
      <SuggestionEmbedMessage
        embed={<QueuedSuggestion {...options.embed} />}
        message={{
          buttons: true,
          buttonsOverride: (
            <DiscordAttachments slot='components'>
              <DiscordActionRow>
                <DiscordButton type='success'>
                  Approve queued suggestion
                </DiscordButton>
                <DiscordButton type='destructive'>
                  Reject queued suggestion
                </DiscordButton>
              </DiscordActionRow>
            </DiscordAttachments>
          ),
          ...options.message,
        }}
      />
    </>
  );
}
