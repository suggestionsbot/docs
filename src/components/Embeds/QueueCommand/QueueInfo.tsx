import React from 'react';

import { DiscordCode } from '@skyra/discord-components-react';

import SuggestionEmbed from '@site/src/components/Embeds/SuggestionEmbed';
import SuggestionEmbedMessage from '@site/src/components/Messages/SuggestionEmbedMessage';
import { EmbedColor } from '@site/src/constants';

export default function QueueInfo(): JSX.Element {
  return (
    <SuggestionEmbedMessage
      embed={
        <SuggestionEmbed
          displayEmbedAuthor={true}
          color={EmbedColor.MAIN}
          title={'Queue Info'}
          description={
            <>
              <DiscordCode>1</DiscordCode> suggestions currently in
              queue.
              <br />
              New suggestions will be sent to the suggestions queue.
            </>
          }
        />
      }
      message={{ ephemeral: true }}
    />
  );
}
