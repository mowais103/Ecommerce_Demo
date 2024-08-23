import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../styles/common';

type AtomSafeAreaProps = {
  backgroundColor: keyof typeof Colors;
  children: JSX.Element;
};

const AtomSafeArea = ({children, backgroundColor}: AtomSafeAreaProps) => {
  const insets = useSafeAreaInsets();

  const style = useMemo(() => {
    return {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: backgroundColor ? Colors[backgroundColor] : Colors.white,
    };
  }, [insets, backgroundColor]);

  return <View style={style}>{children}</View>;
};

export {AtomSafeArea};
