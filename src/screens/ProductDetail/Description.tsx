import React from 'react';
import {StyleSheet} from 'react-native';
import {AtomText, AtomView, ListHeader} from '../../components';
import {Colors} from '../../styles';

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
}: DescriptionProps) => (
  <AtomView style={styles.container} onPress={onPress}>
    <ListHeader
      title="Product Details"
      icon={showProductDetails ? 'triangleUp' : 'triangleDown'}
    />
    {showProductDetails ? (
      <AtomText
        text={description}
        pV="medium"
        color="brown"
        fontWeight={'400'}
      />
    ) : null}
  </AtomView>
);

export {Description};
