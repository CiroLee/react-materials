import React, { FC } from 'react';
import classNames from 'classnames';
import './style/index.scss';
interface ResizableBoxProps {
  width?: string;
  height?: string;
  className?: string;
  resize: 'horizontal-left' | 'horizontal-right' | 'vertical-top' | 'vertical-bottom';
  children?: React.ReactNode;
}
const ResizableBox: FC<ResizableBoxProps> = (props) => {
  const parentStyle = props.resize.includes('horizontal')
    ? {
        height: props.height || '120px',
      }
    : ({
        width: props.width || '120px',
      } as React.CSSProperties);
  const resizeStyle = props.resize.includes('horizontal')
    ? {
        width: props.width || '16px',
      }
    : ({
        height: props.height || '16px',
      } as React.CSSProperties);
  return (
    <div className={classNames('resizable-box', props.className, props.resize)} style={parentStyle}>
      <div style={resizeStyle} className={classNames('resize', props.resize)}></div>
      <div className={classNames('resize-line')}></div>
      <div className={classNames('resize-content')}>{props.children}</div>
    </div>
  );
};

export default ResizableBox;
