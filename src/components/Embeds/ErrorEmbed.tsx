import React from 'react';
import {
  DiscordMessages,
  DiscordMessage,
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordEmbedFooter,
  DiscordCommand,
} from '@skyra/discord-components-react';
import { EmbedColor, ErrorEmbedProps } from '../../constants';

export default function ErrorEmbed(props: ErrorEmbedProps): JSX.Element {
  return (
    <div className='padding-bottom--md'>
      <DiscordMessages>
        <DiscordMessage profile='suggestions' ephemeral>
          {props?.command && (
            <DiscordCommand
              slot='reply'
              profile='anthony'
              command={props.command.name}></DiscordCommand>
          )}
          <DiscordEmbed
            slot='embeds'
            color={EmbedColor.ERROR}
            embedTitle={props.title}>
            <DiscordEmbedDescription slot='description'>
              {props.description}
            </DiscordEmbedDescription>
            <DiscordEmbedFooter slot='footer' timestamp={new Date()}>
              Error code {props.code} | Cluster 1
            </DiscordEmbedFooter>
          </DiscordEmbed>
        </DiscordMessage>
      </DiscordMessages>
    </div>
  );
}
