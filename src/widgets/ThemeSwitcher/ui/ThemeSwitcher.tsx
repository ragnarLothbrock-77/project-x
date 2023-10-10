import { cn } from 'shared/lib/classNames/classNames';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import PrimaryThemeIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Theme, useTheme } from '../../../app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={cn(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <DarkThemeIcon /> : <PrimaryThemeIcon />}
    </Button>
  );
};
