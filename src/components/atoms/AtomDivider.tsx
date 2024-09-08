import React from 'react';
import {AtomView} from './AtomView';
import {StyleSheet} from 'react-native';
import {TColor} from '../../types/styleTypes';

const Divider = ({color, height}: {color?: TColor; height?: number}) => (
  <AtomView
    height={height ?? StyleSheet.hairlineWidth * 2}
    width={'100%'}
    backgroundColor={color ?? 'silver'}
  />
);

export {Divider};
