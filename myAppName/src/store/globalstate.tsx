import React, {useState} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import PaymentScreen from '../Screen/PaymentScreen';
import HomeScreen from '../Screen/HomeScreen';

const Stack = createStackNavigator();

export const Context1 = React.createContext(null);

export const NavStack = () => {
  const context1InitialState = {
    totalAmount: null,
    itemValue: null,
    selectedValue: null,
  };

  const [cartInfo, setCartInfo] = useState(context1InitialState);

  function setAmount(totalAmount: any) {
    const newState = {...cartInfo, totalAmount};
    setCartInfo(newState);
  }

  function setTotalAmount(itemValue: any) {
    const newState = {...cartInfo, itemValue};
    setCartInfo(newState);
  }
  function setSelectedValue(selectedValue: any) {
    const newState = {...cartInfo, selectedValue};
    setCartInfo(newState);
  }

  const context1Setters = {
    setAmount,
    setTotalAmount,
    setSelectedValue,
  };

  return (
    <Context1.Provider value={{...cartInfo, ...context1Setters}}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </Context1.Provider>
  );
};
