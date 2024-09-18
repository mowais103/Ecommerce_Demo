import React from 'react';
import {
  AtomScreenContainer,
  AtomText,
  AtomView,
  Divider,
} from '../../components';
import {useAppSelector} from '../../lib';
import {Alert} from 'react-native';

const AccountScreen = () => {
  const user = useAppSelector(state => state.user);

  console.log(user);
  return (
    <AtomScreenContainer>
      <AtomView mH="medium" flex={1} pAll="medium">
        <AtomView flexDirection="row" justifyContent="space-between" pV="small">
          <AtomText
            textAlign="center"
            text={`${user.firstName} ${user.lastName}`}
          />

          <AtomText
            textAlign="center"
            size="large"
            color="red"
            text={'Sign Out'}
            onPress={() => {
              Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
                {
                  text: 'Cancel',
                  onPress: () => {},
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => null},
              ]);
            }}
          />
        </AtomView>
        <Divider color="black30" />
      </AtomView>
    </AtomScreenContainer>
  );
};

export {AccountScreen};
