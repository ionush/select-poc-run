import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity
} from 'react-native';

const ANIMATION_DURATION = 250;

class ListRow extends Component {
  constructor(props) {
    super(props);

    this.state = { ROW_HEIGHT: undefined };
    this.ROW_HEIGHT = undefined;

    this._animated = new Animated.Value(1);
    this._animated2 = new Animated.Value(1);
  }

  onRemove = () => {
    const { onRemove } = this.props;
    if (onRemove) {
      Animated.sequence([
        Animated.timing(this._animated2, {
          toValue: 0,
          duration: 1000
        }),
        Animated.timing(this._animated, {
          toValue: 0,
          duration: ANIMATION_DURATION
        })
      ]).start(() => onRemove());
    }
  };

  render() {
    const { text } = this.props;
    const rowStyles = [
      styles.row,
      {
        height: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: [0, this.ROW_HEIGHT],
          extrapolate: 'clamp'
        })
      },
      { opacity: this._animated },
      {
        transform: [
          { scale: this._animated },
          {
            rotate: this._animated.interpolate({
              inputRange: [0, 1],
              outputRange: ['35deg', '0deg'],
              extrapolate: 'clamp'
            })
          }
        ]
      }
    ];

    const textStyle = [
      styles.email,
      {
        opacity: this._animated2.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        })
      }
    ];

    return (
      <TouchableOpacity
        onLayout={event => {
          const { x, y, width, height } = event.nativeEvent.layout;
          // if (this.ROW_HEIGHT) return;
          // this.ROW_HEIGHT = height;
        }}
        onPress={this.onRemove}
      >
        <Animated.View style={rowStyles}>
          <View
            style={{
              backgroundColor: 'rgb(244, 241, 239)',
              padding: 5,
              borderRadius: 10
            }}
          >
            <Animated.Text style={textStyle}>{text}</Animated.Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: '92%'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  name: {
    fontSize: 18,
    fontWeight: '500'
  },
  email: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 14,
    flexGrow: 1,
    padding: 10
  }
});

export default ListRow;
