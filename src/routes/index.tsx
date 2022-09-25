import { lazy } from 'react';
import { RouteConfigProps } from '@/types/router';
const ComponentsPage = lazy(() => import('@/pages/componentsPage'));
const LoadingComPage = lazy(() => import('@/pages/componentsPage/loadingComPage'));
const ButtonComPage = lazy(() => import('@/pages/componentsPage/buttonComPage'));
const routesConfig: RouteConfigProps[] = [
  {
    name: 'components',
    path: 'components',
    element: <ComponentsPage />,
    meta: {
      cname: '组件',
      visible: true,
      icon: 'ri-apps-line',
    },
  },
  {
    name: 'loading',
    parent: 'components',
    path: '/components/loading',
    element: <LoadingComPage />,
    meta: {
      icon: 'ri-loader-3-line',
      cname: 'loading',
    },
  },
  {
    name: 'button',
    parent: 'components',
    path: '/components/button',
    element: <ButtonComPage />,
    meta: {
      cname: 'button',
      icon: 'ri-t-box-line',
    },
  },
];

export default routesConfig;
