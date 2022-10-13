import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Dimensions, Animated} from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';

const windowWidth = Dimensions.get('window').width;

export default class Caurosel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      end: true,
      offset: 0.0,
      quotient: 0,
    };
    length = this.state.data.length;
    data = this.state.data.slice();
  }

  checkScroll({layoutMeasurement, contentOffset, contentSize}) {
    this.props.fadeAnim.setValue(0);
    this.props.spinValue.setValue(0);
    var quot = Math.floor(contentOffset.x / layoutMeasurement.width);
    // console.log('quotient :::::' + quot);
    this.props.onSwipe(quot, layoutMeasurement, contentOffset, contentSize);

    if (quot !== this.state.quotient) {
      this.setState({quotient: quot});
    }
    var remainder = contentOffset.x % layoutMeasurement.width;

    this.setState({offset: remainder / layoutMeasurement.width});

    if (this.state.data.length >= length * 3) {
      this.setState(prevState => ({
        data: prevState.data.slice(length * 2),
      }));
    }

    if (contentOffset.x <= this.props.offset) {
      this.setState(
        prevState => ({
          data: [...prevState.data, ...data],
        }),
        () => this.infListRef.scrollToIndex({index: length, animated: false}),
      );
    }
    if (
      layoutMeasurement.width + contentOffset.x >=
        contentSize.width - this.props.offset &&
      this.state.end
    ) {
      // console.log('endddd');
      this.setState(prevState => ({
        data: [...prevState.data, ...data],
        end: false,
      }));
    } else {
      // console.log('vifjviivji:::' + contentOffset.x);

      this.setState({
        end: true,
      });
    }
  }
  componentDidMount() {
    this.setState(prevState => ({
      data: [...prevState.data, ...prevState.data],
    }));
    // setTimeout(() => { this.infListRef.scrollToIndex({ animated: true, index: length }) }, 500);
  }

  fadeAnimation() {
    Animated.timing(this.props.fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(this.props.spinValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  render() {
    return (
      <View style={styles.listItem}>
        <FlatList
          {...this.props}
          ref={ref => {
            this.infListRef = ref;
          }}
          data={this.state.data}
          keyExtractor={(item, index) => JSON.stringify(index)}
          horizontal={true}
          pagingEnabled
          renderItem={({item}) => (
            <Card
              aStore={item}
              fadeAnim={this.props.fadeAnim}
              spinValue={this.props.spinValue}
              spin={this.props.spin}
            />
          )}
          onScroll={({nativeEvent}) => this.checkScroll(nativeEvent)}
          onMomentumScrollEnd={({nativeEvent}) => {
            this.fadeAnimation();
          }}
          showsVerticalScrollIndicator={this.props.showsVerticalScrollIndicator}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    width: windowWidth,
    height: 160,
  },
  Item: {
    flexDirection: 'column',
    marginTop: 0,
    paddingLeft: windowWidth * 0.6,
  },
});

Caurosel.propTypes = {
  offset: PropTypes.number,
  showsVerticalScrollIndicator: PropTypes.bool,
};

Caurosel.defaultProps = {
  offset: 3,
  showsVerticalScrollIndicator: false,
};
