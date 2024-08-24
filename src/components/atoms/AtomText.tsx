import React from 'react';
import {FlexStyle, Text, TextProps, TextStyle} from 'react-native';
import {TColor, TFontSize, TSpacing} from '../../types/common';
import {Colors, FontSizes, STDSpacing} from '../../styles/common';

type AtomTextProps = TextProps & {
  size?: TFontSize;
  text: string | React.ReactNode;
  color?: TColor;
  bold?: boolean;
  semiBold?: boolean;
  textAlign?: TextStyle['textAlign'];
  pL?: TSpacing;
  pR?: TSpacing;
  pT?: TSpacing;
  pB?: TSpacing;
  pAll?: TSpacing;
  pH?: TSpacing;
  pV?: TSpacing;
  underline?: boolean;
  flex?: TextStyle['flex'];
  letterSpacing?: TextStyle['letterSpacing'];
  alignSelf?: FlexStyle['alignSelf'];
  fontFamily?: TextStyle['fontFamily'];
  useOswald?: boolean;
};

const AtomText = React.memo(
  ({
    text,
    size = 'medium',
    color = 'black',
    pAll,
    pB,
    pH,
    pL,
    pR,
    pT,
    pV,
    textAlign = 'left',
    underline,
    bold,
    style,
    semiBold,
    useOswald,
    ...rest
  }: AtomTextProps) => {
    let textStyle: TextStyle = {
      fontFamily: useOswald ? 'Oswald-Regular' : undefined,
    };

    if (pL) {
      textStyle = {paddingLeft: STDSpacing[pL]};
    }
    if (pR) {
      textStyle = {...textStyle, paddingRight: STDSpacing[pR]};
    }
    if (pT) {
      textStyle = {...textStyle, paddingTop: STDSpacing[pT]};
    }
    if (pB) {
      textStyle = {...textStyle, paddingBottom: STDSpacing[pB]};
    }
    if (pAll) {
      textStyle = {...textStyle, padding: STDSpacing[pAll]};
    }
    if (pH) {
      textStyle = {...textStyle, paddingHorizontal: STDSpacing[pH]};
    }
    if (pV) {
      textStyle = {...textStyle, paddingVertical: STDSpacing[pV]};
    }

    if (size) {
      textStyle = {...textStyle, fontSize: FontSizes[size]};
    }
    if (color) {
      textStyle = {...textStyle, color: Colors[color]};
    }
    if (bold || semiBold) {
      textStyle = {
        ...textStyle,
        fontWeight: useOswald ? undefined : bold ? 'bold' : '600',
        fontFamily: useOswald ? 'Oswald-Bold' : undefined,
      };
    }
    if (textAlign) {
      textStyle = {...textStyle, textAlign};
    }
    if (underline) {
      textStyle = {...textStyle, textDecorationLine: 'underline'};
    }

    return (
      <Text style={[style, textStyle]} {...rest}>
        {text}
      </Text>
    );
  },
);

export {AtomText};
