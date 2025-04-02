import { Dropdown, type GetProp, type MenuProps } from 'antd';
import type { ThemeMode } from 'antd-style';
import { useThemeMode } from 'antd-style';
import type { ItemType } from 'antd/es/menu/interface';
import { AiFillMoon, AiFillSun, AiOutlineLaptop } from 'react-icons/ai';
import { LuSunMoon } from 'react-icons/lu';

type OnClick = GetProp<MenuProps, 'onClick'>;

type Item = ItemType & { key: ThemeMode };

export function ThemeSelector() {
  const { setThemeMode } = useThemeMode();
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
  };
  return (
    <Dropdown menu={{ items, onClick }}>
      <div>
        <LuSunMoon style={{ cursor: 'pointer' }} />
      </div>
    </Dropdown>
  );
}
