import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../styles/PresentDogStyle';
import {VerticalSpace} from '../verticalSpace';
import {DogDetails, Gender} from './functions/getDogItemStyle';
import {MedBoldText} from '../../containers/styles/fonts';

class PresentDog extends Component {
  findDogDetailsInGarden = () => {
    const {visitedDogs} = this.props;
    console.log("PresentDog -> findDogDetailsInGarden -> visitedDogs", visitedDogs)
    const dogFound = visitedDogs.find(dog => dog.dog_id == this.props.data.dogInfo.id);
    return dogFound;
  };

  getDogGardenDetails = () => {
    const {gardenId} = this.props;
    const thisGarden = this.props.data.dogInfo.visited_gardens.find(
      garden => garden.garden_id == gardenId,
    );
    if (thisGarden.avg_play_time > 0) {
      return thisGarden.avg_play_time;
    }
    else return null;
  };

  navigateToDogProfile = () => {
    this.props.navigation.navigate('DogInfo', {dogAndOwnersInfo :this.props.data})
  }

  render() {
    const {avatar, name} = this.props.data.dogInfo;
    const {gender} = this.props.data.dogInfo.physical_params;
    const {energy_level} = this.props.data.dogInfo.character_params;
    return (
      <TouchableOpacity style={styles.container} onPress={this.navigateToDogProfile}>
        <View style={styles.imageSection}>
          <Image source={{uri: avatar}} style={styles.avatar} />
        </View>
        <View style={styles.section}>
          <MedBoldText>{name}</MedBoldText>
          <Gender gender={gender} />
        </View>
        <VerticalSpace height={4} />
        <DogDetails
          dogDetailsInGarden={this.findDogDetailsInGarden()}
          avgTime={this.getDogGardenDetails()}
          energy={energy_level}
        />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(PresentDog);
