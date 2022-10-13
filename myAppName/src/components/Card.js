import React, {useContext} from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
// import {Context1} from '../../App';
import {starArray} from '../data/data';

const windowWidth = Dimensions.get('window').width;

const Card = props => {
  // const context = useContext(Context1);
  // const {selectedValue} = context;
  // console.log('selectedValue::::::::::;' + selectedValue);

  const marginMoveAnim = new Animated.ValueXY({x: 0, y: 5});
  const marginMoveP = Animated.timing(marginMoveAnim, {
    toValue: -10,
    duration: 500,
    useNativeDriver: false,
  }).start();
  const starAnimation = () => {

    return (
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1, height: '100%', transform: [{rotate: props.spin}]}}>
        {starArray.map(object => {
          return (
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                // position: 'absolute',
                left: Number(object.x),
                top: Number(object.y),
                zIndex: 2000,
              }}
              source={object.value}
            />
          );
        })}
      </Animated.View>
    );
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', height: 200, width: windowWidth}}>
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: 'absolute',
          zIndex: props.aStore.type === 'LATTE' ? 99 : 0,
        }}
        source={props.aStore.images[0]}
      />
      <Animated.View style={[marginMoveAnim.getLayout()]}>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
            zIndex: props.aStore.type === 'LATTE' ? 100 : 0,
          }}
          source={props.aStore.images[1]}
        />
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',

          }}
          source={props.aStore.images[2]}
        />
      </Animated.View>

      {starAnimation()}
      <FadeInView
        // eslint-disable-next-line react-native/no-inline-styles
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
  starAttr: {
    position: 'absolute',
    left: 30,
    top: 30,
    zIndex: 2000,
  },
});

export default Card;
