import { FC } from 'react';
import routesConfig from '@/routes';
import Card from '@/components/card';
import { RouteConfigProps } from '@/types/router';

const ComponentsPage: FC = () => {
  const componentList = routesConfig.filter((item) => item.parent === 'components') as Required<RouteConfigProps>[];
  return (
    <div>
      {componentList?.map((item) => {
        return <Card key={item.name} icon={item.meta.icon} name={item.meta.cname} path={item.path} />;
      })}
    </div>
  );
};

export default ComponentsPage;
