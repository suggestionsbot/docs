import React from 'react';
import {
  DiscordAttachments,
  DiscordActionRow,
  DiscordMessages,
  DiscordMessage,
  DiscordButton,
  DiscordThread,
  DiscordCommand,
} from '@skyra/discord-components-react';

import { EmbedProps, MessageProps } from '../../constants';
import SuggestionEmbed from '../Embeds/SuggestionEmbed';

type SuggestionEmbedMessageProps = {
  message?: MessageProps;
  embed?: EmbedProps | JSX.Element;
};

export default function SuggestionEmbedMessage(
  options: SuggestionEmbedMessageProps,
) {
  return (
    <DiscordMessages>
      <DiscordMessage
        profile='suggestions'
        ephemeral={options.message?.ephemeral}>
        {options.message?.command && (
          <DiscordCommand
            slot='reply'
            profile='anthony'
            command={options.message.command.name}></DiscordCommand>
        )}
        {'color' in options.embed ? (
          <SuggestionEmbed {...options.embed} />
        ) : (
          options.embed
        )}
        {options.message?.buttons && (
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
        {options.message?.thread && (
          <DiscordThread slot='thread' name={options.message.thread.name}>
            {options.message.thread.description}
          </DiscordThread>
        )}
      </DiscordMessage>
    </DiscordMessages>
  );
}
