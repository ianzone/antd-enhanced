import { Layout as AntLayout } from 'antd';
const { Header, Footer, Content, Sider } = AntLayout;
import type { CSSProperties, ReactElement } from 'react';

type LayoutProps = {
  className?: string;
  style?: CSSProperties;
  vertical?: boolean;
  header?: ReactElement<typeof Header>;
  footer?: ReactElement<typeof Footer>;
  content: ReactElement<typeof Content>;
  siderLeft?: ReactElement<typeof Sider>;
  siderRight?: ReactElement<typeof Sider>;
};

export { Header, Footer, Content, Sider };
export function Layout(props: LayoutProps) {
  const { className, style, vertical, header, footer, content, siderLeft, siderRight } = props;
  const css = { style: { height: '100%', width: '100%', ...style }, className };

  if (vertical) {
    return (
      <AntLayout {...css}>
        {header}
        <AntLayout style={{ width: 'auto' }}>
          {siderLeft}
          {content}
          {siderRight}
        </AntLayout>
        {footer}
      </AntLayout>
    );
  }
  return (
    <AntLayout {...css}>
      {siderLeft}
      <AntLayout style={{ width: 'auto' }}>
        {header}
        {content}
        {footer}
      </AntLayout>
      {siderRight}
    </AntLayout>
  );
}
