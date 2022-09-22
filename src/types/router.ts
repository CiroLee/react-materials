import { RouteProps } from 'react-router-dom';

export interface RouteConfigProps extends RouteProps {
  name: string;
  meta?: {
    cname?: string;
    visible?: boolean;
  };
}
