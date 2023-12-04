import React from 'react';
import {
  DiscordBold,
  DiscordCustomEmoji,
} from '@skyra/discord-components-react';
import { EmbedColor } from '../../constants';

import SuggestionEmbed from './SuggestionEmbed';

export default function PendingSuggestion({
  anonymousAuthor,
  footer,
  results = true,
}: {
  anonymousAuthor?: boolean;
  anonymousModerator?: boolean;
  footer?: JSX.Element;
  results?: boolean;
}): JSX.Element {
  return (
    <>
      <SuggestionEmbed
        description={
          <>
            <DiscordBold>Submitter</DiscordBold>
            <br />
            {anonymousAuthor ? 'Anonymous' : 'acollierr17'}
            <br />
            <br />
            <DiscordBold>Suggestion</DiscordBold>
            <br />
            Bring out Wumpus to meet the fans!
            {results && (
              <>
                <br />
                <br />
                <DiscordBold>Results so far</DiscordBold>
                <br />
                <DiscordCustomEmoji
                  name='upvote'
                  url='/img/emojis/upvote.webp'
                />
                <DiscordBold>: 3</DiscordBold>
                <br />
                <DiscordCustomEmoji
                  name='downvote'
                  url='/img/emojis/downvote.webp'
                />
                <DiscordBold>: 1</DiscordBold>
              </>
            )}
          </>
        }
        thumbnail={!anonymousAuthor}
        color={EmbedColor.MAIN}
        footer={
          footer ? (
            footer
          ) : (
            <>{`${
              anonymousAuthor ? '' : 'User ID: 158063324699951104 | '
            }sID: lrt97z1s`}</>
          )
        }
        displayEmbedAuthor={false}
        anonymousAuthor={anonymousAuthor}
      />
    </>
  );
}
