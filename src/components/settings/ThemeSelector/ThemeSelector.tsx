import Icon, { LaptopOutlined, MoonFilled, SunFilled } from '@ant-design/icons';
import { Dropdown, type GetProp, type MenuProps } from 'antd';
import type { ThemeMode } from 'src/hooks';
import ThemeSVG from './theme.svg?react';

type Props = {
  onSelect: (themeMode: ThemeMode) => void;
};

type OnClick = GetProp<MenuProps, 'onClick'>;
type Items = GetProp<MenuProps, 'items'>;

export function ThemeSelector(props: Props) {
  const { onSelect } = props;
  const items: Items = [
    {
      key: 'light',
      label: 'Light',
      icon: <SunFilled />,
    },
    {
      key: 'dark',
      label: 'Dark',
      icon: <MoonFilled />,
    },
    {
      key: 'system',
      label: 'System',
      icon: <LaptopOutlined />,
    },
  ];

  const onClick: OnClick = (e) => {
    onSelect(e.key as ThemeMode);
  };
  return (
    <Dropdown menu={{ items, onClick }}>
      <Icon component={ThemeSVG} />
    </Dropdown>
  );
}
