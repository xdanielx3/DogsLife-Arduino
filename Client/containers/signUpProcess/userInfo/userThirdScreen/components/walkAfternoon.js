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
export class WalkAfternoon extends PureComponent {
  onSelect = () => {
    this.props.storeUserThirdScreen.setIsCheckedAfternoon();
  }

  onSelectType = () => {
    this.props.storeUserThirdScreen.setAfternoon(-1)
  }

  onSelectDuration = duration => {
    this.props.storeUserThirdScreen.setAfternoon(duration, -1)
  }


  render() {
    const { isCheckAfternoon, afternoon } = this.props.storeUserThirdScreen;
    return (
      <View style={styles.container}>
        <View style={styles.leftCheckbox}>
          <CheckBox
            uncheckedColor={'black'}
            checkedColor={'white'}
            title={'Afternoon'} // from props
            containerStyle={{
              padding: 0,
              backgroundColor: 'transparent',
              borderWidth: 0,
            }}
            checked={isCheckAfternoon}
            onPress={this.onSelect}
            textStyle={{fontSize: width * 0.035}}
          />
        </View>
          { isCheckAfternoon ? <Duration onSelect={this.onSelectDuration} />: null }
        { isCheckAfternoon ?<View>
          <CheckBox
            title="Walk"
            uncheckedColor={'black'}
            checkedColor={'white'}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={!afternoon.type} // from props ?
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
            checked={afternoon.type}
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
