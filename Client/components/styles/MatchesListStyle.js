import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  list: {
    paddingTop: 10,
    minWidth: SCREEN_WIDTH,
    backgroundColor: 'ghostwhite',
    minHeight: SCREEN_HEIGHT - SCREEN_WIDTH / 7 - 105,
  },
  
  matchesContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomPadding: {
    width: SCREEN_WIDTH,
    height: 50
    
  },
});
