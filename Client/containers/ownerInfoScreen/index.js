import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import styles from '../styles/ProfileStyle';
import {
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ArrowLeft} from '../../components/arrowLeft';
import {DogsList} from './components/dogsList';
import {StoreOwnerInfoScreen} from './store';
import {InfoSection} from './components/infoSection'
import { LoadingLady } from '../../components/LoadingLady';
import { SendAMesButton } from './components/sendAMesButton';

@inject('rootStore')
@observer
class OwnerInfoScreen extends Component {
  constructor(props) {
    super(props);
    this.storeOwnerInfoScreen = new StoreOwnerInfoScreen(props.rootStore);
  }
  async componentDidMount() {
    await this.storeOwnerInfoScreen.getOwnerDogs(this.props.navigation.state.params.owner.dogs)
    this.storeOwnerInfoScreen.setOwnerDetails(this.props.navigation.state.params.owner);    
  }
  render() {
    const { avatar, loading } = this.storeOwnerInfoScreen;
    return (
      <MobxProvider storeOwnerInfoScreen={this.storeOwnerInfoScreen}>
        {loading ? <LoadingLady /> : <ImageBackground
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
                    style={{marginLeft: 20, marginTop: 20}}
                    navigation={this.props.navigation}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <InfoSection />
            <SendAMesButton />
            <View style={styles.actionsProfile}>
              <DogsList />
            </View>
          </ScrollView>
        </ImageBackground>}
        </MobxProvider>

    );
  }
}
export default OwnerInfoScreen;
