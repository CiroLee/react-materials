import ReIcon from '@/components/reIcon';
import RButton from '@/components/button';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import style from './style/index.module.scss';
import type { IButtonEvent } from '@/components/button';
const cx = classNames.bind(style);
const ButtonComPage = () => {
  const navigate = useNavigate();
  const handleBtnOnClick = (event: IButtonEvent) => {
    console.log(event);
  };
  return (
    <div>
      <ReIcon name="ri-arrow-left-line" size={24} color="#333" onClick={() => navigate(-1)} />
      <h2 className={cx('button-page__title')}>Button</h2>
      <div className={cx('button-page__content')}>
        <div className={cx('button-page__block')}>
          <h2>基础使用</h2>
          <div className={cx('button-page__button-group')}>
            <RButton>primary</RButton>
            <RButton type="success">success</RButton>
            <RButton type="warn">warn</RButton>
            <RButton type="danger">danger</RButton>
            <RButton type="primary" disabled>
              disabled
            </RButton>
          </div>
        </div>
        <div className={cx('button-page__block')}>
          <h2>尺寸</h2>
          <div className={cx('button-page__button-group')}>
            <RButton size="small">small</RButton>
            <RButton>default</RButton>
            <RButton size="large">large</RButton>
          </div>
        </div>
        <div className={cx('button-page__block')}>
          <h2>形状</h2>
          <div className={cx('button-page__button-group')}>
            <RButton shape="round">button</RButton>
            <RButton shape="square">S</RButton>
            <RButton shape="capsule">capsule</RButton>
            <RButton shape="circle">O</RButton>
          </div>
        </div>
        <div className={cx('button-page__block')}>
          <h2>带图标button</h2>
          <div className={cx('button-page__button-group')}>
            <RButton preffixIcon={<ReIcon name="ri-message-3-line" />}>button</RButton>
            <RButton suffixIcon={<ReIcon name="ri-message-3-line" />}>button</RButton>
            <RButton preffixIcon={<ReIcon name="ri-message-2-line" />} suffixIcon={<ReIcon name="ri-message-3-line" />}>
              button
            </RButton>
          </div>
        </div>
        <div className={cx('button-page__block')}>
          <h2>图标按钮</h2>
          <div className={cx('button-page__button-group')}>
            <RButton shape="circle">
              <ReIcon name="ri-message-3-line" />
            </RButton>
            <RButton shape="square">
              <ReIcon name="ri-message-3-line" />
            </RButton>
          </div>
        </div>
        <div className={cx('button-page__block')}>
          <h2>loading按钮</h2>
          <div className={cx('button-page__button-group')}>
            <RButton loading shape="square" />
            <RButton loading onClick={handleBtnOnClick}>
              Loading...
            </RButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonComPage;
