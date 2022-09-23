import React, { FC } from 'react';
import './index.scss';
interface IReIcon {
  name?: string;
  color?: string;
  size?: number;
  className?: string;
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
  const iconClassNames = props.className ? `re-icon ${props.name} ${props.className}` : `re-icon ${props.name}`;
  return <i className={iconClassNames} style={cssVariables as React.CSSProperties}></i>;
};

export default ReIcon;
