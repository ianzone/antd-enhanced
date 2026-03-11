import { Dropdown, type GetProp, type MenuProps } from 'antd';
import type { MenuItemType } from 'antd/es/menu/interface';
import type { ThemeMode } from 'antd-style';
import { useThemeMode } from 'antd-style';
import { type ReactNode, useState } from 'react';
import { AiFillMoon, AiFillSun, AiOutlineLaptop } from 'react-icons/ai';
import { themeStore } from 'src/contexts';

type OnClick = GetProp<MenuProps, 'onClick'>;

type Item = MenuItemType & { key: ThemeMode };

export function ThemeSelector() {
  const { setThemeMode } = useThemeMode();
  const [themeIcon, setThemeIcon] = useState<ReactNode>(() => {
    const preferredTheme = themeStore.get();
    return preferredTheme === 'dark' ? (
      <AiFillMoon />
    ) : preferredTheme === 'light' ? (
      <AiFillSun />
    ) : (
      <AiOutlineLaptop />
    );
  });

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
    setThemeIcon(items.find((item) => item.key === e.key)?.icon);
  };
  return <Dropdown menu={{ items, onClick }}>{themeIcon}</Dropdown>;
}
