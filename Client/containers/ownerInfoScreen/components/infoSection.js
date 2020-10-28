import React, {PureComponent} from 'react';
import {inject, observer} from 'mobx-react';
import {Text, View} from 'react-native';
import styles from '../../../components/styles/ProfileItemStyle';
import {BigBoldText, MedBoldText} from '../../../containers/styles/fonts';
import { VerticalSpaceP } from '../../../components/verticalSpace';

@inject('storeOwnerInfoScreen')
@observer
export class InfoSection extends PureComponent {
  render() {
      const { name, age, hangoutsString, hobbiesString } = this.props.storeOwnerInfoScreen;
    return (
      <View style={styles.containerProfileItem}>
        <BigBoldText style={styles.name}>{name}</BigBoldText>
        <Text style={styles.descriptionProfileItem}>{age}</Text>
        <View style={styles.infoColumn}>
        <MedBoldText style={styles.infoContentOwner}>My Hobbies</MedBoldText>
        <VerticalSpaceP height={0.015} />
          <Text style={styles.infoContent}>{hobbiesString} </Text>
        </View>
        <View style={styles.infoColumn}>
            <MedBoldText style={styles.infoContentOwner}>Favorite places to hang out with my dog</MedBoldText>
            <VerticalSpaceP height={0.015} />
          <Text style={styles.infoContent}>{hangoutsString}</Text>
        </View>
      </View>
    );
  }
}
