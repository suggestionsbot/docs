import React from 'react'
import { DiscordBold, DiscordMention } from '@skyra/discord-components-react'

import { EmbedColor } from '../../constants'
import SuggestionEmbed from './SuggestionEmbed';

export default function ServerConfiguration(): JSX.Element {
  return <SuggestionEmbed
    color={EmbedColor.MAIN}
    description={
      <>
        <p>Configuration for Suggestions</p>

        <span>Suggestions channel: <DiscordMention type="channel">suggestions</DiscordMention><br/>
        Log channel: <DiscordMention type="channel">suggestion_logs</DiscordMention><br/>
        Dm responses: I will DM users on actions such as suggest</span>
      </>
    }
    thumbnail={false}
    ephemeral
  />
}
