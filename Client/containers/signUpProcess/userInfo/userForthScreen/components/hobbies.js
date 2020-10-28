import React, {useState, PureComponent} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {BigBoldText, MedBoldText} from '../../../../styles/fonts';
import {observer} from 'mobx-react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  boxContainer: {
    display: 'flex',
    width: (width * 0.85) / 3,
    height: (height * 0.5) / 3.1,
    alignItems: 'center',
    justifyContent: 'center',
    //   borderColor: 'black',
    //   borderWidth: 1,
  },
  iconContainer: {
    borderColor: 'transparent',
    borderWidth: 1,
    padding: 1,
  },
  pressedBoxContainer: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 1,
  },
  iconSize: {
    width: (width * 0.85) / 4,
    height: (width * 0.85) / 4,
    borderWidth: 1,
  },
});

@observer
export class Sport extends PureComponent {
  iconPressed = () => {
    this.props.store.setHobbies(0, !this.props.store.hobbies[0]);
  };
  render() {
    return (
      <TouchableOpacity style={styles.boxContainer} onPress={this.iconPressed}>
        <View
          style={
            this.props.store.hobbies[0]
              ? styles.pressedBoxContainer
              : styles.iconContainer
          }>
          <Image
            source={require('../../../../../images/hoobies_icons/sport.png')}
            style={styles.iconSize}
          />
        </View>
        <MedBoldText>Sport</MedBoldText>
      </TouchableOpacity>
    );
  }
}

@observer
export class Handout extends PureComponent {
  iconPressed = () => {
    this.props.store.setHobbies(1, !this.props.store.hobbies[1]);
  };
  render() {
    return (
      <TouchableOpacity style={styles.boxContainer} onPress={this.iconPressed}>
        <View
          style={
            this.props.store.hobbies[1]
              ? styles.pressedBoxContainer
              : styles.iconContainer
          }>
      <Image
        source={require('../../../../../images/hoobies_icons/hangout.png')}
        style={styles.iconSize}
      />
    </View>
    <MedBoldText>Handout</MedBoldText>
      </TouchableOpacity>
    );
  }
}

@observer
export class Gaming extends PureComponent {
  iconPressed = () => {
    this.props.store.setHobbies(2, !this.props.store.hobbies[2]);
  };
  render() {
    return (
      <TouchableOpacity style={styles.boxContainer} onPress={this.iconPressed}>
        <View
          style={
            this.props.store.hobbies[2]
              ? styles.pressedBoxContainer
              : styles.iconContainer
          }>
      <Image
        source={require('../../../../../images/hoobies_icons/gaming.png')}
        style={styles.iconSize}
      />
    </View>
    <MedBoldText>Gaming</MedBoldText>
      </TouchableOpacity>
    );
  }
}

@observer
export class Learning extends PureComponent {
  iconPressed = () => {
    this.props.store.setHobbies(3, !this.props.store.hobbies[3]);
  };
  render() {
    return (
      <TouchableOpacity style={styles.boxContainer} onPress={this.iconPressed}>
        <View
          style={
            this.props.store.hobbies[3]
              ? styles.pressedBoxContainer
              : styles.iconContainer
          }>
      <Image
        source={require('../../../../../images/hoobies_icons/learning.png')}
        style={styles.iconSize}
      />
    </View>
    <MedBoldText>Learning</MedBoldText>
      </TouchableOpacity>
    );
  }
}

@observer
export class Nature extends PureComponent {
  iconPressed = () => {
    this.props.store.setHobbies(4, !this.props.store.hobbies[4]);
  };
  render() {
    return (
      <TouchableOpacity style={styles.boxContainer} onPress={this.iconPressed}>
        <View
          style={
            this.props.store.hobbies[4]
              ? styles.pressedBoxContainer
              : styles.iconContainer
          }>
      <Image
        source={require('../../../../../images/hoobies_icons/nature.png')}
        style={styles.iconSize}
      />
    </View>
    <MedBoldText>Nature</MedBoldText>
      </TouchableOpacity>
    );
  }
}

@observer
export class Music extends PureComponent {
  iconPressed = () => {
    this.props.store.setHobbies(5, !this.props.store.hobbies[5]);
  };
  render() {
    return (
      <TouchableOpacity style={styles.boxContainer} onPress={this.iconPressed}>
        <View
          style={
            this.props.store.hobbies[5]
              ? styles.pressedBoxContainer
              : styles.iconContainer
          }>
      <Image
        source={require('../../../../../images/hoobies_icons/music.png')}
        style={styles.iconSize}
      />
    </View>
    <MedBoldText>Music</MedBoldText>
      </TouchableOpacity>
    );
  }
}

@observer
export class Art extends PureComponent {
  iconPressed = () => {
    this.props.store.setHobbies(6, !this.props.store.hobbies[6]);
  };
  render() {
    return (
      <TouchableOpacity style={styles.boxContainer} onPress={this.iconPressed}>
        <View
          style={
            this.props.store.hobbies[6]
              ? styles.pressedBoxContainer
              : styles.iconContainer
          }>
      <Image
        source={require('../../../../../images/hoobies_icons/art.png')}
        style={styles.iconSize}
      />
    </View>
    <MedBoldText>Art</MedBoldText>
      </TouchableOpacity>
    );
  }
}

@observer
export class Games extends PureComponent {
  iconPressed = () => {
    this.props.store.setHobbies(7, !this.props.store.hobbies[7]);
  };
  render() {
    return (
      <TouchableOpacity style={styles.boxContainer} onPress={this.iconPressed}>
        <View
          style={
            this.props.store.hobbies[7]
              ? styles.pressedBoxContainer
              : styles.iconContainer
          }>
      <Image
        source={require('../../../../../images/hoobies_icons/games.png')}
        style={styles.iconSize}
      />
    </View>
    <MedBoldText>Games</MedBoldText>
      </TouchableOpacity>
    );
  }
}

@observer
export class Cooking extends PureComponent {
  iconPressed = () => {
    this.props.store.setHobbies(8, !this.props.store.hobbies[8]);
  };
  render() {
    return (
      <TouchableOpacity style={styles.boxContainer} onPress={this.iconPressed}>
        <View
          style={
            this.props.store.hobbies[8]
              ? styles.pressedBoxContainer
              : styles.iconContainer
          }>
      <Image
        source={require('../../../../../images/hoobies_icons/cooking.png')}
        style={styles.iconSize}
      />
    </View>
    <MedBoldText>Cooking</MedBoldText>
      </TouchableOpacity>
    );
  }
}
