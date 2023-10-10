import { Suspense } from 'react';
import './styles/index.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router/index';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from '../widgets/Sidebar';
import 'shared/config/i18n/i18n';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
