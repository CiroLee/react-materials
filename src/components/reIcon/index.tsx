import React, { FC } from 'react';
import classNames from 'classnames';
import './style/index.scss';
interface IReIcon {
  name?: string;
  color?: string;
  size?: number;
  className?: string;
  onClick?: (props: unknown) => void;
}
const transToCssVariables = (props: IReIcon) => {
  const { color = 'inherit', size = 16 } = props;

  const temp = {
    '--color': color,
    '--size': `${size}px`,
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
  return (
    <i
      className={classNames('re-icon', props.name, props.className)}
      style={cssVariables as React.CSSProperties}
      onClick={props.onClick}></i>
  );
};

export default ReIcon;
