import React, { ReactNode } from 'react';
import classNames from 'classnames';
import ReIcon from '../reIcon';
import './style/index.scss';
interface IRButton {
  type?: 'primary' | 'success' | 'warn' | 'danger';
  size?: 'small' | 'medium' | 'large';
  shape?: 'round' | 'square' | 'capsule' | 'circle';
  disabled?: boolean;
  preffixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  children?: ReactNode;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export type IButtonEvent = React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>;
const RButton = (props: IRButton) => {
  const slotWidthIcon = () => {
    if (props.loading) {
      return (
        <>
          {<ReIcon name="ri-loader-4-line" />}
          {props.children && <span>{props.children}</span>}
          {props.suffixIcon && props.suffixIcon}
        </>
      );
    }
    return (
      <>
        {props.preffixIcon && props.preffixIcon}
        {props.children && <span>{props.children}</span>}
        {props.suffixIcon && props.suffixIcon}
      </>
    );
  };
  const { type = 'primary', size = 'medium', shape = 'round', loading } = props;
  const slot = !props.loading && !props.preffixIcon && !props.suffixIcon ? props.children : slotWidthIcon();

  const handleButtonOnClick = (event: IButtonEvent) => {
    if (props.onClick && !props.loading) {
      (props.onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(event);
    }
  };

  return (
    <button
      className={classNames('r-button', `r-button--${type}`, `r-button--${size}`, `r-button--${shape}`, {
        loading: loading,
      })}
      disabled={props.disabled}
      onClick={handleButtonOnClick}>
      {slot}
    </button>
  );
};

export default RButton;
