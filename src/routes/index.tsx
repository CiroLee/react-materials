import { lazy } from 'react';
import { RouteConfigProps } from '@/types/router';
const Home = lazy(() => import('@/pages/home'));

const routesConfig: RouteConfigProps[] = [
  {
    name: 'home',
    path: '/home',
    element: <Home />,
    meta: {
      cname: '组件',
      visible: true,
    },
  },
];

export default routesConfig;
