import React from 'react';
import {AtomView} from './AtomView';
import {TSpacing} from '../../types/styleTypes';

type SpacerProps = {
  vertical?: TSpacing;
  horizontal?: TSpacing;
};

const Spacer = ({horizontal, vertical}: SpacerProps) => {
  if (horizontal && vertical) {
    return <AtomView pH={horizontal} pV={vertical} />;
  }
  if (horizontal) {
    return <AtomView pH={horizontal} />;
  }
  if (vertical) {
    return <AtomView pV={vertical} />;
  }
  return null;
};

export {Spacer};
