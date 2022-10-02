import React from 'react';
import {
  DiscordMessages,
  DiscordMessage,
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordEmbedFooter,
} from '@skyra/discord-components-react';
import { EmbedColor, ErrorEmbedProps } from '../../constants';

export default function ErrorEmbed({
  title,
  description,
  code,
}: ErrorEmbedProps): JSX.Element {
  return (
    <div className='padding-bottom--md'>
      <DiscordMessages>
        <DiscordMessage profile='suggestions' ephemeral>
          <DiscordEmbed
            slot='embeds'
            color={EmbedColor.ERROR}
            embedTitle={title}>
            <DiscordEmbedDescription slot='description'>
              {description}
            </DiscordEmbedDescription>
            <DiscordEmbedFooter slot='footer' timestamp={new Date()}>
              Error code {code} | Cluster 1
            </DiscordEmbedFooter>
          </DiscordEmbed>
        </DiscordMessage>
      </DiscordMessages>
    </div>
  );
}
