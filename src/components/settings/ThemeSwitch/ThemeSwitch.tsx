import { type GetProp, Switch, type SwitchProps } from 'antd';
import { AiFillMoon, AiFillSun } from 'react-icons/ai';
import type { Theme } from 'src/hooks';

type Props = {
  onSelect: (theme: Theme) => void;
  defaultTheme?: Theme;
};

type OnChange = GetProp<SwitchProps, 'onChange'>;

export function ThemeSwitch(props: Props) {
  const { onSelect, defaultTheme } = props;

  const onChange: OnChange = (checked) => {
    onSelect(checked ? 'light' : 'dark');
  };
  return (
    <Switch
      checkedChildren={<AiFillSun />}
      unCheckedChildren={<AiFillMoon />}
      onChange={onChange}
      defaultChecked={defaultTheme !== 'dark'}
    />
  );
}
