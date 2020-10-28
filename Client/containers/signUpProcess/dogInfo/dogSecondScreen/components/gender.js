import React, { PureComponent } from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {inject, observer} from 'mobx-react';



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
export class Gender extends PureComponent {
  render(){
    const { gender, isSpayed }  = this.props.storeDogSecondScreen
    return (
      <View style={styles.container}>
      <View>
        <CheckBox
          title="Female"
          uncheckedColor={'black'}
          checkedColor={'white'}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={gender == 2 ? true : false}
          containerStyle={{
            padding: 0,
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          textStyle={{ fontSize: width * 0.045}}
          onPress={() => this.props.storeDogSecondScreen.setGender(2)}

          />
        <CheckBox
          title="Male"
          uncheckedColor={'black'}
          checkedColor={'white'}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={gender == 1 ? true : false}
          containerStyle={{
            padding: 0,
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          textStyle={{ fontSize: width * 0.045}}
          onPress={() => this.props.storeDogSecondScreen.setGender(1)}
          />
      </View>
      <View style={styles.leftCheckbox}>
      <CheckBox
        uncheckedColor={'black'}
        checkedColor={'white'}
        title={`Spayed`}
        containerStyle={{
          padding: 0,
          backgroundColor: 'transparent',
          borderWidth: 0,
        }}
        checked={isSpayed}
        textStyle={{ fontSize: width * 0.04}}
        onPress={() => this.props.storeDogSecondScreen.setIsSpayed()}
        />
      </View>
    </View>
  )
}  
}

