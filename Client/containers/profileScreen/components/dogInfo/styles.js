import {StyleSheet, Dimensions} from 'react-native';
import {SmallText} from '../../../styles/fonts';
const ICON_FONT = 'tinderclone';
const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  textInput: {
    minHeight: DIMENSION_HEIGHT * 0.07,
    fontSize: DIMENSION_HEIGHT * 0.021,
  },
  viewHeight: {
    width: '85%',
    paddingVertical: 8,
    minHeight: DIMENSION_HEIGHT * 0.12,
    textAlign: 'left',
  },
  verticalCenterText: {
    paddingLeft: 5,
    textAlignVertical: 'center',
  },
  rowViewSpaceBetween: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    height: DIMENSION_HEIGHT * 0.035,
    width: DIMENSION_HEIGHT * 0.035,
  },
  dogIcon: {
    height: DIMENSION_HEIGHT * 0.05,
    width: DIMENSION_HEIGHT * 0.055,
    marginBottom: 15,
  },
});
