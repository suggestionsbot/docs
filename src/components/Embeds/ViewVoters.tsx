import React from 'react';
import SuggestionEmbed from '@site/src/components/Embeds/SuggestionEmbed';
import { EmbedColor } from '@site/src/constants';
import {
  DiscordBold,
  DiscordCustomEmoji,
  DiscordInlineCode,
  DiscordMention,
} from '@skyra/discord-components-react';

type ViewVotersProps = {
  filter: 'all' | 'upvoters' | 'downvoters';
};

export default function ViewVoters({ filter }: ViewVotersProps): JSX.Element {
  const descriptionTitle: Record<ViewVotersProps['filter'], string> = {
    all: 'All v',
    upvoters: 'Up v',
    downvoters: 'Down v',
  };

  const voters = [
    { name: 'anthony', vote: 'upvote' },
    { name: 'Johnny Test', vote: 'downvote' },
  ];

  const displayVoters = (
    <>
      {voters.map((voter, idx) => {
        return (
          <>
            {filter === 'all' && (
              <>
                {idx === 1 && <br />}
                <DiscordCustomEmoji
                  name={voter.vote}
                  url={`/img/emojis/${voter.vote}.webp`}></DiscordCustomEmoji>
              </>
            )}{' '}
            <DiscordMention type='user'>{voter.name}</DiscordMention>
            <br />
          </>
        );
      })}
    </>
  );

  return (
    <SuggestionEmbed
      color={EmbedColor.MAIN}
      description={
        <>
          <DiscordBold>
            {`${descriptionTitle[filter]}oters for suggestion`}{' '}
            <DiscordInlineCode>lrt97z1s</DiscordInlineCode>
            <br />
            {displayVoters}
          </DiscordBold>
        </>
      }
      footer={<>Page 1 of 1</>}
      displayTimestamp={false}
    />
  );
}
