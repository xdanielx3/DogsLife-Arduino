import React, {Component} from 'react';
import {StyleSheet, Dimensions,View, Text} from 'react-native';
import {observer} from 'mobx-react';


@observer
export class ErrorInList extends Component {
  render() {
    const {errorMsg} = this.props.store;
    return (
        <View style={styles.rapView}>
        <Text style={styles.text}>{errorMsg}</Text>
        </View>
    );
  }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const styles = StyleSheet.create({
    rapView: {
        width: width * 0.8,
        height : height *0.1,
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
    },
    text: {
        fontSize: 0.045 * width,
        fontWeight: 'bold',
        color: 'black',
    textAlign:'center'
  },
});
