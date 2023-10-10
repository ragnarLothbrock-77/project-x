import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';
import { MainPage } from '../../../../pages/MainPage';
import { AboutPage } from '../../../../pages/AboutPage';

interface routerProps {
  className?: string;
}

export const AppRouter = () => (
  <Suspense fallback="Loading...">
    <Routes>
      {
        Object.values(routerConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={(<div className="page-wrapper">{element}</div>)}
            path={path}
          />
        ))
      }
    </Routes>
  </Suspense>
);
