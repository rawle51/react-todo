import { Home, NotFound, Dashboard } from './react/pages';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/todos',
    component: Dashboard,
  },
  {
    component: NotFound,
  },
];
