import React from 'react';
import {FlexStyle, Text, TextProps, TextStyle} from 'react-native';
import {TColor, TFontSize, TSpacing} from '../../types/styleTypes';
import {Colors, FontSizes, STDSpacing} from '../../styles/common';

export type AtomTextProps = TextProps & {
  size?: TFontSize;
  text: string | React.ReactNode;
  color?: TColor;
  textAlign?: TextStyle['textAlign'];
  pL?: TSpacing;
  pR?: TSpacing;
  pT?: TSpacing;
  pB?: TSpacing;
  pAll?: TSpacing;
  pH?: TSpacing;
  pV?: TSpacing;
  underline?: boolean;
  lineThrough?: boolean;
  flex?: TextStyle['flex'];
  letterSpacing?: TextStyle['letterSpacing'];
  alignSelf?: FlexStyle['alignSelf'];
  fontFamily?: TextStyle['fontFamily'];
  fontWeight?: TextStyle['fontWeight'];
  textTransform?: TextStyle['textTransform'];
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
    flex,
    alignSelf,
    textTransform,
    fontWeight = '300',
    fontFamily = 'Oswald',
    textAlign = 'left',
    underline,
    lineThrough,
    style,
    letterSpacing = 1,
    ...rest
  }: AtomTextProps) => {
    let textStyle = {};

    if (fontFamily) {
      textStyle = {...textStyle, fontFamily};
    }

    if (pL) {
      textStyle = {...textStyle, paddingLeft: STDSpacing[pL]};
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

    if (alignSelf) {
      textStyle = {...textStyle, alignSelf};
    }

    if (flex) {
      textStyle = {...textStyle, flex};
    }

    if (color) {
      textStyle = {...textStyle, color: Colors[color]};
    }
    if (fontWeight) {
      textStyle = {
        ...textStyle,
        fontWeight,
      };
    }
    if (textAlign) {
      textStyle = {...textStyle, textAlign};
    }

    if (textTransform) {
      textStyle = {...textStyle, textTransform};
    }

    if (underline) {
      textStyle = {...textStyle, textDecorationLine: 'underline'};
    }

    if (lineThrough) {
      textStyle = {...textStyle, textDecorationLine: 'line-through'};
    }

    if (letterSpacing) {
      textStyle = {...textStyle, letterSpacing};
    }

    return (
      <Text style={[style, {...textStyle}]} {...rest}>
        {text}
      </Text>
    );
  },
);

export {AtomText};
