import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

const DIMENSION_WIDTH = Dimensions.get('window').width;

@inject('storeDogInfoScreen')
@observer
export class OwnersList extends Component {
  constructor(props) {
    super(props);
  }

  onPressOwnerIcon(owner) {
    this.props.navigation.navigate('OwnerInfo', {owner})
  };

  render() {
    const {ownersArray,matchId} = this.props.storeDogInfoScreen;
    return (
      <View style={styles.ownersListContainer}>
        <FlatList
          contentContainerStyle={styles.ownersContainer}
          horizontal
          data={ownersArray.slice()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={()=>this.onPressOwnerIcon(item)}>
              {item.id == matchId ? (
                <Image
                  style={styles.greenBorder}
                  source={{
                    uri: item.avatar,
                  }}
                />
              ) : (
                <Image
                  style={styles.ownersListImage}
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
