import React, {PureComponent} from 'react';
import {inject, observer} from 'mobx-react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PhotoUpload from 'react-native-photo-upload';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
      height: width * 0.5,
      flexDirection: 'row',
      width: width * 0.87,
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
  imageStyle: {
    width: width * 0.55,
    height: width * 0.55,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1,
    opacity: 0.8,
  },
});

@inject('storeUserFirstScreen')
@observer
export class UploadImageArea extends PureComponent {
  onChangeAvatar = text => {
    this.props.storeUserFirstScreen.setAvatar(text);
  };

  onChangeGender = gender => {
    this.props.storeUserFirstScreen.setGender(gender);
  };
  render() {
    const {avatar, gender} = this.props.storeUserFirstScreen;
    return (
      <View
        style={styles.container}>
        <TouchableOpacity onPress={() => this.onChangeGender(false)}>
          <Icon
            name="md-male"
            size={35}
            color={gender == false ? 'white' : 'black'}
          />
        </TouchableOpacity>
        <PhotoUpload
          containerStyle={{width: width * 0.55}}
          onPhotoSelect={avatar => {
            if (avatar) {
              this.onChangeAvatar(avatar);
            }
          }}>
          <Image
            style={styles.imageStyle}
            resizeMode="cover"
            source={avatar ? { uri: avatar} : require('../../../../../images/faces.png')}
          />
          <ImageBackground
            source={require('../../../../../images/upload_icon.png')}
            style={styles.uploadIcon}
          />
        </PhotoUpload>
        <TouchableOpacity onPress={() => this.onChangeGender(true)}>
          <Icon
            name="md-female"
            size={35}
            color={gender == true ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
