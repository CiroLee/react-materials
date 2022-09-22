import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routesConfig from '@/routes';
import SideMenu from './siteMenu';
import style from './index.module.scss';

// const Layout = (props: { children: React.ReactNode }) => {
//   return (
//     <div className={style.layout}>
//       <SideMenu />
//       {props.children}
//     </div>
//   );
// };

const Layout = () => {
  const routes = routesConfig.map((item) => {
    return <Route path={item.path} element={item.element} key={item.name} />;
  });
  return (
    <BrowserRouter>
      <div className={style.layout}>
        <SideMenu />
        <main>
          <Suspense fallback={<></>}>
            <Routes>{routes}</Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
