import { Dropdown, type GetProp, type MenuProps } from 'antd';
import type { MenuItemType } from 'antd/es/menu/interface';
import type { ThemeMode } from 'antd-style';
import { useThemeMode } from 'antd-style';
import { type ReactNode, useState } from 'react';
import { AiFillMoon, AiFillSun, AiOutlineLaptop } from 'react-icons/ai';

type OnClick = GetProp<MenuProps, 'onClick'>;

type Item = MenuItemType & { key: ThemeMode };

export function ThemeSelector() {
  const { setThemeMode } = useThemeMode();
  const [themeMode, setThemeModeState] = useState<ReactNode>(<AiOutlineLaptop />);

  const items: Item[] = [
    {
      key: 'light',
      label: 'Light',
      icon: <AiFillSun />,
    },
    {
      key: 'dark',
      label: 'Dark',
      icon: <AiFillMoon />,
    },
    {
      key: 'auto',
      label: 'Auto',
      icon: <AiOutlineLaptop />,
    },
  ];

  const onClick: OnClick = (e) => {
    setThemeMode(e.key as ThemeMode);
    setThemeModeState(items.find((item) => item.key === e.key)?.icon);
  };
  return <Dropdown menu={{ items, onClick }}>{themeMode}</Dropdown>;
}
