import './styles/index.scss';
import {cn} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router/index';
import {Navbar} from 'widgets/Navbar';


export const App = () => {
  const {theme} = useTheme()

  return (
  <div className={cn('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
