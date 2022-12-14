import React, {useRef, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import images from '../assets';
import Caurosel from '../components/Caurosel';
import {Context1} from '../../App';
import {store} from '../data/data';

// import Icon from 'prcore/src/prcomponents/Icon';
const windowWidth = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  const context = useContext(Context1);
  const moveAnimation = new Animated.ValueXY({x: 200, y: -100});
  const moveAnimationFries = new Animated.ValueXY({x: 200, y: -100});
  const moveAnimationBurger = new Animated.ValueXY({x: 200, y: -100});
  const spinValue = useRef(new Animated.Value(0)).current;
  const offsetValueP = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '60deg'],
  });
  const offsetP = Animated.timing(offsetValueP, {
    toValue: 300,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  const {totalAmount, itemValue, selectedValue} = context;
  const moveItemsToTray = () => {
    Animated.spring(
      Number(totalAmount) === 6
        ? moveAnimationBurger
        : Number(totalAmount) === 3
        ? moveAnimation
        : moveAnimationFries,
      {
        toValue: {
          x:
            Number(totalAmount) === 6
              ? -120
              : Number(totalAmount) === 3
              ? -90
              : -40,
          y:
            Number(totalAmount) === 6
              ? 120
              : Number(totalAmount) === 3
              ? 70
              : 110,
        },
        useNativeDriver: false,
      },
    ).start();
    setTimeout(() => {
      context.setTotalAmount(Number(totalAmount) + Number(itemValue));
    }, 500);
  };
  const resetCart = () => {
    setTimeout(() => {
      context.setTotalAmount(0);
    }, 500);
  };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onSwipe = (
    // eslint-disable-next-line @typescript-eslint/no-shadow
    onSwipe: string | number,
    layoutMeasurement: any,
    contentOffset: any,
    contentSize: any,
  ) => {
    console.log('obj.price' + layoutMeasurement + contentOffset + contentSize);
    var remainder = contentOffset.x % layoutMeasurement.width;
    var obj: any;
    var swipeV = onSwipe;
    if (onSwipe < 3) {
      obj = store[onSwipe];
      // console.log('onSwipe<3' + onSwipe);
    } else {
      const value = onSwipe === 3 ? 0 : onSwipe === 4 ? 1 : 2;
      // console.log('onSwipeeee' + onSwipe);
      obj = store[value];
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      swipeV = value;
    }
    setTimeout(() => {
      // if (remainder ! == 0 && remainder !== null) {
      context.setSelectedValue(remainder);
      // }
    }, 10);
    setTimeout(() => {
      console.log('obj.priceeeee' + remainder);

      context.setAmount(obj.price);
      console.log('obj.priceeeee' + remainder);

      console.log('obj.ttttttttt' + selectedValue);

      // alert(obj.price);
    }, 500);
  };

  return (
    <View style={styles.container}>
      {/* <Icon name="close" size={40} onPress={{}} primaryColor="red" /> */}
      <Image
        resizeMode="cover"
        source={images.topbar}
        style={{height: 60, width: '100%', marginTop: 20}}
      />
      <View style={styles.swiperContainer}>
        <Caurosel
          data={store}
          fadeAnim={fadeAnim}
          spinValue={spinValue}
          spin={spin}
          offsetValueP={offsetValueP}
          offsetP={offsetP}
          onSwipe={(
            quotient: any,
            layoutMeasurement: any,
            contentOffset: any,
            contentSize: any,
          ) => onSwipe(quotient, layoutMeasurement, contentOffset, contentSize)}
        />
      </View>
      <Image
        resizeMode="contain"
        source={require('../assets/tray.png')}
        style={{width: windowWidth / 1.5, alignSelf: 'center'}}
      />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'column',
          width: windowWidth,
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <View style={{flexDirection: 'row', width: windowWidth, padding: 20}}>
          <Image
            resizeMode="contain"
            source={require('../assets/Location.png')}
            style={{flex: 1}}
          />
          <Text style={{flex: 3}} numberOfLines={2}>
            Dongcheng District Metro Cultural Building
          </Text>
          <Image
            style={{flex: 1}}
            resizeMode="contain"
            source={require('../assets/Call.png')}
          />
          {/* <Icon
            name="close"
            size={40}
            onPress={() => resetCart()}
            primaryColor="red"
          /> */}
        </View>
      </View>

      <TouchableOpacity style={styles.add} onPress={() => moveItemsToTray()}>
        <Image source={images.add} height="80" />
      </TouchableOpacity>
      <Animated.View style={[styles.tennisBall, moveAnimation.getLayout()]}>
        <Image source={require('../assets/coke.png')} />
      </Animated.View>
      <Animated.View
        style={[styles.tennisBall, moveAnimationFries.getLayout()]}>
        <Image source={require('../assets/image.png')} />
      </Animated.View>
      <Animated.View
        style={[styles.tennisBall, moveAnimationBurger.getLayout()]}>
        <Image source={require('../assets/burger.png')} />
      </Animated.View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          alignContent: 'center',
          flexDirection: 'row',
          width: windowWidth,
          height: 60,
          marginLeft: 20,
          alignItems: 'flex-end',
        }}>
        <Text
          style={{color: '#4F4F4F', fontSize: 43.8519, fontWeight: '600'}}
          numberOfLines={1}>
          {itemValue ? itemValue : 0}
        </Text>
        <Text
          style={{color: '#4F4F4F', fontSize: 23.8519, fontWeight: '300'}}
          numberOfLines={1}>
          $
        </Text>
        <TouchableOpacity
          style={styles.pay}
          onPress={() => navigation.navigate('Payment')}>
          <Image source={images.pay} height="80" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  swiperContainer: {height: 250},
  orderContainer: {flex: 1},
  tray: {alignSelf: 'center', width: 200, height: 100},
  add: {position: 'absolute', right: 20, top: 240, zIndex: 400},
  pay: {position: 'absolute', right: 60, top: 0, width: 80, height: 60},
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
  tennisBall: {
    position: 'absolute',
    marginLeft: 200,
    marginTop: 200,
  },
});
