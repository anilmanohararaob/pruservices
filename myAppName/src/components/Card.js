import React, {useEffect, useContext, useState, useRef} from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  StyleSheet,
  Dimensions,
  PanResponder,
} from 'react-native';
import {Context1} from '../../App';

const windowWidth = Dimensions.get('window').width;

const Card = props => {
  const context = useContext(Context1);
  const {totalAmount, itemValue, selectedValue} = context;
  console.log('selectedValue::::::::::;' + selectedValue);

  return (
    <View style={{flexDirection: 'row', height: 200, width: windowWidth}}>
      <Image
        style={{
          position: 'absolute',
          marginTop: props.aStore.type === 'LATTE' ? 0 : 20,
        }}
        source={props.aStore.images[0]}
      />
      <Image
        style={{
          position: 'absolute',
          marginTop: -(selectedValue / 30),
        }}
        source={props.aStore.images[1]}
      />
      <Image
        style={{
          position: 'absolute',
          marginTop: props.aStore.type === 'LATTE' ? 0 : -(selectedValue / 30),
        }}
        source={props.aStore.images[2]}
      />
      <Animated.View
        style={{flex: 1, height: '100%', transform: [{rotate: props.spin}]}}>
        <Image
          style={{
            position: 'absolute',
            left: 30,
            top: 30,
            zIndex: 2000,
          }}
          source={require('../assets/star1.png')}
        />
        <Image
          style={{
            position: 'absolute',
            right: 30,
            top: 30,
            zIndex: 2000,
          }}
          source={require('../assets/star2.png')}
        />
        <Image
          style={{
            position: 'absolute',
            left: 30,
            bottom: 30,
            zIndex: 2000,
          }}
          source={require('../assets/star3.png')}
        />
      </Animated.View>

      <FadeInView
        style={{flex: 1, alignItems: 'flex-start'}}
        fadeAnim={props.fadeAnim}>
        <Text numberOfLines={1} style={styles.title}>
          {props.aStore.type}
        </Text>
        <Text numberOfLines={1} style={styles.subTitle}>
          {props.aStore.price}$
        </Text>
      </FadeInView>
    </View>
  );
};

const FadeInView = props => {
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: props.fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  swiperContainer: {height: 250, backgroundColor: 'gray'},
  orderContainer: {flex: 1, backgroundColor: 'blue'},
  tray: {alignSelf: 'center', width: 200, height: 100},
  add: {position: 'absolute', right: 20, top: 20},
  title: {
    color: '#EB5C77',
    fontWeight: '600',
    fontSize: 32,
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 10,
  },
  subTitle: {
    color: '#EB5C77',
    fontWeight: '600',
    fontSize: 24,
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: 10,
  },
});

export default Card;
