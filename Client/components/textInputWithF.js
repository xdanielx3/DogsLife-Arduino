import React, {PureComponent} from 'react';
import {StyleSheet, TextInput, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export class TextInputWithF extends PureComponent {

  render() {
    return (
      <TextInput
      maxLength={this.props.maxLength}
        numberOfLines={this.props.bigger}
        secureTextEntry={this.props.secureTextEntry}
        style={[styles.textInput, this.props.s]}
        onChangeText={text => this.props.onChange(text)}
        placeholder={this.props.placeholder}
        value={this.props.value}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: width * 0.88,
    fontSize: width * 0.04,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
    elevation: 2,

  },
});
