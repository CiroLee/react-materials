import React, { FC } from 'react';
import classNames from 'classnames';
import './style/index.scss';
interface IReIcon {
  name?: string;
  color?: string;
  size?: number | string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
const transToCssVariables = (props: IReIcon) => {
  const { color = 'inherit', size = 'inherit' } = props;

  const temp = {
    '--color': color,
    '--size': typeof size === 'number' ? `${size}px` : size,
  };
  let properties: Omit<IReIcon, 'name'> = {};
  for (const key in temp) {
    const value = temp[key as keyof typeof temp];
    properties = {
      ...properties,
      [key as keyof typeof properties]: value,
    };
  }
  return properties;
};

const ReIcon: FC<IReIcon> = (props: IReIcon) => {
  const cssVariables = transToCssVariables(props);
  const handleOnClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    props.onClick && (props.onClick as React.MouseEventHandler<HTMLElement>)?.(event);
  };
  return (
    <i
      className={classNames('re-icon', props.name, props.className)}
      style={cssVariables as React.CSSProperties}
      onClick={handleOnClick}></i>
  );
};

export default ReIcon;
