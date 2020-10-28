import React, {PureComponent} from 'react';
import { inject, observer } from 'mobx-react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {CheckBox} from 'react-native-elements';

const width = Dimensions.get('window').width;

@inject('storeUserSecondScreen')
@observer
export class CheckBoxes extends PureComponent {
  render() {
    const { storeUserSecondScreen } = this.props;
    const { hangouts } = storeUserSecondScreen;
    const slicedHangouts = hangouts.slice();
    return(

      <View style={styles.row}>
      <View>
        <CheckBox
          uncheckedColor={'black'}
          checkedColor={'white'}
          title="Beach"
          containerStyle={{
            padding: 0,
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          textStyle={{fontSize: width * 0.045}}
          checked={slicedHangouts[0]}
          onPress={() => storeUserSecondScreen.setHangouts(0, !slicedHangouts[0])}
          />
        <CheckBox
          uncheckedColor={'black'}
          checkedColor={'white'}
          title="Hiking"
          containerStyle={{
            padding: 0,
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          checked={true}
          textStyle={{fontSize: width * 0.045}}
          checked={slicedHangouts[1]}
          onPress={() => storeUserSecondScreen.setHangouts(1, !slicedHangouts[1])}
          />
      </View>
      <View>
        <CheckBox
          uncheckedColor={'black'}
          checkedColor={'white'}
          title="Parks"
          containerStyle={{
            padding: 0,
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          checked={true}
          textStyle={{fontSize: width * 0.045}}
          checked={slicedHangouts[2]}
          onPress={() => storeUserSecondScreen.setHangouts(2, !slicedHangouts[2])}
          />
        <CheckBox
          uncheckedColor={'black'}
          checkedColor={'white'}
          title="Visit friends"
          containerStyle={{
            padding: 0,
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          textStyle={{fontSize: width * 0.045}}
          checked={slicedHangouts[3]}
          onPress={() => storeUserSecondScreen.setHangouts(3, !slicedHangouts[3])}
          />
      </View>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  row: {
    width: width * 0.87,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
