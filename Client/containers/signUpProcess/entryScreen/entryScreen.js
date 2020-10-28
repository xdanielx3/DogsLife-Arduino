import React, {Component} from 'react';
import { View} from 'react-native';
import styled from 'styled-components/native';
import { Title } from './components/title';
import { Note } from './components/note';
import { Insructions } from './components/instructions';
import { VerticalSpace } from '../../../components/verticalSpace';
import { ClockNote } from './components/clockNote';
import { ActionButtons } from './components/actionButtons';

export class SignupEntry extends Component {

  render() {
    return (
        <BaseView>
            <Title />
            <VerticalSpace height={20} />
            <Note />
            <VerticalSpace height={20} />
            <Insructions />
            <VerticalSpace height={25} />
            <ClockNote />
            <VerticalSpace height={30} />
            <ActionButtons navigation={this.props.navigation} />
        </BaseView>
    );
  }
}

const BaseView = styled(View)`
  display: flex;
  flex: 1;
  background-color: #e5c68b;
  align-items: center;
`;
