import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {CheckBox} from 'react-native-elements';
import{BreedPicker} from '../../../userInfo/components/pickers'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    top: height * 0.03,
    width: width * 0.87,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftCheckbox: {
    width: width * 0.3,
  },
});

@inject('storeDogSecondScreen')
@observer
export class Breed extends PureComponent {
  render(){
    const { isMix } = this.props.storeDogSecondScreen;
    return (
      <View style={styles.container}>
      <BreedPicker store={this.props.storeDogSecondScreen} />
      <View style={styles.leftCheckbox}>
      <CheckBox
        uncheckedColor={'black'}
        checkedColor={'white'}
        title={`Mix`} 
        containerStyle={{
          padding: 0,
          backgroundColor: 'transparent',
          borderWidth: 0,
        }}
        checked={isMix}
        textStyle={{ fontSize: width * 0.045}}
        onPress={() => this.props.storeDogSecondScreen.setIsMix()}

        />
      </View>
    </View>
  );
}
};

