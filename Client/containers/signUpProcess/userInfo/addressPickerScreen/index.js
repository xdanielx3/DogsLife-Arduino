import React, { PureComponent } from 'react';
import { inject } from 'mobx-react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {getLangAndLat} from './routes'
import {consts } from '../../../../consts'
 
@inject('rootStore')
class SelectLocationScreen extends PureComponent {
  replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }
  render(){ 

    return (
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={async (data, details = true) => {
        try{
        let { description } = data;
        let addressWithNoSpaces = '';
        for(let i=0; i< description.length; i++){
          if(description[i] == ' ') {
            addressWithNoSpaces = addressWithNoSpaces + '+'
          }
          else {
            addressWithNoSpaces = addressWithNoSpaces + description[i];
          }
        }
          const {code , extra } = await getLangAndLat(addressWithNoSpaces)
          if(code == 1) {
            const { lat, lng } = extra;
            this.props.navigation.navigate('UserSecond', { address:data.description, lat, lng })
          }
          if(code == 0) console.log("error fetch address coords");
        }
        catch (err) {
          console.log(`SelectLocationScreen ${err}`);
        }
        
      }}
      query={{
        key: consts.googleKey,
        language: 'en',
        components: 'country:il',
      }}
      />
      );
    }
};
 
export default SelectLocationScreen;