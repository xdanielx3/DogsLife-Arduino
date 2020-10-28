import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/DogsGardenStyle';
import PresentDog from './presentDog/PresentDog';
import Icon from 'react-native-vector-icons/AntDesign';
import {WhenGardenEmpty} from './whenGardenEmpty';
import {VerticalSpaceP} from './verticalSpace';
import {SmallText} from '../containers/styles/fonts';
import {consts} from '../consts';

export default class DogsGarden extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      screenOpacity: new Animated.Value(0),
      fetchedData: false,
      presentDogs: [],
      isPressedOtherRank: false,
    };
  }

  getPresentDogs = async () => {
    await fetch(`${consts.serverUrl}/getPresentDogsInGarden`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({gardenId: this.props.data.id}),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({presentDogs: data, fetchedData: true});
      })
      .catch();
  };

  displayComponent = () => {
    this.setState({isOpen: true}, () => {
      Animated.timing(this.state.screenOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start(() => this.getPresentDogs());
    });
  };

  hideComponent = () => {
    Animated.timing(this.state.screenOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => this.setState({isOpen: false, fetchedData: false}));
  };

  displayController = () => {
    if (this.state.isOpen) {
      this.hideComponent();
    } else {
      this.displayComponent();
    }
  };

  mapPresentDogs = () => {
    if (this.state.presentDogs.length === 0) return <WhenGardenEmpty />;

    const presentDogs = this.state.presentDogs.map((item, index) => {
      return (
        <PresentDog
          gardenId={this.props.data.id}
          visitedDogs={this.props.data.daily_visitors[0].dogs_visitors}
          key={index}
          data={item}
        />
      );
    });
    return presentDogs;
  };

  render() {
    const {name, image, rating} = this.props.data;
    const {cleanliness_score, facilities_score} = rating;
    const totalScore = (cleanliness_score + facilities_score) / 2;
    return (
      this.state.isOpen && (
        <Animated.View
          style={[styles.container, {opacity: this.state.screenOpacity}]}>
          <TouchableWithoutFeedback
            touchSoundDisabled={true}
            onPress={this.displayController}>
            <View style={styles.darkBackground} />
          </TouchableWithoutFeedback>
          <View style={styles.box}>
            <Image source={{uri: image}} style={styles.gardenImage} />
            <View style={styles.closeButton}>
              <TouchableOpacity onPress={this.displayController}>
                <Image
                  source={require('../images/close.png')}
                  style={styles.closeButtonImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.nameAndRank}>
              <View style={styles.titleSection}>
                <Text style={styles.title}>{name}</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 25,
                  }}
                  onPress={() =>
                    this.setState({
                      isPressedOtherRank: !this.state.isPressedOtherRank,
                    })
                  }>
                  <Text>{totalScore} </Text>
                  <Icon name="star" size={17} color="black" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  backgroundColor: '#e5c68b',
                  elevation: 2,
                  borderRadius: 10,
                }}
                onPress={() =>
                  this.props.navigation.navigate('Review', {
                    gardenName: name,
                    gardenId: this.props.data.id,
                  })
                }>
                <SmallText>Reviews</SmallText>
              </TouchableOpacity>
            </View>
            {this.state.isPressedOtherRank ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  alignItems: 'center',
                  paddingTop: 20,
                }}>
                <Text>Facilities: {facilities_score} </Text>
                <Icon name="star" size={15} color="black" />
                <Text> | cleanliness: {cleanliness_score} </Text>
                <Icon name="star" size={15} color="black" />
              </View>
            ) : null}
            {!this.state.fetchedData ? (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: 'white',
                }}>
                <VerticalSpaceP height={0.14} />
                <Image
                  source={require('../images/gifi.gif')}
                  style={{width: 265, height: 150, alignSelf: 'center'}}
                />
              </View>
            ) : (
              <ScrollView style={styles.presentDogsSection}>
                {this.state.fetchedData && this.mapPresentDogs()}
                <View style={styles.bottomPadding} />
              </ScrollView>
            )}
          </View>
        </Animated.View>
      )
    );
  }
}
