import { Dropdown, type GetProp, type MenuProps } from 'antd';
import { AiFillMoon, AiFillSun, AiOutlineLaptop } from 'react-icons/ai';
import { LuSunMoon } from 'react-icons/lu';
import type { ThemeMode } from 'src/hooks';

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
      icon: <AiFillSun />,
    },
    {
      key: 'dark',
      label: 'Dark',
      icon: <AiFillMoon />,
    },
    {
      key: 'system',
      label: 'System',
      icon: <AiOutlineLaptop />,
    },
  ];

  const onClick: OnClick = (e) => {
    onSelect(e.key as ThemeMode);
  };
  return (
    <Dropdown menu={{ items, onClick }}>
      <LuSunMoon />
    </Dropdown>
  );
}
