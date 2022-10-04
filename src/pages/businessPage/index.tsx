import { useNavigate } from 'react-router-dom';
import RButton from '@/components/button';
import classNames from 'classnames/bind';
import routesConfig from '@/routes';
import style from './style/index.module.scss';
import type { RouteConfigProps } from '@/types/router';
const cx = classNames.bind(style);

interface ExhibitionProps {
  title?: string;
  desc?: string;
  path: string;
}
const Exhibition = (props: ExhibitionProps) => {
  const navigate = useNavigate();
  return (
    <div className={cx('simple-exhibition')}>
      <h2 className={cx('simple-exhibition__title')}>{props.title}</h2>
      <div className={cx('simple-exhibition__desc')}>{props.desc}</div>
      <RButton size="small" onClick={() => navigate(props.path)}>
        View
      </RButton>
    </div>
  );
};
const BusinessPage = () => {
  const list = routesConfig.filter((item) => item.parent === 'business') as Required<RouteConfigProps>[];
  return (
    <div className={cx('business-page')}>
      {list.map((item) => (
        <Exhibition
          key={item.name}
          title={item?.meta?.cname}
          path={item.path as string}
          desc={item?.meta?.desc as string}
        />
      ))}
    </div>
  );
};

export default BusinessPage;
