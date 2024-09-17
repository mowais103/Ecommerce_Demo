import React, {useCallback, useEffect, useState} from 'react';
import {
  AtomButton,
  AtomInput,
  AtomScreenContainer,
  AtomText,
  AtomView,
  HeaderLeft,
  Spacer,
} from '../../components';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootStackScreenProps} from '../../types';
import {validateAndRegister} from './utils';
import {StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../lib';
import {resetErrorMessage} from '../../redux/slice/error/errorSlice';

const styles = StyleSheet.create({
  loginButton: {
    marginHorizontal: 16,
  },
});

type SignUpScreenProps = RootStackScreenProps<'SignUpScreen'>;

const SignUpScreen = ({navigation}: SignUpScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetErrorMessage());
    return () => {
      dispatch(resetErrorMessage());
    };
  }, [dispatch]);

  const errorMessage = useAppSelector(state => state.error.errorMessage);

  const onSignIn = useCallback(
    () => navigation.navigate('SignInScreen'),
    [navigation],
  );

  const onSignUp = useCallback(async () => {
    setLoading(true);
    await validateAndRegister(
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
    );
    setLoading(false);
  }, [email, password, firstName, lastName, phoneNumber]);

  return (
    <AtomScreenContainer screenHeader={false} backgroundColor="pineGreen">
      <HeaderLeft isHeaderlessScreen={true} />

      <AtomView scrollViewProps={{bounces: false}} scroll={true} flex={1}>
        <AtomView pH="large" pV="xl">
          <AtomText color={'white'} text={'Sign up'} size="xl" pB="medium" />
          <AtomText
            color={'grey'}
            text={'Register your application today.'}
            size="large"
          />
        </AtomView>

        <AtomView mH="medium" flex={1}>
          <AtomInput
            value={email}
            placeholder="Email"
            autoFocus={true}
            onChangeText={setEmail}
            autoCapitalize="none"
            placeholderTextColor={Colors.white}
            autoComplete="email"
            keyboardType={'email-address'}
            inputTextColor={Colors.white}
          />
          <Spacer vertical="small" />
          <AtomInput
            value={firstName}
            placeholder="First Name"
            onChangeText={setFirstName}
            autoCapitalize="words"
            placeholderTextColor={Colors.white}
            autoComplete="given-name"
            inputTextColor={Colors.white}
          />
          <Spacer vertical="small" />
          <AtomInput
            value={lastName}
            placeholder="Last Name"
            onChangeText={setLastName}
            autoCapitalize="words"
            placeholderTextColor={Colors.white}
            autoComplete="family-name"
            inputTextColor={Colors.white}
          />
          <Spacer vertical="small" />
          <AtomInput
            value={phoneNumber}
            placeholder={'Phone Number'}
            onChangeText={setPhoneNumber}
            autoCapitalize="words"
            placeholderTextColor={Colors.white}
            autoComplete="tel"
            keyboardType={'number-pad'}
            maxLength={16} // max phone number length
            inputTextColor={Colors.white}
          />
          <Spacer vertical="small" />
          <AtomInput
            value={password}
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholderTextColor={Colors.white}
            autoComplete="password"
            inputTextColor={Colors.white}
            onSubmitEditing={onSignUp}
            errorMessage={errorMessage}
          />
          <Spacer vertical="small" />
        </AtomView>
        <AtomButton
          text="SIGN UP"
          style={styles.loginButton}
          backgroundColor="black30"
          onPress={onSignUp}
          loading={loading}
          disabled={loading}
        />

        <AtomView
          flexDirection="row"
          mT="medium"
          justifyContent="center"
          mV="small"
          onPress={onSignIn}>
          <AtomText
            text={'Already have an account?'}
            color={'white'}
            size="small"
          />
          <AtomText text={' Sign in'} color={'white'} size="small" />
        </AtomView>

        <Spacer vertical="medium" />
      </AtomView>
    </AtomScreenContainer>
  );
};

export {SignUpScreen};
