import React, {ReactNode} from 'react';
import {AtomSafeArea} from './AtomSafeArea';
import {TColor} from '../../types/styleTypes';

type AtomScreenContainerProps = {
  children?: ReactNode;
  backgroundColor?: TColor;
  screenHeader?: boolean;
};

const AtomScreenContainer = ({
  children,
  backgroundColor,
  screenHeader,
}: AtomScreenContainerProps) => (
  <AtomSafeArea backgroundColor={backgroundColor} screenHeader={screenHeader}>
    {children}
  </AtomSafeArea>
);

export {AtomScreenContainer};
