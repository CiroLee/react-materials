import { FC } from 'react';
import routesConfig from '@/routes';
import Card from '@/components/business/card';
import type { RouteConfigProps } from '@/types/router';
import style from './style/home.module.scss';

const ComponentsPage: FC = () => {
  const componentList = routesConfig.filter((item) => item.parent === 'components') as Required<RouteConfigProps>[];
  return (
    <div className={style.box}>
      {componentList?.map((item) => {
        return (
          <Card
            className={style['card-gap']}
            key={item.name}
            icon={item.meta.icon}
            name={item.meta.cname}
            path={item.path}
          />
        );
      })}
    </div>
  );
};

export default ComponentsPage;
