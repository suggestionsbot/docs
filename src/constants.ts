export enum EmbedColor {
  MAIN = '#ffd663',
  APPROVED = '#00e640',
  REJECTED = '#cf000f',
  ERROR = '#d63031',
}

export enum ErrorCode {
  SUGGESTION_MESSAGE_DELETED = 1,
  MISSING_PERMISSIONS = 2,
  MISSING_SUGGESTIONS_CHANNEL = 3,
  MISSING_LOG_CHANNEL = 4,
  SUGGESTION_NOT_FOUND = 5,
  OWNER_ONLY = 6,
  SUGGESTION_CONTENT_TOO_LONG = 7,
  INVALID_GUILD_CONFIG_CHOICE = 8,
  COMMAND_ON_COOLDOWN = 9,
  GENERIC_FORBIDDEN = 10,
  UNHANDLED_ERROR = 11,
  GENERIC_NOT_FOUND = 12,
  CONFIGURED_CHANNEL_NO_LONGER_EXISTS = 13,
  MISSING_PERMISSIONS_IN_SUGGESTIONS_CHANNEL = 14,
  MISSING_PERMISSIONS_IN_LOGS_CHANNEL = 15,
  MISSING_TRANSLATION = 16,
}

export type EmbedProps = {
  color: EmbedColor;
  description: JSX.Element;
  footer?: JSX.Element;
  thumbnail?: boolean;
  displayEmbedAuthor?: boolean;
  ephemeral?: boolean;
};

export type ErrorEmbedProps = {
  title: string;
  description: string | JSX.Element;
  code: ErrorCode;
};
