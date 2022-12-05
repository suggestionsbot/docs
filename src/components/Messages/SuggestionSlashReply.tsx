import React from 'react';
import {
  DiscordCommand,
  DiscordMessage,
  DiscordMessages,
} from '@skyra/discord-components-react';

export default function SuggestionSlashReply({ command, message }) {
  return (
    <DiscordMessages>
      <DiscordMessage profile='suggestions' ephemeral>
        <DiscordCommand
          slot='reply'
          profile='anthony'
          command={command}></DiscordCommand>
        {message}
      </DiscordMessage>
    </DiscordMessages>
  );
}
