import React, {Component} from 'react';
import styles from './styles/CardItemStyle';
import {Text, View, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {MedBoldText} from '../containers/styles/fonts'
import { VerticalSpaceP } from './verticalSpace';
export default class CardItem extends Component {
  render() {
    switch (this.props.type) {
      case 1:
        return this.matches();
      case 2:
        return this.geoMatches();
      case 3:
        return this.collarMatches();
    }
  }

  matches = () => {
    return (
      <TouchableOpacity
        style={styles2.container}
        >
        <View style={styles2.bothNamesSection}>
          <View style={styles2.nameAndAvatar}>
            <Image source={{uri:this.props.match.owner.avatar}} style={styles2.avatar} />
            <MedBoldText>{this.props.match.owner.name}</MedBoldText>
          </View>
          <View style={styles2.nameAndAvatar}>
            <Image source={{uri:this.props.match.dog.avatar}} style={styles2.avatar} />
            <MedBoldText>{this.props.match.dog.name}</MedBoldText>
          </View>
        </View>

        <View style={styles2.gradeSection}>
          <MedBoldText style={styles2.textStyle}>{this.props.match.grade}%</MedBoldText>
          <MedBoldText>Match</MedBoldText>
        </View>
      </TouchableOpacity>
    );
  };

  geoMatches = () => {
    return (
      <TouchableOpacity style={styles.containerCardItem}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={{uri: this.props.match.owner.avatar}}
            style={styles.image}
          />
          <VerticalSpaceP height={0.01} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.match.owner.name}</Text>
          </View>
        </View>
        <View>
          <Text>{this.props.match.distance}km away</Text>
        </View>
      </TouchableOpacity>
    );
  };

  collarMatches = () => {
    return (
      <TouchableOpacity style={styles.containerCardItem}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={{uri: this.props.match.avatar}} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.match.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  }


  const width = Dimensions.get('window').width;

const styles2 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '91%',
    height: '24%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginVertical: 5,
    elevation: 4,
    borderRadius: 10,
  },
  nameAndAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bothNamesSection: {
    // width: '70%',
  },
  avatar: {
    borderRadius: width * 7.5,
    height: width * 0.15,
    width: width * 0.15,
    margin: width * 0.025,
  },
  gradeSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 0.03 * width,
    borderWidth: 1,
  },
  textStyle: {
    color: '#e5c68b'
  }
});
