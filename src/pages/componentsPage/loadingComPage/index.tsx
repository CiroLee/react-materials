import { useState, useEffect } from 'react';
import ReIcon from '@/components/reIcon';
import { useNavigate } from 'react-router-dom';
import style from './style/index.module.scss';
import TinyLorem from 'tiny-lorem';
import Loading from '@/components/loading';

const lorem = new TinyLorem();
const LoadingComPage = () => {
  const navigate = useNavigate();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  let timer1: number;
  let timer2: number;
  const showLoading1 = () => {
    setShow1(true);
    timer1 = setTimeout(() => {
      setShow1(false);
      clearInterval(timer1);
    }, 3000);
  };
  const showLoading2 = () => {
    setShow2(true);
    timer2 = setTimeout(() => {
      setShow2(false);
      clearInterval(timer2);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <div className={style['loading-page']}>
      <ReIcon name="ri-arrow-left-line" size={24} color="#333" onClick={() => navigate(-1)} />
      <h2 className={style.title}>Loading</h2>
      <div className={style['loading-page__content']}>
        <div className={style['loading-page__panel']}>
          <p>块级loading-遮罩</p>
          <div className={style['loading-page__block']}>
            <div className={style['loading-page__block--text']}>{lorem.texts.word({ range: 200 })}</div>
            <Loading show={true} center={true} mask={true} />
          </div>
        </div>
        <div className={style['loading-page__panel']}>
          <p>块级loading-无遮罩</p>
          <div className={style['loading-page__block']}>
            <div className={style['loading-page__block--text']}>{lorem.texts.word({ range: 200 })}</div>
            <Loading show={true} center={true} mask={false} />
          </div>
        </div>
        <div className={style['loading-page__panel']}>
          <p>行内loading-不同尺寸</p>
          <div className={style['loading-page__block']}>
            <Loading show size="small" />
            <Loading show />
            <Loading show size="large" />
          </div>
        </div>
        <div className={style['loading-page__panel']}>
          <p onClick={showLoading1}>全屏loading-遮罩(click)</p>
          <Loading show={show1} fullscreen mask />
        </div>
        <div className={style['loading-page__panel']}>
          <p onClick={showLoading2}>全屏loading-无遮罩(click)</p>
          <Loading show={show2} fullscreen={false} mask />
        </div>
      </div>
    </div>
  );
};

export default LoadingComPage;
