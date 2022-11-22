import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

export interface RouteConfigProps extends PathRouteProps {
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
