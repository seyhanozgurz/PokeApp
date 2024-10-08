import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/Details/DetailsScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {LoginForm} from './src/components';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Form"
            component={LoginForm}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
