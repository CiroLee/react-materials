import { lazy } from 'react';
import { RouteConfigProps } from '@/types/router';
const ComponentsPage = lazy(() => import('@/pages/componentsPage'));
const BusinessPage = lazy(() => import('@/pages/businessPage'));
const LoadingComPage = lazy(() => import('@/pages/componentsPage/loadingComPage'));
const ButtonComPage = lazy(() => import('@/pages/componentsPage/buttonComPage'));
const TodoList = lazy(() => import('@/pages/businessPage/todoList'));
const ResizeBoxPage = lazy(() => import('@/pages/componentsPage/resizeBoxPage'));
const PopupPage = lazy(() => import('@/pages/componentsPage/popupPage'));
const FormPage = lazy(() => import('@/pages/componentsPage/formPage'));
const RadioPage = lazy(() => import('@/pages/componentsPage/radioPage'));
const LogicComPage = lazy(() => import('@/pages/componentsPage/logicPage'));
const IndicatorPage = lazy(() => import('@/pages/componentsPage/indicatorPage'));
import SignaturePage from '@/pages/componentsPage/signaturePage';

// ps: 加了一些自定义meta信息
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
    name: 'popup',
    parent: 'components',
    path: '/components/popup',
    element: <PopupPage />,
    meta: {
      icon: 'ri-window-line',
      cname: 'popup',
    },
  },
  {
    name: 'form',
    parent: 'components',
    path: '/components/form',
    element: <FormPage />,
    meta: {
      icon: 'ri-computer-line',
      cname: 'form',
    },
  },
  {
    name: 'radio',
    parent: 'components',
    path: '/components/radio',
    element: <RadioPage />,
    meta: {
      icon: 'ri-checkbox-circle-line',
      cname: 'radio',
    },
  },
  {
    name: 'logic',
    path: '/components/logic',
    parent: 'components',
    element: <LogicComPage />,
    meta: {
      cname: 'logics',
      icon: 'ri-global-line',
    },
  },
  {
    name: 'indicator',
    path: '/components/indicator',
    parent: 'components',
    element: <IndicatorPage />,
    meta: {
      cname: 'indicator',
      icon: 'ri-circle-fill',
    },
  },
  {
    name: 'signature',
    path: '/components/signature',
    parent: 'components',
    element: <SignaturePage />,
    meta: {
      cname: 'Signature',
      icon: 'ri-sketching',
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
