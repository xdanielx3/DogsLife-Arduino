import React from 'react';
import styles from './styles/ProfileItemStyle';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Bolt from 'react-native-vector-icons/FontAwesome';
import IconGender from 'react-native-vector-icons/Ionicons';
import { BigBoldText } from '../containers/styles/fonts';




const ProfileItem = ({
  name,
  age,
  breed,
  mix,
  description,
  gender,
  spayed,
  playfullness,
  parkPreference,
}) => {
  return (
    <View style={styles.containerProfileItem}>
      <BigBoldText style={styles.name}>{name}</BigBoldText>
      <Text style={styles.descriptionProfileItem}>
        {age}
      </Text>
      <View style={styles.info}>
      <View style={styles.iconView}>
        <Icon name="dog" size={20} color="black" style={styles.iconStyle} />
        </View>        
        <Text style={styles.infoContent}>{breed}  </Text>
        {mix ? <Text>Mix</Text> : null}
      </View>

      <View style={styles.info}>
        <View style={styles.iconView}>
      <Icon name="info" size={20} color="black" style={styles.iconStyle} />
        </View>
        <Text style={styles.infoContent}>{description}</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.iconView}>
        {gender == 1 ? (
          <IconGender
          name="md-male"
          size={20}
          color={'black'}
          style={styles.iconStyle}
        />
      ) : (
        <IconGender
        name="md-female"
        size={20}
        color={'black'}
        style={styles.iconStyle}
      />
      )}
        </View>
        <Text style={styles.infoContent}>{gender == 1 ? `Male` : `Female`}</Text>
        {spayed ? <Text style={styles.infoContent}>spayed</Text> : <Text style={styles.infoContent}>not spayed</Text>}
      </View>

      <View style={styles.info}>
        <View style={styles.iconView}>
      <Bolt name="bolt" size={20} color="black" style={styles.iconStyle} />
        </View>
        <Text style={styles.infoContent}>{playfullness ? `Playful` : `Inactive`}</Text>
      </View>

      {parkPreference !=3 ? <View style={styles.info}>
        <View style={styles.iconView}>
      <Bolt name="tree" size={20} color="black" style={styles.iconStyle} />
        </View>
        <Text style={styles.infoContent}>{parkPreference==1 ? `Prefer Crowded park` : `Prefer not crowded park`}</Text>
      </View>: null}
    </View>

    
  );
};

export default ProfileItem;
