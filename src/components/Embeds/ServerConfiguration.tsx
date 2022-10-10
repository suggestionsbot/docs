import React from 'react';
import { DiscordMention } from '@skyra/discord-components-react';

import { EmbedColor } from '../../constants';
import SuggestionEmbed from './SuggestionEmbed';

export default function ServerConfiguration(): JSX.Element {
  return (
    <SuggestionEmbed
      color={EmbedColor.MAIN}
      description={
        <>
          <p>Configuration for Suggestions</p>

          <span>
            Suggestions channel:{' '}
            <DiscordMention type='channel'>suggestions</DiscordMention>
            <br />
            Log channel:{' '}
            <DiscordMention type='channel'>suggestion_logs</DiscordMention>
            <br />
            Dm responses: I will DM users on actions such as suggest
            <br />
            I will create threads for new suggestions
            <br />
            Suggestion logs will be kept in your logs channel.
          </span>
        </>
      }
      thumbnail={false}
    />
  );
}
