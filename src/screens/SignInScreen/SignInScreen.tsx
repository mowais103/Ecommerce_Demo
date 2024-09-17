import React, {useCallback, useEffect, useState} from 'react';
import {
  AtomButton,
  AtomImage,
  AtomInput,
  AtomScreenContainer,
  AtomText,
  AtomView,
  Spacer,
} from '../../components';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Images} from '../../assets';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../styles';
import {RootStackScreenProps} from '../../types';
import {authenticateUser, useAppDispatch, useAppSelector} from '../../lib';
import {
  resetErrorMessage,
  setErrorMessage,
} from '../../redux/slice/error/errorSlice';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapStyle: {
    position: 'absolute',
    zIndex: -1,
  },
});

type SignInScreenProps = RootStackScreenProps<'SignInScreen'>;

const SignInScreen = ({navigation}: SignInScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetErrorMessage());
    return () => {
      dispatch(resetErrorMessage());
    };
  }, [dispatch]);

  const errorMessage = useAppSelector(state => state.error.errorMessage);

  const onSignUpPress = useCallback(() => {
    setEmail('');
    setPassword('');
    navigation.navigate('SignUpScreen');
  }, [navigation]);

  const onLoginPress = useCallback(async () => {
    setLoading(true);
    if (email?.trim()?.length > 0 && password?.trim()?.length > 0) {
      await authenticateUser(email, password);
    } else {
      dispatch(setErrorMessage('Please enter email and password'));
    }
    setLoading(false);
  }, [dispatch, email, password]);

  return (
    <AtomScreenContainer screenHeader={false}>
      <AtomImage
        wrapStyle={styles.wrapStyle}
        src={Images.sign_in}
        imgStyle={{width: WINDOW_WIDTH, height: WINDOW_HEIGHT}}
      />
      <AtomView
        flex={1}
        justifyContent="flex-end"
        scrollViewProps={{bounces: false}}
        scroll={true}
        mH="medium">
        <AtomInput
          value={email}
          placeholder="Email"
          onChangeText={setEmail}
          autoFocus
          autoCapitalize="none"
          autoComplete="email"
          keyboardType={'email-address'}
          backgroundColor="black30"
          inputTextColor={Colors.white}
          placeholderTextColor={Colors.black}
          borderColor="black"
        />
        <Spacer vertical="small" />
        <AtomInput
          value={password}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
          inputTextColor={Colors.white}
          placeholderTextColor={Colors.black}
          autoComplete="password"
          borderColor="black"
          backgroundColor="black30"
          errorMessage={errorMessage}
          onSubmitEditing={onLoginPress}
        />
        <Spacer vertical="small" />
        <AtomButton
          text="LOG IN"
          onPress={onLoginPress}
          loading={loading}
          disabled={loading}
        />
        <AtomView
          flexDirection="row"
          mT="medium"
          justifyContent="center"
          mV="small"
          onPress={onSignUpPress}>
          <AtomText
            text={"Don't have an account?"}
            color={'white'}
            size="small"
            fontWeight={'400'}
          />
          <AtomText
            text={' Sign up'}
            color={'white'}
            size="small"
            fontWeight={'bold'}
          />
        </AtomView>
        <Spacer vertical="medium" />
      </AtomView>
    </AtomScreenContainer>
  );
};

export {SignInScreen};
