import { Home, NotFound, Dashboard } from './react/pages';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    key: 'home',
  },
  {
    path: '/todos',
    component: Dashboard,
    key: 'todo'
  },
  {
    component: NotFound,
    key: 'notFound'
  },
];
