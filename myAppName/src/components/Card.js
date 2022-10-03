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
  // const moveAnimation = new Animated.ValueXY({x: 300, y: -100});
  // const moveAnimationFries = new Animated.ValueXY({x: 200, y: -100});
  // const moveAnimationBurger = new Animated.ValueXY({x: 200, y: -100});
  const context = useContext(Context1);
  const {totalAmount, itemValue, selectedValue} = context;
  console.log('selectedValue::::::::::;' + selectedValue);
  // const pan = useRef(new Animated.ValueXY()).current;
  // const panResponder = useRef(
  //   PanResponder.create({
  //     onMoveShouldSetPanResponder: () => true,
  //     onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
  //     onPanResponderRelease: () => {
  //       Animated.spring(moveAnimationBurger, {
  //         toValue: {x: -120, y: 120},
  //         useNativeDriver: false,
  //       }).start();
  //       Animated.spring(moveAnimation, {
  //         toValue: {x: -90, y: 70},
  //         useNativeDriver: false,
  //       }).start();
  //       Animated.spring(moveAnimationFries, {
  //         toValue: {x: -40, y: 110},
  //         useNativeDriver: false,
  //       }).start();
  //     },
  //   }),
  // ).current;

  return (
    <View style={{height: 200, width: windowWidth}}>
      <Image
        style={{
          position: 'absolute',
          marginLeft: 175,
          marginTop: 60,
          zIndex: 2000,
        }}
        source={require('../assets/star1.png')}
      />
      <Image
        style={{
          position: 'absolute',
          marginLeft: 175,
          marginTop: 200,
          zIndex: 2000,
        }}
        source={require('../assets/star2.png')}
      />
      <Image
        style={{
          position: 'absolute',
          marginLeft: 20,
          marginTop: 150,
          zIndex: 2000,
        }}
        source={require('../assets/star3.png')}
      />

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

      <FadeInView fadeAnim={props.fadeAnim}>
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
  useEffect(() => {
    Animated.timing(props.fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  }, [props.fadeAnim, props.index]);

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
