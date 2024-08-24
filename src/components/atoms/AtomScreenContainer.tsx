import React, {ReactNode} from 'react';
import {AtomSafeArea} from './AtomSafeArea';
import {TColor} from '../../types/common';
import {AtomView} from './AtomView';

type AtomScreenContainerProps = {
  children?: ReactNode;
  backgroundColor?: TColor;
  safeArea?: boolean;
};

const AtomScreenContainer = ({
  children,
  backgroundColor,
  safeArea,
}: AtomScreenContainerProps) =>
  safeArea ? (
    <AtomSafeArea backgroundColor={backgroundColor}>{children}</AtomSafeArea>
  ) : (
    <AtomView flex={1}>{children}</AtomView>
  );

export {AtomScreenContainer};
