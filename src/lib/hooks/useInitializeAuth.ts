import {useCallback, useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {setAccessToken} from '../../redux/slice/auth/auth';
import {useAppDispatch} from './common';

const useInitializeAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const dispatch = useAppDispatch();

  const onAuthStateChangedHandler = useCallback(
    async (user: FirebaseAuthTypes.User | null) => {
      if (user) {
        const accessToken = await user.getIdToken();
        setIsSignedIn(true);
        dispatch(setAccessToken(accessToken));
      }
      if (initializing) {
        setInitializing(false);
      }
    },
    [dispatch, initializing],
  );

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChangedHandler);

    return unsubscribe;
  }, [onAuthStateChangedHandler]);

  if (initializing) {
    return setTimeout(() => 1000); // wait until initialization finished
  }

  return isSignedIn;
};
export {useInitializeAuth};
