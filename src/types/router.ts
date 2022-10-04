import React from 'react';
import { RouteProps } from 'react-router-dom';

export interface RouteConfigProps extends RouteProps {
  name: string;
  element?: React.ReactNode;
  parent?: string;
  meta?: {
    cname?: string;
    icon?: string;
    visible?: boolean;
    [key: string]: React.ReactNode;
  };
}
