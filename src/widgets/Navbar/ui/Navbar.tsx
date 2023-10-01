import {cn} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher/index';


interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <nav className={cn(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink
          to={'/'}
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >Main</AppLink>
        <AppLink
          to={'/about'}
          theme={AppLinkTheme.SECONDARY}
        >About</AppLink>
      </div>
    </nav>
  );
};