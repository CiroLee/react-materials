import React from 'react';
import classNames from 'classnames';
import './style/index.scss';
interface IGlobalLoadingProps {
  show: boolean;
  text?: string;
  mask?: boolean;
  fullscreen?: boolean;
  center?: boolean;
  size?: 'small' | 'medium' | 'large';
}

interface IMaskProps {
  fullscreen?: boolean;
  children?: React.ReactNode;
}

const MaskConponent = (props: IMaskProps) => {
  return <div className="r-loading__mask">{props.children}</div>;
};
const LoadingComponent = (props: Pick<IGlobalLoadingProps, 'size' | 'text'>) => {
  return (
    <div className={classNames('r-loading__loading-box', props.size)}>
      <div className="r-loading__loading--circle"></div>
      {props.text && <span className="r-loading__loading-text">{props.text}</span>}
    </div>
  );
};
/**
 * TODO
 * 自动阻止事件冒泡
 */
const Loading = (props: IGlobalLoadingProps) => {
  const { show, mask, text, size, fullscreen, center } = props;
  return show ? (
    <div
      className={classNames('r-loading', {
        fullscreen: fullscreen,
        center: center,
      })}>
      {mask ? (
        <MaskConponent fullscreen={fullscreen}>
          <LoadingComponent text={text} size={size} />
        </MaskConponent>
      ) : (
        <LoadingComponent text={text} size={size} />
      )}
    </div>
  ) : null;
};

export default Loading;
