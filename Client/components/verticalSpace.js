import React from 'react';
import {View, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;


export const VerticalSpace = props => <View style={{height: props.height}} />;

export const VerticalSpaceP = props => <View style={{height: props.height* height}} />;

