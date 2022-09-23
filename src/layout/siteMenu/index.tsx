import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReIcon from '@/components/reIcon';
import routesConfig from '@/routes';
import classNanmes from 'classnames/bind';
import style from './style/index.module.scss';

const cx = classNanmes.bind(style);
const activeLink = {
  color: 'white',
  backgroundColor: '#007bff',
};
const SideMenu: FC = () => {
  const filterRoutes = routesConfig.filter((item) => item.meta?.visible);
  const [collapsible, setSollapsible] = useState(false);
  return (
    <div className={cx('side-menu', { collapsible: collapsible })}>
      <div className={cx('side-menu__items')}>
        {filterRoutes.map((route) => (
          <NavLink
            key={route.name}
            to={route.path as string}
            className={cx('side-menu__link')}
            style={({ isActive }) => (isActive ? activeLink : undefined)}>
            <ReIcon name={route.meta?.icon}></ReIcon>
            <span>{route.meta?.cname}</span>
          </NavLink>
        ))}
      </div>
      <div className={cx('side-menu__footer')} onClick={() => setSollapsible(!collapsible)}>
        <ReIcon name="arrow-left-s-line"></ReIcon>
      </div>
    </div>
  );
};

export default SideMenu;
