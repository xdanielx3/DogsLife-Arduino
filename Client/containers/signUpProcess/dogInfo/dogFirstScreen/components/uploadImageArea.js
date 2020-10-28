import React, {PureComponent} from 'react';
import { observer, inject } from 'mobx-react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import PhotoUpload from 'react-native-photo-upload';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.09,
    justifyContent: 'center',
    backgroundColor: '#413943',
    elevation: 8,
    alignItems: 'center',
  },
  text1: {
    color: 'white',
  },
  uploadIcon: {
    position: 'absolute',
    bottom: -5,
    right: -10,
    width: width * 0.13,
    height: width * 0.13,
  },
});

@inject('storeDogFirstScreen')
@observer
export class UploadImageArea extends PureComponent {
  avatarSelected = string => {
    this.props.storeDogFirstScreen.setAvatar(string);
  }
  render(){
    const { avatar } = this.props.storeDogFirstScreen;
  return (
    <View
      style={{
        height: width * 0.5,
        flexDirection: 'row',
        width: width * 0.87,
        alignItems: 'center',
      }}>
      <PhotoUpload
        containerStyle={{width: width * 0.55}}
        onPhotoSelect={avatarPicked => {
          if (avatarPicked) {
            this.avatarSelected(avatarPicked);
          }
        }}>
        <Image
          style={{
            width: width * 0.55,
            height: width * 0.55,
            borderRadius: 100,
            borderColor: 'black',
            borderWidth: 1,
            opacity: 0.8,
          }}
          resizeMode="cover"
          source={ avatar || require('../../../../../images/corgi2.png')
          }
        />
        <ImageBackground
          source={require('../../../../../images/upload_icon.png')}
          style={styles.uploadIcon}
        />
      </PhotoUpload>
    </View>
  )
}
}
