import React from 'react';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types/navTypes';
import {AtomIcon} from '../components/atoms/AtomIcon';
import {TIcons} from '../types/common';
import {Home} from './HomeNavigator';
import {Collections} from './CollectionNavigator';
import {Cart} from './CartNavigator';
import {Favorites} from './FavoritesNavigator';
import {Colors} from '../styles/common';
import {TouchableOpacity} from 'react-native';
import {AtomText} from '../components/atoms/AtomText';
import {AtomView} from '../components/atoms/AtomView';
import {useAppSelector} from '../lib/hooks/common';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabBar = ({focused, route}: any) => {
  let iconName: TIcons = 'homeInActive'; // to satisfy typescript

  if (route.name === 'Home') {
    iconName = focused ? 'homeActive' : 'homeInActive';
  } else if (route.name === 'Collections') {
    iconName = focused ? 'collectionActive' : 'collectionInActive';
  } else if (route.name === 'Cart') {
    iconName = focused ? 'cartActive' : 'cartInActive';
  } else if (route.name === 'Favorites') {
    iconName = focused ? 'favoriteActive' : 'favoriteInActive';
  }

  return (
    <AtomView justifyContent="center" alignItems="center">
      <AtomIcon
        icon={iconName}
        size="large"
        tintColor={focused ? Colors.pineGreen : undefined}
      />
      <AtomText
        text={route.name}
        size="small"
        fontWeight={focused ? '600' : '300'}
        color={focused ? 'pineGreen' : 'black'}
        pT="xs"
      />
    </AtomView>
  );
};

const TabNavigator = () => {
  const tabBarButton = (props: BottomTabBarButtonProps) => (
    <TouchableOpacity {...props} />
  );

  const totalQty = useAppSelector(state => state.cart.totalQty);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => <TabBar focused={focused} route={route} />,
        headerShown: false,
        tabBarButton: tabBarButton,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Collections" component={Collections} />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: totalQty > 0 ? totalQty : undefined,
        }}
      />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

export {TabNavigator};
