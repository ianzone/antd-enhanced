import twemoji from '@twemoji/api';

type EmojiSVGProps = {
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  emoji: string;
};

export function EmojiSVG(props: EmojiSVGProps) {
  const { emoji, style, width, height } = props;
  const imgStr = twemoji.parse(emoji, {
    folder: 'svg',
    ext: '.svg',
  });

  const src = imgStr.split('src="')[1].split('"')[0];

  return <img src={src} alt={emoji} style={style} width={width} height={height} />;
}
