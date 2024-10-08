import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from './tab.styles';
import { routes } from './routes';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  console.log('tabs');
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      })}>
      {routes.map(route => {
        return (
          <Tab.Screen
            key={route.key}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        );
      })}


    </Tab.Navigator>
  );
};

export default Tabs;
