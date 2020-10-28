import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {SmallText} from '../../../containers/styles/fonts';
import Icon from 'react-native-vector-icons/Ionicons';


const width = Dimensions.get('window').width;

function getEnergy(energy) {
  switch (energy) {
    case 1:
      return 'Low';
    case 2:
      return 'Medium';
    case 3:
      return 'High';
  }
}

function getLeftTime(firstScan, avgTime) {
  let nowDate = new Date();
  const firstScanDate = new Date(firstScan);
  let minutesSinceFirstScan = (nowDate - firstScanDate) / 1000 / 60;
  if (minutesSinceFirstScan < 1 && minutesSinceFirstScan > 0) return 1;
  if (minutesSinceFirstScan < avgTime)
    return Math.floor(avgTime - minutesSinceFirstScan);
  else return 0;
}

export const Gender = props => {
  return (
    <View style={styles.iconStyle}>
      {props.gender == 1 ? (
          <Icon
          name="md-male"
          size={20}
          color={'black'}
        />
      ) : (
        <Icon
        name="md-female"
        size={20}
        color={'black'}
      />
      )}
    </View>
  );
};

export const DogDetails = props => {
  return (
    <View style={styles.container}>
      <View style={styles.paramContainer}>
        <Image
          source={require('../../../images/energy.png')}
          style={styles.icon}
        />
        <SmallText>{getEnergy(props.energy)}</SmallText>
      </View>
      {getLeftTime(props.dogDetailsInGarden ? props.dogDetailsInGarden.first_scan : 0 , props.avgTime ? props.avgTime : 0 ) ? (
        <View style={styles.paramContainer}>
          <Image
            source={require('../../../images/counterclockwise.png')}
            style={styles.icon}
          />
          <SmallText>{`${getLeftTime(props.dogDetailsInGarden ? props.dogDetailsInGarden.first_scan : 0, props.avgTime ? props.avgTime : 0)} Min`}</SmallText>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: width * 0.4,
    height: width * 0.2,
  },
  paramContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: (width * 0.6) / 2.7,
    alignItems: 'center',
  },
  paramContainerGender: {
    flexDirection: 'row',
    width: (width * 0.6) / 7,
    justifyContent: 'center',
  },
  iconFemale: {
    borderWidth: 1,
    width: width * 0.052,
    height: width * 0.052,
  },
  icon: {
    borderWidth: 1,
    width: width * 0.048,
    height: width * 0.048,
  },
  iconStyle: {
    marginLeft: 11,
  },
});
