import React, {PureComponent} from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  completeButton: {
    width: width * 0.45,
    aspectRatio: 4 / 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.38,
    margin: width * 0.030,
    alignSelf: 'center',
  },
  text: {
    fontSize: 0.045 * width,
    fontWeight: 'bold',
    color: 'white',
  },
});

export class JoinButton extends PureComponent {
  onPress = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <TouchableOpacity style={styles.completeButton} onPress={this.onPress}>
        <Text style={styles.text}>JOIN</Text>
      </TouchableOpacity>
    );
  }
}
