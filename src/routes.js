import { Home, NotFound, Dashboard } from './react/pages';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    id: 'home',
  },
  {
    path: '/todos',
    component: Dashboard,
    id: 'todos',
  },
  {
    component: NotFound,
    id: '404',
  },
];
