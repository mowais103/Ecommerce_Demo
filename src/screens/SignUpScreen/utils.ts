import {setErrorMessage} from '../../redux/slice/error/errorSlice';
import {store} from '../../redux/store';
import isEmailValid from 'validator/es/lib/isEmail';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import isStrongPassword from 'validator/es/lib/isStrongPassword';
import {registerUser} from '../../lib';

const dispatch = store.dispatch;

export const validateAndRegister = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
) => {
  if (!email || !isEmailValid(email.trim())) {
    dispatch(setErrorMessage('Please enter a valid email.'));
    return;
  }
  if (!firstName) {
    dispatch(setErrorMessage('Please enter your first name.'));
    return;
  }
  if (!lastName) {
    dispatch(setErrorMessage('Please enter your last name.'));
    return;
  }
  if (!phoneNumber || !isMobilePhone(phoneNumber)) {
    dispatch(setErrorMessage('Please enter a valid Phone Number.'));
    return;
  }
  if (!isStrongPassword(password)) {
    dispatch(
      setErrorMessage(
        'Min. 8 characters, at least 1 uppercase, 1 lowercase letter, at least 1 number and at least 1 special character required in password.',
      ),
    );
    return;
  }
  await registerUser(email, password, firstName, lastName, phoneNumber);
};
