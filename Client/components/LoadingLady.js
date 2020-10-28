import React from 'react';
import styles from '../containers/styles/ProfileStyle';
import {
  ImageBackground,
  Image
} from 'react-native';

export const LoadingLady = () => {
    return (
        <ImageBackground
          source={require('../images/bgWhite.png')}
          style={styles.bg}>
                  <Image
                    source={require('../images/gifi.gif')}
                    style={{width: 265, height: 150, alignSelf: 'center'}}
                  />
        </ImageBackground>
    );
}