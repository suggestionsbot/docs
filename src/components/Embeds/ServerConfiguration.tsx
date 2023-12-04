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
            Suggestion threads: I will create threads for new suggestions
            <br />
            Keep Logs: Suggestion logs will be kept in your suggestions channel.
            <br />
            Anonymous suggestions: This guild cannot have anonymous suggestions.
            <br />
            Automatic thread archiving: I will automatically archive threads
            created for suggestions.
            <br />
            Suggestions queue: In use.
            <br />
            Images in suggestions: This guild can have images in suggestions.
            <br />
            Anonymous resolutions: Suggesters are shown who resolved their
            suggestions.
            <br />
          </span>
        </>
      }
      thumbnail={false}
      displayEmbedAuthor
    />
  );
}
