import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {MedBoldText} from '../../../styles/fonts';

class CharacterCard extends Component {
  navigateToDogProfile = () => {
    this.props.navigation.navigate('DogInfo', {
      dogAndOwnersInfo: this.props.data,
    });
  };

  render() {
    const {owner, dog, grade} = this.props.match;
    console.log("CharacterCard -> render -> {owner, dog, grade}", {owner, dog, grade})

    return (
      <TouchableOpacity
        style={styles.container}
        >
        <View>
          <View style={styles.nameAndAvatar}>
            <Image source={{uri: owner.avatar}} style={styles.avatar} />
            <MedBoldText>{owner.name}</MedBoldText>
          </View>
          <View style={styles.nameAndAvatar}>
            <Image source={{uri: dog.avatar}} style={styles.avatar} />
            <MedBoldText>{dog.name}</MedBoldText>
          </View>
        </View>

        <View style={styles.gradeSection}>
          <MedBoldText>{grade}%</MedBoldText>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(CharacterCard);

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '50%',
    height: '30%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginTop: 5,
    elevation: 1,
    borderRadius: 10,
  },
  nameAndAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1
  },
  avatar: {
    borderRadius: width * 7.5,
    height: width * 0.15,
    width: width * 0.15,
    margin: width * 0.025,
  },
  gradeSection: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 0.03 * width,
    borderWidth: 1,
  },
});
