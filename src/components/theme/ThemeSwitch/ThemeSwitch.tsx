import { type GetProp, Switch, type SwitchProps } from 'antd';
import { useThemeMode } from 'antd-style';
import type { CSSProperties } from 'react';
import { AiFillMoon, AiFillSun } from 'react-icons/ai';

type OnChange = GetProp<SwitchProps, 'onChange'>;

export function ThemeSwitch() {
  const { isDarkMode, setThemeMode } = useThemeMode();

  const onChange: OnChange = (checked) => {
    setThemeMode(checked ? 'light' : 'dark');
  };
  return (
    <Switch
      checkedChildren={
        <div className='ant-switch-inner-checked' style={center}>
          <AiFillSun />
        </div>
      }
      unCheckedChildren={
        <div className='ant-switch-inner-unchecked' style={center}>
          <AiFillMoon />
        </div>
      }
      onChange={onChange}
      defaultChecked={!isDarkMode}
    />
  );
}

const center: CSSProperties = { display: 'grid', placeItems: 'center' };
