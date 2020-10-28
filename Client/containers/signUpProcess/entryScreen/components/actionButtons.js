import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Button from 'react-native-button';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: height*0.04

  },

  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 4,
  },
  cancelButton: {
    backgroundColor: 'black',
  },
  cancelButtonText: {
    fontSize: width * 0.035,
    color: 'white',
  },
  okButton: {
    backgroundColor: 'white',
  },
  okButtonText: {
    fontSize: width * 0.035,
    color: 'black',
  },
});

export const ActionButtons = props => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => props.navigation.goBack()}
        disabledContainerStyle={{backgroundColor: 'grey'}}
        containerStyle={[styles.button, styles.cancelButton]}
        style={styles.cancelButtonText}>
        Cancel
      </Button>
      <Button
        onPress={() => props.navigation.navigate('UserFirst')}
        containerStyle={[styles.button, styles.okButton]}
        style={styles.okButtonText}>
        Let's start!
      </Button>
    </View>
  );
};
