import React from 'react';
import {AtomView} from '../atoms/AtomView';
import {AtomIcon} from '../atoms/AtomIcon';
import {AtomText} from '../atoms/AtomText';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  deleteItemContainer: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  addItemContainer: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

type QuantifierProps = {
  itemQty: number;
  OnDecrement: () => void;
  onIncrement: () => void;
};

const Quantifier = ({itemQty, OnDecrement, onIncrement}: QuantifierProps) => (
  <AtomView flexDirection="row">
    <AtomView
      style={styles.deleteItemContainer}
      justifyContent="center"
      alignItems="center"
      borderColor="lightGrey"
      pAll="small"
      onPress={OnDecrement}>
      {itemQty <= 1 ? (
        <AtomIcon icon="trash" size="small" />
      ) : (
        <AtomIcon icon="minus" size="small" />
      )}
    </AtomView>
    <AtomView
      justifyContent="center"
      borderColor="lightGrey"
      alignItems="center"
      pH="large">
      <AtomText text={itemQty} />
    </AtomView>
    <AtomView
      style={styles.addItemContainer}
      justifyContent="center"
      borderColor="lightGrey"
      alignItems="center"
      pAll="small"
      onPress={onIncrement}>
      <AtomIcon icon="plus" size="small" />
    </AtomView>
  </AtomView>
);

export {Quantifier};
