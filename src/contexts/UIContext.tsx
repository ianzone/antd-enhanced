import { type ThemeMode, ThemeProvider, useThemeMode } from 'antd-style';
import { type ReactNode, useEffect } from 'react';
import { IconContext } from 'react-icons';

type Props = {
  children: ReactNode;
  defaultTheme?: ThemeMode;
};

export function UIContext(props: Props) {
  const { themeMode } = useThemeMode();
  const preferredTheme = themeStore.get();

  useEffect(() => {
    themeStore.set(themeMode);
  }, [themeMode]);

  return (
    // https://ant-design.github.io/antd-style/zh-CN/guide/switch-theme
    <ThemeProvider defaultThemeMode={preferredTheme || props.defaultTheme || 'auto'}>
      <IconContext value={{ size: '1.2em' }}>{props.children}</IconContext>
    </ThemeProvider>
  );
}

export const themeStore = {
  set: (themeMode: ThemeMode) => {
    localStorage.setItem('preferredTheme', themeMode);
  },
  get: () => {
    return localStorage.getItem('preferredTheme') as ThemeMode | null;
  },
};
