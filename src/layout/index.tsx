import { Suspense, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import routesConfig from '@/routes';
import SideMenu from './sideMenu';
import style from './style/index.module.scss';
import { RouteConfigProps } from '@/types/router';

const Redirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace: true });
  });
  return null;
};
// 渲染子路由
const renderRoutes = (routes: RouteConfigProps[]) => {
  return routes.map((item) => <Route path={item.path} element={item.element} key={item.name} />);
};
const Layout = () => {
  return (
    <HashRouter>
      <div className={style.layout}>
        <SideMenu />
        <main className={style.content}>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/" element={<Redirect to="/components" />}></Route>
              {renderRoutes(routesConfig)}
            </Routes>
          </Suspense>
        </main>
      </div>
    </HashRouter>
  );
};

export default Layout;
