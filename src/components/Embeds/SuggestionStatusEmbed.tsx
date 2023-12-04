import React from 'react';
import {
  DiscordBold,
  DiscordMention,
  DiscordCustomEmoji,
} from '@skyra/discord-components-react';

import { EmbedColor } from '../../constants';
import SuggestionEmbed from './SuggestionEmbed';

type EmbedProps = {
  response: boolean;
  status: 'approved' | 'rejected';
  anonymousAuthor?: boolean;
  anonymousModerator?: boolean;
};

export default function SuggestionStatusEmbed(
  options: EmbedProps,
): JSX.Element {
  return (
    <SuggestionEmbed
      color={
        options.status === 'approved'
          ? EmbedColor.APPROVED
          : EmbedColor.REJECTED
      }
      description={
        <>
          <DiscordBold>Results</DiscordBold>
          <br />
          <DiscordCustomEmoji name='upvote' url='/img/emojis/upvote.webp' />
          <DiscordBold>: 5</DiscordBold>
          <br />
          <DiscordCustomEmoji name='downvote' url='/img/emojis/downvote.webp' />
          <DiscordBold>: 3</DiscordBold>
          <br />
          <br />
          <DiscordBold>Suggestion</DiscordBold>
          <br />
          Bring out Wumpus to meet the fans!
          <br />
          <br />
          <DiscordBold>Submitter</DiscordBold>
          <br />
          {options.anonymousAuthor ? (
            'Anonymous'
          ) : (
            <DiscordMention type='user'>anthony</DiscordMention>
          )}
          <br />
          <br />
          <DiscordBold>
            {options.status === 'approved' ? 'Approved' : 'Rejected'} By
          </DiscordBold>
          <br />
          {options.anonymousModerator ? (
            'Anonymous'
          ) : (
            <DiscordMention type='user'>anthony</DiscordMention>
          )}
          <br />
          <br />
          {options.response && (
            <>
              <DiscordBold>Response</DiscordBold>
              <br />
              {options.status === 'approved'
                ? 'Thank you for supporting Wumpus!'
                : 'Sorry, Wumpus does not have enough fans...'}
            </>
          )}
        </>
      }
      footer={<>sID: lrt97z1s</>}
      displayEmbedAuthor
    />
  );
}
