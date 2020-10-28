import React, {Component} from 'react';
import {View, Animated, StyleSheet, Image, Dimensions} from 'react-native';
import Navigation from './navigation/Navigation';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  bg: {
    height: '100%',
    width: '100%',
    backgroundColor: '#e8cbba',
    alignItems: 'center',
  },
  pugContainer: {
    top: width * 0.45,
    height: width * 0.35,
    position: 'absolute',
    alignItems: 'center',
  },
  pug: {
    resizeMode: 'contain',
    height: '100%',
  },
  dogslifeContainer: {
    top: width * 0.75,
    height: width * 0.18,
    position: 'absolute',
    alignItems: 'center',
  },
  dogslife: {
    resizeMode: 'contain',
    height: '100%',
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starting: false,
      screenOpacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.screenOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.screenOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(this.state.screenOpacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => this.setState({starting: false}));
      });
    });
  }

  render() {
    if (this.state.starting === true) {
      return (
        <Animated.View style={[styles.bg, {opacity: this.state.screenOpacity}]}>
          <View style={styles.pugContainer}>
            <Image source={require('./images/Pug.png')} style={styles.pug} />
          </View>
          <View style={styles.dogslifeContainer}>
            <Image
              source={require('./images/dogslife.png')}
              style={styles.dogslife}
            />
          </View>
        </Animated.View>
      );
    } else {
      return <Navigation />;
    }
  }
}
