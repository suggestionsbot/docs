import React from 'react';
import {
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordEmbedFooter,
} from '@skyra/discord-components-react';
import { EmbedProps } from '../../constants';

export default function SuggestionEmbed({
  color,
  description,
  footer,
  thumbnail = true,
  displayEmbedAuthor = true,
}: EmbedProps): JSX.Element {
  let authorProps = {
    authorImage: undefined,
    authorName: undefined,
  };

  if (displayEmbedAuthor) {
    authorProps = {
      ...authorProps,
      authorImage:
        'https://cdn.discordapp.com/icons/601219766258106399/84d4723906dae4b09bb328e11198eab1.png?size=1024',
      authorName: 'Suggestions',
    };
  }

  return (
    <DiscordEmbed
      slot='embeds'
      color={color}
      thumbnail={
        thumbnail
          ? 'https://cdn.discordapp.com/avatars/158063324699951104/d25a7deec7b308ddf8d4d152808f8058.png?size=1024'
          : undefined
      }
      {...authorProps}>
      <DiscordEmbedDescription slot='description'>
        {description}
      </DiscordEmbedDescription>
      <DiscordEmbedFooter slot='footer' timestamp={new Date()}>
        {footer}
      </DiscordEmbedFooter>
    </DiscordEmbed>
  );
}
