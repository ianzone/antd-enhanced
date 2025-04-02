import { type ThemeMode, ThemeProvider, useThemeMode } from 'antd-style';
import type { ReactNode } from 'react';
import { IconContext } from 'react-icons';

type Props = {
  children: ReactNode;
  defaultThemeMode?: ThemeMode;
};

export function UIContext(props: Props) {
  const preferredTheme = themeStore.get();
  console.log('preferredTheme', preferredTheme);
  return (
    // https://ant-design.github.io/antd-style/zh-CN/guide/switch-theme
    <ThemeProvider defaultThemeMode={preferredTheme || props.defaultThemeMode || 'auto'}>
      <StoreTheme />
      <IconContext value={{ size: '1.2em' }}>{props.children}</IconContext>
    </ThemeProvider>
  );
}

function StoreTheme() {
  const { themeMode } = useThemeMode();
  console.log('themeMode', themeMode);
  themeStore.set(themeMode);
  return null;
}

export const themeStore = {
  set: (themeMode: ThemeMode) => {
    localStorage.setItem('preferredTheme', themeMode);
  },
  get: () => {
    return localStorage.getItem('preferredTheme') as ThemeMode | null;
  },
};
