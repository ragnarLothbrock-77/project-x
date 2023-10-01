import {RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage/index';
import {AboutPage} from 'pages/AboutPage/index';


export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RouterPathes: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: 'about'
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPathes.main,
    element:  <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPathes.about,
    element: <AboutPage />
  }
}
