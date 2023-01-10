import { lazy } from 'react';
import { RouteConfigProps } from '@/types/router';
const ComponentsPage = lazy(() => import('@/pages/componentsPage'));
const BusinessPage = lazy(() => import('@/pages/businessPage'));
const LoadingComPage = lazy(() => import('@/pages/componentsPage/loadingComPage'));
const ButtonComPage = lazy(() => import('@/pages/componentsPage/buttonComPage'));
const TodoList = lazy(() => import('@/pages/businessPage/todoList'));
const ResizeBoxPage = lazy(() => import('@/pages/componentsPage/resizeBoxPage'));

// ps: 加了一些自定义meta薪资
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
  {
    name: 'resize-box',
    parent: 'components',
    path: '/components/resize-box',
    element: <ResizeBoxPage />,
    meta: {
      icon: 'ri-swap-box-line',
      cname: 'resize-box',
    },
  },
  {
    name: 'business',
    path: 'business',
    element: <BusinessPage />,
    meta: {
      cname: '页面',
      visible: true,
      icon: 'ri-lightbulb-flash-line',
    },
  },
  {
    name: 'todolist',
    path: '/business/todolist',
    element: <TodoList />,
    parent: 'business',
    meta: {
      cname: 'TodoList',
      visible: false,
      desc: 'react入门',
    },
  },
];

export default routesConfig;
