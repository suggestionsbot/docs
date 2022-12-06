import React from 'react';
import {
  DiscordBold,
  DiscordCustomEmoji,
} from '@skyra/discord-components-react';
import { EmbedColor } from '../../constants';

import SuggestionEmbed from './SuggestionEmbed';

export default function PendingSuggestion({
  anonymous,
}: {
  anonymous?: boolean;
}): JSX.Element {
  return (
    <>
      <SuggestionEmbed
        description={
          <>
            <DiscordBold>Submitter</DiscordBold>
            <br />
            {anonymous ? 'Anonymous' : 'anthony#8577'}
            <br />
            <br />
            <DiscordBold>Suggestion</DiscordBold>
            <br />
            Bring out Wumpus to meet the fans!
            <br />
            <br />
            <DiscordBold>Results so far</DiscordBold>
            <br />
            <DiscordCustomEmoji name='upvote' url='/img/emojis/upvote.webp' />
            <DiscordBold>: 3</DiscordBold>
            <br />
            <DiscordCustomEmoji
              name='downvote'
              url='/img/emojis/downvote.webp'
            />
            <DiscordBold>: 1</DiscordBold>
          </>
        }
        color={EmbedColor.MAIN}
        footer={
          <>{`${
            anonymous ? '' : 'User ID: 158063324699951104 | '
          }sID: lrt97z1s`}</>
        }
        displayEmbedAuthor={false}
        anonymous={anonymous}
      />
    </>
  );
}
