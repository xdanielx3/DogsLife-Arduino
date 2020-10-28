import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';

import styles from '../styles/ProfileStyle';
import {
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ProfileItem from '../../components/ProfileItem';
import {ArrowLeft} from '../../components/arrowLeft';
import {OwnersList} from './components/ownerList';
import {StoreDogInfoScreen} from './store';

@inject('rootStore')
@observer
class DogInfoScreen extends Component {
  constructor(props) {
    super(props);
    this.storeDogInfoScreen = new StoreDogInfoScreen(props.rootStore);
  }
  componentDidMount() {
    this.storeDogInfoScreen.setOwners(
      this.props.navigation.state.params.dogAndOwnersInfo.ownersInfo,
    );
  }

  generateAgeFromDate = () => {
    const {
      age,
    } = this.props.navigation.state.params.dogAndOwnersInfo.dogInfo.physical_params;
    let yearsT = (new Date() - new Date(age)) / (1000 * 60 * 60 * 24 * 365.25);
    let month =
      yearsT < 1 && yearsT > 0 ? `${Math.floor(yearsT * 10)} month old` : null;
    let years = yearsT < 0 ? null : `${Math.floor(yearsT)} years old`;
    return month || years;
  };

  render() {
    const {
      name,
      description,
      avatar,
    } = this.props.navigation.state.params.dogAndOwnersInfo.dogInfo;
    const {
      breed,
      mixed,
      gender,
      spayed,
    } = this.props.navigation.state.params.dogAndOwnersInfo.dogInfo.physical_params;
    const {
      energy_level,
      playfullness,
      park_preference,
    } = this.props.navigation.state.params.dogAndOwnersInfo.dogInfo.character_params;
    return (
      <MobxProvider storeDogInfoScreen={this.storeDogInfoScreen}>
        <ImageBackground
          source={require('../../images/bg.png')}
          style={styles.bg}>
          <ScrollView style={styles.containerProfile}>
            <ImageBackground
              source={{
                uri: avatar,
              }}
              style={styles.photo}>
              <View style={styles.top}>
                <TouchableOpacity>
                  <ArrowLeft
                    style={{top: 20, left: 20}}
                    navigation={this.props.navigation}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <ProfileItem
              name={name}
              age={this.generateAgeFromDate()}
              breed={breed}
              mix={mixed}
              description={description}
              gender={gender}
              spayed={spayed}
              energyLevel={energy_level}
              playfullness={playfullness}
              parkPreference={park_preference}
            />
            <View style={styles.actionsProfile}>
              <OwnersList navigation={this.props.navigation}/>
            </View>
          </ScrollView>
        </ImageBackground>
      </MobxProvider>
    );
  }
}
export default DogInfoScreen;
