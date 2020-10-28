import React, { PureComponent } from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {inject, observer} from 'mobx-react';
import {CheckBox} from 'react-native-elements';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    top: height * 0.015,
    width: width*0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: width*0.14

  },
});

@inject('storeDogThirdScreen')
@observer
export class PlayerOrCalm extends PureComponent {
  setPlayer = () => {
    this.props.storeDogThirdScreen.setPlayer()
  }
  render() {
    const { player }  = this.props.storeDogThirdScreen
    return (
      <View style={styles.container}>
        <CheckBox
          title="Player"
          uncheckedColor={'black'}
          checkedColor={'white'}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={player}
          containerStyle={{
            padding: 0,
            backgroundColor: 'transparent',
            borderWidth: 0,
            
          }}
          textStyle={{ fontSize: width * 0.035}}
          onPress={this.setPlayer}

          />
        <CheckBox
          title="Calm"
          uncheckedColor={'black'}
          checkedColor={'white'}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={!player}
          containerStyle={{
            padding: 0,
            backgroundColor: 'transparent',
            borderWidth: 0,            
          }}
          textStyle={{ fontSize: width * 0.035}}
          onPress={this.setPlayer}
          />
      </View>
  );
};
}

