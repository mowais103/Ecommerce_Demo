import React from 'react';
import {AtomIcon} from '../atoms/AtomIcon';
import {AtomInput} from '../atoms/AtomInput';

type SearchBarProps = {
  value: string;
  onChangeText: (val: string) => void;
  onPressClose?: () => void;
};

const SearchBar = ({value, onChangeText, onPressClose}: SearchBarProps) => {
  return (
    <AtomInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Search"
      autoFocus
      autoCapitalize="none"
      spellCheck={false}
      LeftElement={<AtomIcon icon="search" size="xl" />}
      RightElement={<AtomIcon icon="close" size="xl" onPress={onPressClose} />}
    />
  );
};

export {SearchBar};
