import React from 'react';
import styled from 'styled-components/native';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import {NoDogsBigQuestionText} from '../containers/styles/fonts'
import { VerticalSpaceP } from './verticalSpace';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const WhenGardenEmpty = () => (
    <BaseView>
        <VerticalSpaceP height={0.1} />
         <Image source={require('../images/3dogs.png')} style={styles.dogsImage} />
         <VerticalSpaceP height={0.04} />
         <NoDogsBigQuestionText>There are no dogs at the park. </NoDogsBigQuestionText>
    </BaseView>
);

const BaseView = styled(View)`
    align-items: center;
    `;

    const styles = StyleSheet.create({
        dogsImage: {
            width: width * 0.7,
            height: height * 0.2,
            opacity: 0.5
        }
      });
