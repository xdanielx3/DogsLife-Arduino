import React, {PureComponent} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {CheckBox} from 'react-native-elements';
import { observer, inject } from 'mobx-react';
import {Duration} from '../../components/pickers';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    top: height * 0.03,
    width: width * 0.97,
    height: height * 0.13,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftCheckbox: {
    width: width * 0.3,
  },
});

@inject('storeUserThirdScreen')
@observer
export class WalkMorning extends PureComponent {
  onSelect = () => {
    this.props.storeUserThirdScreen.setIsCheckedMorning();
  }

  onSelectType = () => {
    this.props.storeUserThirdScreen.setMorning(-1)
  }

  onSelectDuration = duration => {
    this.props.storeUserThirdScreen.setMorning(duration, -1)
  }


  render() {
    const { isCheckMorning, morning } = this.props.storeUserThirdScreen;
    return (
      <View style={styles.container}>
        <View style={styles.leftCheckbox}>
          <CheckBox
            uncheckedColor={'black'}
            checkedColor={'white'}
            title={'Morning'} // from props
            containerStyle={{
              padding: 0,
              backgroundColor: 'transparent',
              borderWidth: 0,
            }}
            checked={isCheckMorning}
            onPress={this.onSelect}
            textStyle={{fontSize: width * 0.035}}
          />
        </View>
          { isCheckMorning ? <Duration onSelect={this.onSelectDuration} />: null }
        { isCheckMorning ?<View>
          <CheckBox
            title="Walk"
            uncheckedColor={'black'}
            checkedColor={'white'}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={!morning.type} // from props ?
            containerStyle={{
              padding: 0,
              backgroundColor: 'transparent',
              borderWidth: 0,
            }}
            onPress={this.onSelectType}
            textStyle={{fontSize: width * 0.035}}
          />
          <CheckBox
            title="Run"
            uncheckedColor={'black'}
            checkedColor={'white'}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={morning.type}
            containerStyle={{
              padding: 0,
              backgroundColor: 'transparent',
              borderWidth: 0,
            }}
            textStyle={{fontSize: width * 0.035}}
            onPress={this.onSelectType}
          />
        </View> : null}
      </View>
    );
  }
}
