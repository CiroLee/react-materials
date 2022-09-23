import React from 'react';
import './index.scss';

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
  const classname = props.size ? `r-loading__loading-box ${props.size}` : 'r-loading__loading-box';
  return (
    <div className={classname}>
      <div className="r-loading__loading--circle"></div>
      {props.text && <span className="r-loading__loading-text">{props.text}</span>}
    </div>
  );
};
const Loading = (props: IGlobalLoadingProps) => {
  const { show, mask = false, text, size, fullscreen, center } = props;
  let wrapper = fullscreen ? 'r-loading fullscreen' : 'r-loading';
  wrapper = center ? `${wrapper} center` : wrapper;
  return show ? (
    <div className={wrapper}>
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
