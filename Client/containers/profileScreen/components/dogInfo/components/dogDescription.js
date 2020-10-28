import React, { PureComponent } from 'react';
import { View, TextInput } from 'react-native';
import { inject, observer } from 'mobx-react';
import styles from '../styles'
import { MedBoldText } from '../../../../styles/fonts';

@inject('storeProfileScreen')@observer
export class DogDescription extends PureComponent {
    onChaneText = text => {
        this.props.storeProfileScreen.setDogDescription(text)
    }
   
    render(){
        const { description } = this.props.storeProfileScreen;
        return(
            <View style={styles.viewHeight}>
                <MedBoldText>Description</MedBoldText>
                  <TextInput           
                            onEndEditing={(event) => this.onChaneText(event.nativeEvent.text)}
                            multiline
                            placeholder={description} 
                            placeholderTextColor={'black'} 
                            style={styles.textInput} />                
            </View>
        );
    }
}