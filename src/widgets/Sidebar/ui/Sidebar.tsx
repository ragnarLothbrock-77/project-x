import { cn } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/index';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/index';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  function toggleSidebarView() {
    setCollapsed((prev) => !prev);
  }

  return (
    <div className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button type="button" onClick={toggleSidebarView}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
