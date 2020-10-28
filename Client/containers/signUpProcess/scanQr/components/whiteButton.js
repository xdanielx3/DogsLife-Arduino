import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Button from 'react-native-button';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 4,
  },
  okButton: {
    backgroundColor: 'white',
  },
  okButtonText: {
    fontSize: width * 0.035,
    color: 'black',
  },
  signupAlready: {
    backgroundColor: '#f19737',
  }
});

export const WhiteButton = props => {
  return (
    <View>
       <Button
        onPress={props.onPress ? props.onPress : () => props.navigation.navigate(props.next, props.params)}
        disabledContainerStyle={{backgroundColor: 'grey'}}
        containerStyle={props.noCollar ? [styles.button, styles.signupAlready, props.style] : [styles.button, styles.okButton, props.style]}
        style={styles.okButtonText}>
        {props.text? props.text : 'Next'}
      </Button>
      </View>

  );
};
