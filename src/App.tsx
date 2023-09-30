import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {MainPageLazy} from './pages/MainPage/MainPage.lazy';
import {AboutPageLazy} from './pages/AboutPage/AboutPage.lazy';
import {Suspense} from 'react';
import {useTheme} from './theme/useTheme';
import {cn} from './helpers/classNames/classNames';


export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
  <div className={cn('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
     <Suspense fallback={'Loading...'}>
       <Routes>
         <Route path={'/'} element={<MainPageLazy />}/>
         <Route path={'/about'} element={<AboutPageLazy />}/>
       </Routes>
     </Suspense>
    </div>
  );
};
