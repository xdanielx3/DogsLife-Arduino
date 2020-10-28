import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, ActivityIndicator} from 'react-native';
import {observer} from 'mobx-react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

@observer
export class Loading extends Component {
  render() {
    const {store} = this.props;
    if (store.loading) {
      return (
        <View style={styles.bg}>
          <ActivityIndicator size="large" style={styles.activity} />
        </View>
      );
    } else {
      return <View />;
    }
  }
}

const styles = StyleSheet.create({
  bg: {
    width: width,
    height: height,
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  activity: {
    top: height * 0.45,
  },
});
