import React from 'react';
import SuggestionEmbed from '@site/src/components/Embeds/SuggestionEmbed';
import { EmbedColor } from '@site/src/constants';
import { DiscordBold } from '@skyra/discord-components-react';

export default function QueuedSuggestion({
  anonymousAuthor,
  footer,
}: {
  anonymousAuthor?: boolean;
  footer?: JSX.Element;
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
          </>
        }
        thumbnail={!anonymousAuthor}
        color={EmbedColor.MAIN}
        footer={
          footer ? (
            footer
          ) : (
            <>
              {`Queued suggestion${
                anonymousAuthor ? '' : ' | User ID: 158063324699951104'
              }`}
            </>
          )
        }
        displayEmbedAuthor={false}
        anonymousAuthor={anonymousAuthor}
      />
    </>
  );
}
