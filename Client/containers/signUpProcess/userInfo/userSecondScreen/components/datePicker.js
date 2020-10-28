import React, {PureComponent} from 'react';
import {inject, observer} from 'mobx-react';
import {View, Dimensions} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {WhiteButton} from '../../../components/whiteButton';

const width = Dimensions.get('window').width;

@observer
export class DatePicker extends PureComponent {
   showDatePicker = () => {
    this.props.store.setDatePickerVisible(true)
  };

   hideDatePicker = () => {
    this.props.store.setDatePickerVisible(false)
  };

   handleConfirm = date => {
     this.hideDatePicker();
      let yearsT = (new Date() - new Date(date)) / (1000 * 60 * 60 * 24 * 365.25)
      let month = (yearsT < 1 && yearsT > 0)  ? `${Math.floor(yearsT * 10)} month old` : null; 
      let years = yearsT < 0 ? null : `${Math.floor(yearsT)} years old`;
    this.props.store.setBirthdate(month || years, date);
  };

  render(){
    const { birthdate, isDatePickerVisible } = this.props.store;
    return (
      <View style={{ marginLeft: width*-0.36 }}>
      <WhiteButton
        text={birthdate ? birthdate : 'Select Date'}
        onPress={this.showDatePicker}
        />
      <DateTimePickerModal
        style={{backgroundColor: 'black'}}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={this.handleConfirm}
        onCancel={this.hideDatePicker}
        />
    </View>
  );
}
};

