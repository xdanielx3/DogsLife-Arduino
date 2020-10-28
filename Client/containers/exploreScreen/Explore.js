import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {View, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import DogsGarden from '../../components/DogsGarden';
import {consts} from '../../consts';

@inject('rootStore')
@observer
class Explore extends Component {
  constructor(props) {
    super(props);
    this.gardenRef = React.createRef();
    this.state = {gardens: [], displayedGarden: null, isSignedup: false};
  }

  signupPressed = () => {
    this.setState({isSignedup: true});
    this.props.navigation.navigate('Signup');
  };

  async componentDidMount() {
    await this.props.rootStore.getProfile();
    await fetch(`${consts.serverUrl}/getGardens`, {
      method: 'GET',
      headers: {'Content-type': 'application/json'},
    })
      .then(res => res.json())
      .then(data => {
        this.setState({gardens: data});
      })
      .catch(e => {
        console.log('Error in getGardens', e);
      });
  }

  mapGardens = () => {
    const gardens = this.state.gardens.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={{latitude: item.lat, longitude: item.long}}
          title={item.name}
          image={require('../../images/dogs_playground2.png')}
          onPress={() => this.onMarkerPress(item)}
        />
      );
    });
    return gardens;
  };

  onMarkerPress = garden => {
    this.setState({displayedGarden: garden}, () =>
      this.gardenRef.current.displayController(),
    );
  };

  render() {
    const {isRegistered} = this.props.rootStore;
    return (
      <View>
        {!isRegistered ? (
          <Button
            style={{position: 'absolute', top: 0}}
            color="#e5c68b"
            onPress={this.signupPressed}
            title="Please register - press here"
          />
        ) : null}
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{width: '100%', height: '100%'}}
          region={{
            latitude: 32.092064,
            longitude: 34.804049,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {this.mapGardens()}
        </MapView>
        {this.state.displayedGarden && (
          <DogsGarden
            navigation={this.props.navigation}
            ref={this.gardenRef}
            data={this.state.displayedGarden}
          />
        )}
      </View>
    );
  }
}

export default Explore;
