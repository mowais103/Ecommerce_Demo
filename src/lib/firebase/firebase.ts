import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {User} from '../../types';
import {store} from '../../redux/store';
import {setErrorMessage} from '../../redux/slice/error/errorSlice';
import {navigate} from '../../navigators/RootNavigation';
import {setCurrentUser} from '../../redux/slice/user/userSlice';
import {USER_COLLECTION} from './collections';

const dispatch = store.dispatch;

export const getAuthToken = async () => {
  const authToken = await auth()?.currentUser?.getIdToken();
  if (authToken) {
    return authToken;
  } else {
    return null;
  }
};

export const getCurrentUser = async (id: string) => {
  const response = (
    await firestore()?.collection(`${USER_COLLECTION}`)?.doc(id)?.get()
  )?.data();
  if (response) {
    return response;
  } else {
    return null;
  }
};

export const registerUser = async (
  email: string,
  password: string,
  firstName?: string,
  lastName?: string,
  phoneNumber?: string,
) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    let userData: User = {
      id: response?.user.uid,
      firstName,
      lastName,
      email,
      phoneNumber,
      createdAt: firestore.FieldValue.serverTimestamp(),
    };
    await firestore()
      .collection(`${USER_COLLECTION}`)
      .doc(userData?.id)
      .set(userData)
      ?.then(() => {
        dispatch(setCurrentUser(userData));
        navigate('TabNavigator');
      })
      .catch((err: any) => {
        console.error(err, 'while adding user record');
      });
  } catch (error: any) {
    if (error?.code === 'auth/email-already-in-use') {
      dispatch(setErrorMessage('That email address is already in use!'));
    }
    if (error?.code === 'auth/invalid-email') {
      dispatch(setErrorMessage('That email address is invalid!'));
    }
    console.error('Something went wrong, please try again.');
  }
};

export const authenticateUser = async (email: string, password: string) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const userData = await getCurrentUser(response.user.uid);

    if (userData) {
      dispatch(setCurrentUser(userData));
    } else {
      dispatch(setErrorMessage('Something went wrong, please try again.'));
    }
  } catch (error: any) {
    if (error?.code === 'auth/invalid-email') {
      dispatch(setErrorMessage('That email address is invalid!'));
    } else if (error?.code === 'auth/wrong-password') {
      dispatch(setErrorMessage('password is wrong'));
    } else if (error?.code === 'auth/invalid-credential') {
      dispatch(setErrorMessage('invalid email or password'));
    } else if (error?.code === 'auth/user-disabled') {
      dispatch(
        setErrorMessage(
          'The user corresponding to the given email has been disabled.',
        ),
      );
    } else if (error?.code === 'auth/user-not-found') {
      dispatch(
        setErrorMessage('There is no user corresponding to the given email.'),
      );
    } else {
      console.error(error, 'An error occurred while login.');
    }
  }
};
