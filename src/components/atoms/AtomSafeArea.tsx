import React, {ReactNode, useMemo} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../styles/common';
import {TColor} from '../../types/styleTypes';

type AtomSafeAreaProps = {
  backgroundColor?: TColor;
  children: ReactNode;
  screenHeader?: boolean;
};

const AtomSafeArea = ({
  children,
  backgroundColor,
  screenHeader = true,
}: AtomSafeAreaProps) => {
  const insets = useSafeAreaInsets();

  const style = useMemo(() => {
    return {
      flex: 1,
      paddingTop: !screenHeader ? insets.top : 0,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: backgroundColor ? Colors[backgroundColor] : Colors.white,
    };
  }, [insets, backgroundColor, screenHeader]);

  return <View style={style}>{children}</View>;
};

export {AtomSafeArea};
