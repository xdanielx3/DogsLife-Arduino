/**
 * @format
 */
import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import {AppRegistry} from 'react-native';
import { YellowBox } from 'react-native'
import App from './App';
import {name as appName} from './app.json';
import rootStore from './provider/rootStore';

class Application extends Component {
    render() {
      return (
        <Provider rootStore={rootStore}>
            <App />
        </Provider>
      )
    }
  }


AppRegistry.registerComponent(appName, () => Application);


YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
  'componentWillReceiveProps has been renamed, and is not recommended for use.',
  'Picker has been extracted from react-native core and will be removed in a future release.'
])