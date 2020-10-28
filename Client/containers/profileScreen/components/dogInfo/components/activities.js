import React, {PureComponent} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import styles from '../../../../styles/ProfileStyle';
import {SmallText} from '../../../../styles/fonts';

export class Activities extends PureComponent {
  render() {
    return (
      <RowView>
        <TouchableOpacity style={styles.roundedButton}>
          <SmallText style={styles.textButton}>Feed</SmallText>
          <SmallText style={styles.textButton}>History</SmallText>
        </TouchableOpacity>
      </RowView>
    );
  }
}

const RowView = styled(View)`
  width: 90%;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
