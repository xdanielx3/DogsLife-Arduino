import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {View} from 'react-native';
import {MedQuestionText, BigBoldText, BigText} from '../../../styles/fonts';
import styled from 'styled-components/native';
import {VerticalSpaceP} from '../../../../components/verticalSpace';
import {TextInputWithF} from '../../../../components/textInputWithF';
import {Header} from './components/header';
import StarRating from 'react-native-star-rating';
import {WhiteButton} from '../../../signUpProcess/components/whiteButton';
import {StoreWriteReviewScreen} from './store';

@inject('rootStore')
@observer
export class WriteReview extends Component {
  constructor(props) {
    super(props);
    this.storeWriteReviewScreen = new StoreWriteReviewScreen(props.rootStore);
  }

  onStarRatingCleanlinessPress = rating => {
    this.storeWriteReviewScreen.setCleanliness(rating);
  };

  onStarRatingFacilitiesPress = rating => {
    this.storeWriteReviewScreen.setFacilities(rating);
  };

  onChangeText = text => {
    this.storeWriteReviewScreen.setReviewText(text);
  };

  onPressSendReview = () => {
    this.storeWriteReviewScreen.sendReviewPressed(this.props.navigation.state.params.gardenId);
    this.props.navigation.goBack();
  };

  render() {
    const {
      starCountFacilities,
      starCountCleanliness,
    } = this.storeWriteReviewScreen;
    return (
      <MobxProvider storeWriteReviewScreen={this.storeWriteReviewScreen}>
        <BaseView>
          <Header navigation={this.props.navigation} />
          <VerticalSpaceP height={0.04} />
          <MedQuestionText>Write a review</MedQuestionText>
          <BigText>{this.props.navigation.state.params.gardenName}</BigText>
          <VerticalSpaceP height={0.03} />
          <View style={{width: '85%'}}>
            <BigBoldText>Cleanliness</BigBoldText>
          </View>
          <VerticalSpaceP height={0.03} />
          <StarRating
            disabled={false}
            maxStars={5}
            rating={starCountCleanliness}
            selectedStar={this.onStarRatingCleanlinessPress}
          />
          <VerticalSpaceP height={0.04} />
          <View style={{width: '85%'}}>
            <BigBoldText>Facilities</BigBoldText>
          </View>
          <VerticalSpaceP height={0.03} />
          <StarRating
            disabled={false}
            maxStars={5}
            rating={starCountFacilities}
            selectedStar={this.onStarRatingFacilitiesPress}
          />
          <VerticalSpaceP height={0.05} />
          <TextInputWithF
            maxLength={40}
            bigger={5}
            placeholder={'Write a review...'}
            onChange={this.onChangeText}
          />
          <VerticalSpaceP height={0.03} />
          <View style={{width: '85%'}}>
            <WhiteButton
              text={'Send Review'}
              onPress={this.onPressSendReview}
            />
          </View>
        </BaseView>
      </MobxProvider>
    );
  }
}

const BaseView = styled(View)`
  display: flex;
  flex: 1;
  background-color: #b0d6d5;
  align-items: center;
`;
