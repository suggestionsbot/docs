import React from 'react';
import {
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordEmbedFooter,
} from '@skyra/discord-components-react';
import { EmbedProps } from '../../constants';

export default function SuggestionEmbed(props: EmbedProps): JSX.Element {
  let authorProps = {
    authorImage: undefined,
    authorName: undefined,
  };

  const displayTimestamp = props.displayTimestamp ?? true;

  if (props.displayEmbedAuthor) {
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
      color={props.color}
      thumbnail={
        props.anonymousAuthor
          ? undefined
          : props.thumbnail
          ? 'https://cdn.discordapp.com/avatars/158063324699951104/d25a7deec7b308ddf8d4d152808f8058.png?size=1024'
          : undefined
      }
      title={props.title ? props.title : undefined}
      {...authorProps}>
      <DiscordEmbedDescription slot='description'>
        {props.description}
      </DiscordEmbedDescription>
      <DiscordEmbedFooter
        slot='footer'
        timestamp={displayTimestamp ? new Date() : undefined}>
        {props.footer}
      </DiscordEmbedFooter>
    </DiscordEmbed>
  );
}
