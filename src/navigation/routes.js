import { Image, Text } from 'react-native';
import {Heart, Home, Search} from '../icons';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';

export const routes = [
  {
    key: 'HomeTabButton',
    name: 'Home',
    component: HomeScreen,
    options: {
      headerShown: false,
      tabBarIcon: ({focused}) => (
        <>
          <Image
            source={Home}
            resizeMode="contain"
            style={{
              width: 33,
              height: 25,
              tintColor: focused ? '#e32f45' : '#748c94',
            }}
          />
          <Text
            style={{
              color: focused ? '#e32f45' : '#748c94',
              fontSize: 10,
              fontStyle: '',
            }}>
            {'HOME'}
          </Text>
        </>
      ),
    },
  },
  {
    key: 'SearchTabButton',
    name: 'Search',
    component: SearchScreen,
    options: {
      headerShown: false,
      tabBarIcon: ({focused}) => (
        <>
          <Image
            source={Search}
            resizeMode="contain"
            style={{
              width: 33,
              height: 25,
              tintColor: focused ? '#e32f45' : '#748c94',
            }}
          />
          <Text
            style={{
              color: focused ? '#e32f45' : '#748c94',
              fontSize: 10,
              fontStyle: '',
            }}>
            {'SEARCH'}
          </Text>
        </>
      ),
    },
  },
  {
    key: 'FavoritesTabButton',
    name: 'Favorites',
    component: FavoritesScreen,
    options: {
      headerShown: false,
      tabBarIcon: ({focused}) => (
        <>
          <Image
            source={Heart}
            resizeMode="contain"
            style={{
              width: 33,
              height: 25,
              tintColor: focused ? '#e32f45' : '#748c94',
            }}
          />
          <Text
            style={{
              color: focused ? '#e32f45' : '#748c94',
              fontSize: 10,
              fontStyle: '',
            }}>
            {'FAVORITES'}
          </Text>
        </>
      ),
    },
  },
];
