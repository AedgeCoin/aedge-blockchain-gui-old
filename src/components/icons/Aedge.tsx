import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as AedgeIcon } from './images/aedge.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={AedgeIcon} viewBox="0 0 150 58" {...props} />;
}
