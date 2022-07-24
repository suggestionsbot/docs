export enum EmbedColor {
  MAIN = '#ffd663',
  APPROVED = '#00e640',
  REJECTED = '#cf000f',
}

export type EmbedProps = {
  color: EmbedColor;
  description: JSX.Element;
  footer?: JSX.Element;
  thumbnail?: boolean;
  displayEmbedAuthor?: boolean;
  ephemeral?: boolean;
};
