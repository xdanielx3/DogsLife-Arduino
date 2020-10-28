import React, {PureComponent} from 'react';
import {View, TextInput} from 'react-native';
import {inject, observer} from 'mobx-react';
import styles from '../styles';
import {MedBoldText} from '../../../../styles/fonts';
import {Divider} from '../../../../../components/divider';

@inject('storeProfileScreen')
@observer
export class DogName extends PureComponent {
  onChaneText = text => {
    this.props.storeProfileScreen.setDogName(text);
  };
  render() {
    const {name, dogId} = this.props.storeProfileScreen;
    return (
      <View style={{textAlign: 'left', width: '85%'}}>
        <View style={styles.viewHeight}>
          <MedBoldText>Name</MedBoldText>
          <TextInput
            onEndEditing={event => this.onChaneText(event.nativeEvent.text)}
            placeholderTextColor={'black'}
            placeholder={name}
            style={styles.textInput}
          />
        </View>
        <Divider />
        <View style={styles.viewHeight}>
          <MedBoldText>Dog ID</MedBoldText>
          <TextInput
            placeholderTextColor={'black'}
            placeholder={String(dogId)}
            style={styles.textInput}
            editable={false}
          />
        </View>
      </View>
    );
  }
}
