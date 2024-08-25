import React from 'react';
import {AtomView} from './AtomView';
import {StyleSheet} from 'react-native';
import {TColor} from '../../types/common';

const Divider = ({color, height}: {color?: TColor; height?: number}) => (
  <AtomView
    height={height ?? StyleSheet.hairlineWidth}
    width={'100%'}
    backgroundColor={color ?? 'silver'}
  />
);

export {Divider};