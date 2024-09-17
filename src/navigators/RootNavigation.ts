import {createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from '../types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate: typeof navigationRef.navigate = (name, params?) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
