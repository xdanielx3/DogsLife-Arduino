import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const WHITE = '#FFFFFF';
const DARK_GRAY = '#333333';

export default StyleSheet.create({
  containerCardItem: {
    width: SCREEN_WIDTH * 0.44,
    height: SCREEN_WIDTH * 0.4,
    backgroundColor: WHITE,
    borderRadius: 8,
    alignItems: 'center',
    margin: SCREEN_WIDTH * 0.02,
    justifyContent: 'center',
    elevation: 4
  },
  image: {
    width: SCREEN_WIDTH * 0.16,
    height: SCREEN_WIDTH * 0.16,
    borderRadius: SCREEN_WIDTH * 0.08,
  },
  textContainer: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: DARK_GRAY,
    fontSize: SCREEN_WIDTH * 0.045,
    fontWeight: 'bold',
  },
});
