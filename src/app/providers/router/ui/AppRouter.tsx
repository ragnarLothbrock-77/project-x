import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {MainPage} from '../../../../pages/MainPage';
import {AboutPage} from '../../../../pages/AboutPage';
import {routerConfig} from 'shared/config/routerConfig/routerConfig';

interface routerProps {
  className?: string;
}

export const AppRouter = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        {
          Object.values(routerConfig).map(({element, path}) => (
            <Route
              key={path}
              element={element}
              path={path}
            />
          ))
        }
      </Routes>
    </Suspense>
  );
};
