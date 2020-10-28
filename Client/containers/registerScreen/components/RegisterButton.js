import React, {PureComponent} from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';
import {inject} from 'mobx-react';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  completeButton: {
    width: width * 0.45,
    aspectRatio: 4 / 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.38,
    alignSelf: 'center',
  },
  text: {
    fontSize: 0.045 * width,
    fontWeight: 'bold',
    color: '#333333',
  },
});

@inject('storeRegisterScreen')
export class RegisterButton extends PureComponent {
  onPress = async () => {
    await this.props.storeRegisterScreen.joinPressed(this.props.navigation);
  };

  render() {
    return (
      <TouchableOpacity style={styles.completeButton} onPress={this.onPress}>
        <Text style={styles.text}>REGISTER</Text>
      </TouchableOpacity>
    );
  }
}
