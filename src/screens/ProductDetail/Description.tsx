import React from 'react';
import {AtomText} from '../../components/atoms/AtomText';
import {AtomView} from '../../components/atoms/AtomView';
import {ListHeader} from '../../components/molecules/ListHeader';
import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/common';

type DescriptionProps = {
  onPress: () => void;
  showProductDetails: boolean;
  description: string;
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: Colors.grey,
    borderTopColor: Colors.grey,
    marginVertical: 8,
  },
});

const Description = ({
  onPress,
  showProductDetails,
  description,
}: DescriptionProps) => {
  return (
    <AtomView style={styles.container} onPress={onPress}>
      <ListHeader
        title="Product Details"
        icon={showProductDetails ? 'triangleDown' : 'triangleUp'}
      />
      {showProductDetails ? (
        <AtomText text={description} pV="small" size="small" />
      ) : null}
    </AtomView>
  );
};

export {Description};
