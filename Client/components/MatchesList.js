import React, {Component} from 'react';
import styles from './styles/MatchesListStyle';
import {View, ScrollView, StyleSheet, Dimensions, Image} from 'react-native';
import CardItem from './CardItem';
import {VerticalSpaceP} from '../components/verticalSpace';
import {NoDogsBigQuestionText} from '../containers/styles/fonts';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class MatchesList extends Component {
  mapMatches = () => {
    const matches = this.props.matches.map((item, index) => {
      return <CardItem key={index} match={item} type={this.props.type} />;
    });
    return matches;
  };

  render() {
    const matchesList = this.mapMatches();
    return (
      <ScrollView style={styles.list}>
        <View style={styles.matchesContainer}>
          {matchesList.length > 0 ? (
            matchesList
          ) : (
            <View style={styles2.center}>
              <VerticalSpaceP height={0.1} />
              <Image
                source={require('../images/3dogs.png')}
                style={styles2.dogsImage}
              />
              <VerticalSpaceP height={0.04} />
              <View style={styles2.textView}>
                <NoDogsBigQuestionText>
                  There is no matches for you right now.
                </NoDogsBigQuestionText>
              </View>
            </View>
          )}
        </View>
        <View style={styles.bottomPadding} />
      </ScrollView>
    );
  }
}

const styles2 = StyleSheet.create({
  flexView: {
    width: '100%',
    flex: 1,
  },
  center: {
    alignItems: 'center',
  },
  dogsImage: {
    width: width * 0.7,
    height: height * 0.2,
    opacity: 0.7,
  },
  textView: {
    width: '85%',
    textAlign: 'center',
  },
});
