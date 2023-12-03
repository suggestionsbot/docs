import React from 'react';

import SuggestionEmbedMessage from '@site/src/components/Messages/SuggestionEmbedMessage';
import PendingSuggestion from '@site/src/components/Embeds/PendingSuggestion';
import {
  DiscordActionRow,
  DiscordAttachments,
  DiscordButton,
} from '@skyra/discord-components-react';

export default function QueueView(): JSX.Element {
  return (
    <SuggestionEmbedMessage
      embed={
        <PendingSuggestion
          results={false}
          footer={<>Submitter ID: 158063324699951104 | Page 1/1</>}
        />
      }
      message={{
        buttons: true,
        buttonsOverride: (
          <DiscordAttachments slot='components'>
            <DiscordActionRow>
              <DiscordButton
                emoji='/img/emojis/arrow_backward.svg'
                emojiName='◀'></DiscordButton>
              <DiscordButton
                emoji='/img/emojis/stop_button.svg'
                emojiName='⏹'></DiscordButton>
              <DiscordButton
                emoji='/img/emojis/arrow_forward.svg'
                emojiName='▶'></DiscordButton>
              <DiscordButton
                emoji='/img/emojis/upvote.webp'
                emojiName='upvote'
              />
              <DiscordButton
                emoji='/img/emojis/downvote.webp'
                emojiName='downvote'
              />
            </DiscordActionRow>
          </DiscordAttachments>
        ),
        ephemeral: true,
      }}
    />
  );
}
