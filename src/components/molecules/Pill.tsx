import React from 'react';
import {TColor} from '../../types/styleTypes';
import {AtomText} from '../atoms/AtomText';
import {AtomView} from '../atoms/AtomView';

const Pill = ({
  backgroundColor,
  name,
}: {
  backgroundColor?: TColor;
  name: string;
}) => (
  <AtomView
    key={name}
    backgroundColor={backgroundColor}
    borderColor="pineGreen"
    borderRadius="medium"
    justifyContent="center"
    alignItems="center"
    pH="medium"
    pV="small"
    mR="small">
    <AtomText text={name} size="small" textTransform="capitalize" />
  </AtomView>
);

export {Pill};
