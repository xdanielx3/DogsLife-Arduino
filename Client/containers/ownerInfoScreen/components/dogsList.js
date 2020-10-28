import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { ErrorInList } from './errorList';

const DIMENSION_WIDTH = Dimensions.get('window').width;

@inject('storeOwnerInfoScreen')
@observer
export class DogsList extends Component {
  render() {
    const {dogsArray,matchId} = this.props.storeOwnerInfoScreen;
    return (
      <View style={styles.ownersListContainer}>
        <FlatList
          contentContainerStyle={styles.ownersContainer}
          horizontal
          data={dogsArray.slice()}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<ErrorInList store={this.props.storeOwnerInfoScreen} />}
          renderItem={({item}) => (
                <Image
                  style={styles.ownersListImage}
                  source={{
                    uri: item.avatar,
                  }}
                />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ownersContainer: {
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  ownersListContainer: {
    width: DIMENSION_WIDTH * 0.97,
    height: DIMENSION_WIDTH * 0.31,
    justifyContent: 'center',
  },
  ownersListImage: {
    borderRadius: 50,
    borderWidth: 2,
    height: DIMENSION_WIDTH * 0.2,
    width: DIMENSION_WIDTH * 0.2,
    marginRight: 5,
  },
  greenBorder: {
    borderRadius: 50,
    borderWidth: 2,
    height: DIMENSION_WIDTH * 0.2,
    width: DIMENSION_WIDTH * 0.2,
    marginRight: 5,
    borderColor: 'green',
  },
});
