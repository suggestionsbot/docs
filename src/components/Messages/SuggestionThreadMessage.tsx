import React from 'react';

import PendingSuggestion from '../Embeds/PendingSuggestion';
import SuggestionEmbedMessage from './SuggestionEmbedMessage';

export default function SuggestionThreadMessage(): JSX.Element {
  return (
    <SuggestionEmbedMessage
      message={{
        buttons: true,
        thread: {
          name: 'Thread for suggestion lrt97z1s',
          description: 'There are no messages in this thread yet.',
        },
      }}
      embed={<PendingSuggestion />}
    />
  );
}
