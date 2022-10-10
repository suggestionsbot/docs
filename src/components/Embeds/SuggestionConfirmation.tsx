import React from 'react';
import { DiscordBold, DiscordMention } from '@skyra/discord-components-react';

import { EmbedColor, SuggestionStatus } from '../../constants';
import SuggestionEmbed from './SuggestionEmbed';

type EmbedProps = {
  status: 'pending' | 'approved' | 'rejected';
  response?: boolean;
};

const EmbedStatus: Record<SuggestionStatus, EmbedColor> = {
  pending: EmbedColor.MAIN,
  approved: EmbedColor.APPROVED,
  rejected: EmbedColor.REJECTED,
};

export default function SuggestionConfirmation({
  status,
  response,
}: EmbedProps): JSX.Element {
  return (
    <SuggestionEmbed
      color={EmbedStatus[status]}
      description={
        <>
          {status === 'pending' && (
            <>
              Hey, <DiscordMention type='user'>anthony</DiscordMention>. Your
              suggestion has been sent to{' '}
              <DiscordMention type='channel'>suggestions</DiscordMention> to be
              voted one!
              <br />
              <br />
              Please wait until it gets approved or rejected by a staff member.
              <br />
              <br />
              Your suggestion ID (sID) for reference is{' '}
              <DiscordBold>lrt97z1s</DiscordBold>
            </>
          )}

          {['approved', 'rejected'].includes(status) && (
            <>
              Hey, <DiscordMention type='user'>anthony</DiscordMention>. Your
              suggestion has been {status} by{' '}
              <DiscordMention type='user'>anthony</DiscordMention>!
              <br />
              <br />
              {response && (
                <>
                  <DiscordBold>Staff Response:</DiscordBold>{' '}
                  {status === 'approved'
                    ? 'Thank you for supporting Wumpus!'
                    : 'Sorry, Wumpus does not have enough fans...'}
                  <br />
                  <br />
                </>
              )}
              Your suggestion ID (sID) for reference is{' '}
              <DiscordBold>lrt97z1s</DiscordBold>
            </>
          )}
        </>
      }
      footer={<>Guild ID: 601219766258106399 | sID: lrt97z1s</>}
    />
  );
}
