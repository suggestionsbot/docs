import React from 'react';
import {
  DiscordAttachments,
  DiscordActionRow,
  DiscordMessages,
  DiscordMessage,
  DiscordButton,
  DiscordThread,
} from '@skyra/discord-components-react';

import { EmbedProps, MessageProps } from '../constants';
import SuggestionEmbed from './Embeds/SuggestionEmbed';

type SuggestionEmbedMessageProps = {
  message?: MessageProps;
  embed?: EmbedProps | JSX.Element;
};

export default function SuggestionEmbedMessage({
  message,
  embed,
}: SuggestionEmbedMessageProps) {
  return (
    <DiscordMessages>
      <DiscordMessage profile='suggestions' ephemeral={message?.ephemeral}>
        {'color' in embed ? <SuggestionEmbed {...embed} /> : embed}
        {message?.buttons && (
          <DiscordAttachments slot='components'>
            <DiscordActionRow>
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
        )}
        {message?.thread && (
          <DiscordThread slot='thread' name={message.thread.name}>
            {message.thread.description}
          </DiscordThread>
        )}
      </DiscordMessage>
    </DiscordMessages>
  );
}
