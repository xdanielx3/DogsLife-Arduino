import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

export const Base = props => (
    <BaseView color={props.color}>
        {props.children}
    </BaseView>
);

const BaseView = styled(View)`
    align-items: center;
    background-color: ${props => props.color};
`;

