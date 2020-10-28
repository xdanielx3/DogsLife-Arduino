import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { VerticalSpace } from './verticalSpace';


export const Divider = () => {
    return (
        <ViewLine />
    )
}

const ViewLine = styled(View)`
    height: 1px;
    backgroundColor: #ebeded;
    width: 90%; 
`;



