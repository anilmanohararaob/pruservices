import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {Context1} from '../../App';

import {CommonStyles} from '../utils/CommonStyles';

function PaymentScreen({navigation}) {
  const context = useContext(Context1);

  const {totalAmount, itemValue} = context;

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.title}>Check out items</Text>
      <Text style={CommonStyles.value}>{itemValue}</Text>

      <Text>Is the above info correct?</Text>

      <Button
        title={'YES'}
        onPress={() => {
          alert('Yay Payement Successful!');
          navigation.popToTop();
        }}
      />

      <Button
        title={'NO'}
        onPress={() => {
          alert("It's okay you can update the cart again");
          navigation.popToTop();
        }}
      />
    </View>
  );
}

export default PaymentScreen;
