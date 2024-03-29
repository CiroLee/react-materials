import { FC, useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import './style/popup.scss';

interface PopupProps {
  show: boolean;
  children?: React.ReactNode;
  maskClosable?: boolean;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  cancel: () => void;
}
const Popup: FC<PopupProps> = (props) => {
  const maskRef = useRef<HTMLDivElement | null>(null);
  const [visibleAni, setVisibleAni] = useState(false);
  const [readyToHidden, setStartHidden] = useState(false);
  const [endHidden, setEndHidden] = useState(true);
  const maskClick = () => {
    if (!props.maskClosable) return;
    setVisibleAni(false);
    props.cancel && props.cancel();
    console.log(123);
  };

  // 触发动画
  useEffect(() => {
    setVisibleAni(props.show);
    if (props.show) {
      setStartHidden(true);
      setEndHidden(false);
    }
  }, [props.show]);

  useEffect(() => {
    maskRef.current &&
      maskRef.current.addEventListener('transitionend', function () {
        if (!props.show && readyToHidden) {
          setEndHidden(true);
          console.log(123);
        }
      });
    return () => {
      maskRef.current &&
        maskRef.current.removeEventListener('transitionend', function () {
          console.log('unmounted');
        });
    };
  });

  return (
    <>
      {props.show || !endHidden ? (
        <div className="popup">
          <div ref={maskRef} className={cn('popup__mask', { show: visibleAni })} onClick={maskClick}></div>
          <div className={cn('popup__content', { show: visibleAni }, props.placement || 'bottom')}>
            {props.children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Popup;
