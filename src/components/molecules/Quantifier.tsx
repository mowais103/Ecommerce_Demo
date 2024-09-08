import React from 'react';
import {AtomView} from '../atoms/AtomView';
import {AtomIcon} from '../atoms/AtomIcon';
import {AtomText} from '../atoms/AtomText';
import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/common';

const styles = StyleSheet.create({
  deleteItemContainer: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: Colors.grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addItemContainer: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: Colors.grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemQtyContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
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
      pAll="small"
      onPress={OnDecrement}>
      {itemQty <= 1 ? (
        <AtomIcon icon="trash" size="small" />
      ) : (
        <AtomIcon icon="minus" size="small" />
      )}
    </AtomView>
    <AtomView pH="large" style={styles.itemQtyContainer}>
      <AtomText text={itemQty} />
    </AtomView>
    <AtomView
      style={styles.addItemContainer}
      pAll="small"
      onPress={onIncrement}>
      <AtomIcon icon="plus" size="small" />
    </AtomView>
  </AtomView>
);

export {Quantifier};
