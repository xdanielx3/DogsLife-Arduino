import React from 'react';
import { inject, observer } from 'mobx-react';
import {Slider as OuterSlider} from 'react-native-elements';
import {View, Text} from 'react-native';
import {Question} from '../../../components/qustion';
import {VerticalSpaceP} from '../../../../../components/verticalSpace';

@inject('storeUserSecondScreen')
@observer
export class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: 200};
  }

  setRadius = value => {
    this.props.storeUserSecondScreen.setRadiusInMeters(value);
  }

  render() {
    const { radiusInMeters } = this.props.storeUserSecondScreen;
    return (
      <View
        style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <View style={{ flexDirection: 'row', justifyContent:'space-between', width: '87%', alignItems: 'center' }}>
        <Question text={`What is your dog walk raduis?`} />
        <Text>{radiusInMeters} m</Text>
            </View>
        <VerticalSpaceP height={0.02} />
        <OuterSlider
          style={{width: '87%'}}
          value={radiusInMeters}
          onValueChange={this.setRadius}
          minimumValue={0}
          maximumValue={2000}
          step={100}
          thumbTintColor={'white'}
        />
      </View>
    );
  }
}
