import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import {observer} from 'mobx-react';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  text: {
    fontSize: 0.04 * width,
    color: '#b50029',
    alignSelf: 'center',
  },
});

@observer
export class ErrorMsg extends Component {
  render() {
    const {height, store} = this.props;
    const {errorMsg} = store;
    return (
      <View style={{height: height}}>
        <Text style={styles.text}>{errorMsg}</Text>
      </View>
    );
  }
}
