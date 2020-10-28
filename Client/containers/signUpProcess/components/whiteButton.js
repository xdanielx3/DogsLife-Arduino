import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Button from 'react-native-button';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row-reverse',
  },

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
    <View style={[styles.container, props.containerStyle]}>
      {!props.isShowDone ? <Button
        onPress={props.onPress ? props.onPress : () => props.navigation.navigate(props.next, props.params)}
        disabledContainerStyle={{backgroundColor: 'grey'}}
        containerStyle={[styles.button, styles.okButton, props.style]}
        style={styles.okButtonText}>
        {props.text? props.text : 'Next'}
      </Button> : null}
        {props.dogInSystem ? <Button
        onPress={() => props.navigation.navigate('ScanCollar', {...props.params, dogInSystem:true})}
        disabledContainerStyle={{backgroundColor: 'grey'}}
        containerStyle={[styles.button, styles.okButton, props.style, styles.signupAlready]}
        style={styles.okButtonText}>
        {props.text? props.text : 'Dog signup already'}
      </Button> : null}
      {props.noCollarNeed ? <Button
        onPress={props.onPressNoCollar}
        disabledContainerStyle={{backgroundColor: 'grey'}}
        containerStyle={[styles.button, styles.okButton, props.style, styles.signupAlready]}
        style={styles.okButtonText}>
        {`I don't have a collar `}
      </Button> : null}
      </View>

  );
};
