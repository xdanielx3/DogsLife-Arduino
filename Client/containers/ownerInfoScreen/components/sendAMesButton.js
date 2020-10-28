import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Button from 'react-native-button';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    alignItems: 'center',
    alignSelf: 'center',
  },

  button: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 4,
    width: width * 0.9
  },
  okButton: {
    backgroundColor: '#80b918',
  },
  okButtonText: {
    fontSize: width * 0.035,
    color: 'black',
  }
});

export const SendAMesButton = props => {
  return (
    <View style={styles.container}>
      <Button
        onPress={null}
        disabledContainerStyle={{backgroundColor: 'grey'}}
        containerStyle={[styles.button, styles.okButton]}
        style={styles.okButtonText}>
        {'Send a message'}
      </Button>
      </View>

  );
};
