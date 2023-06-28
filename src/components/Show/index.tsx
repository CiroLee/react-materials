import React from 'react';

interface ShowProps {
  if: boolean;
  else?: React.ReactNode;
  children?: React.ReactNode;
}
export default function Show(props: ShowProps) {
  return <>{props.if ? props.children : props.else}</>;
}
