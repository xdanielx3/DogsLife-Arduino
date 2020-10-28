import React, {PureComponent} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {inject, observer} from 'mobx-react';
import {CheckBox} from 'react-native-elements';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    top: height * 0.015,
    width: width * 0.95,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftCheckbox: {
    width: width * 0.3,
  },
});

@inject('storeDogThirdScreen')
@observer
export class ParkPreference extends PureComponent {
  render() {
    const {parkPre} = this.props.storeDogThirdScreen;
    return (
      <View style={styles.container}>
        <CheckBox
          title="Crowded"
          uncheckedColor={'black'}
          checkedColor={'white'}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={parkPre == 1} 
          containerStyle={{
            padding: 0,
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          textStyle={{fontSize: width * 0.035}}
          onPress={() => this.props.storeDogThirdScreen.setParkPreference(1)}
        />
        <CheckBox
          title="Not crowded"
          uncheckedColor={'black'}
          checkedColor={'white'}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={parkPre == 2}
          containerStyle={{
            padding: 0,
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          textStyle={{fontSize: width * 0.035}}
          onPress={() => this.props.storeDogThirdScreen.setParkPreference(2)}
        />
        <CheckBox
          title="Both"
          uncheckedColor={'black'}
          checkedColor={'white'}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={parkPre == 3}
          containerStyle={{
            padding: 0,
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          textStyle={{fontSize: width * 0.035}}
          onPress={() => this.props.storeDogThirdScreen.setParkPreference(3)}
        />
      </View>
    );
  }
}
