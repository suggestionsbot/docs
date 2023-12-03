import React from 'react';

import SuggestionEmbed from '../SuggestionEmbed';
import { EmbedColor } from '@site/src/constants';

export default function QueueRejection() {
  return (
    <SuggestionEmbed
      displayEmbedAuthor
      color={EmbedColor.MAIN}
      description={<>Your queued suggestion was rejected.</>}
      footer={<>Guild ID: 601219766258106399</>}
    />
  );
}
