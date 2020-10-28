import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {View, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from '../../../../styles/ProfileStyle';
import {AddDogPlusButton} from './addDogPlusButton';

@inject('storeProfileScreen')
@observer
export class DogsList extends Component {
  constructor(props) {
    super(props);
  }

  onPressAddDog = () => {
    console.log('onPress add dog');
  };

  onPressChangeDog = () => {
    // send all updates to server when dog changes
    console.log('onPress change dog');
  };

  render() {
    const {userDogs, selectedDog} = this.props.storeProfileScreen;
    return (
      <View style={styles.dogListContainer}>
        <FlatList
          style={styles.dogListContainer}
          horizontal
          data={userDogs.slice()}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={
            <AddDogPlusButton onPress={this.onPressAddDog} />
          }
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                this.props.storeProfileScreen.setSelectedDog(item);
              }}>
              {selectedDog.id !== item.id ? (
                <Image
                  style={styles.dogListImage}
                  source={{
                    uri: item.avatar,
                  }}
                />
              ) : (
                <Image
                  style={styles.greenBorder}
                  source={{
                    uri: item.avatar,
                  }}
                />
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
