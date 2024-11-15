import { emojiFlag } from '@rapideditor/country-coder';
import type { CountryCode } from 'libphonenumber-js';
import { EmojiSVG } from './EmojiSVG';

type CountryFlagProps = {
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  countryCode?: CountryCode;
  emoji?: string;
};

export function CountryFlag(props: CountryFlagProps) {
  const { countryCode, emoji: customEmoji, width, height, style } = props;

  const emoji = customEmoji || (countryCode && emojiFlag(countryCode)) || '🌐';

  return <EmojiSVG emoji={emoji} width={width} height={height} style={style} />;
}
