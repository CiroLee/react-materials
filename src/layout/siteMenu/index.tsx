import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import routesConfig from '@/routes';
const SideMenu: FC = () => {
  const filterRoutes = routesConfig.filter((item) => item.meta?.visible);
  return (
    <div>
      {filterRoutes.map((route) => (
        <NavLink key={route.name} to={route.path as string}>
          {route.meta?.cname}
        </NavLink>
      ))}
    </div>
  );
};

export default SideMenu;
