import React, { memo } from 'react';
import cn from 'classnames';
import { useTheme } from 'app/providers/theme-provider';
import { ICONS } from 'shared/lib/constants/images';
import { IconButton } from 'shared/ui/icon-button';
import cls from './theme-switcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      iconPath={theme === 'app_dark_theme' ? ICONS.sun : ICONS.moon}
      size={40}
      onClick={toggleTheme}
      className={cn(cls.theme, className)}
    />
  );
});
