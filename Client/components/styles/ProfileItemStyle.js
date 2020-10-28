import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

const PRIMARY_COLOR = '#7444C0';
const WHITE = '#FFFFFF';
const GRAY = '#757E90';
const DARK_GRAY = '#333333';
const BLACK = '#000000';
const ICON_FONT = 'tinderclone';

export default StyleSheet.create({
  containerProfileItem: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    paddingBottom: 25,
    margin: 20,
    borderRadius: 8,
    marginTop: -65,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: {height: 0, width: 0},
  },
  matchesTextProfileItem: {
    fontFamily: ICON_FONT,
    color: WHITE,
  },
  name: {
    paddingTop: 25,
    paddingBottom: 5,
    color: DARK_GRAY,
    textAlign: 'center',
  },
  descriptionProfileItem: {
    color: GRAY,
    textAlign: 'center',
    paddingBottom: 20,
    fontSize: 13,
  },
  info: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8
  },
  infoColumn: {
    paddingVertical: 8,
    justifyContent: 'center',
    paddingLeft: 8
  },
  iconProfile: {
    fontFamily: ICON_FONT,
    fontSize: 12,
    color: DARK_GRAY,
    paddingHorizontal: 10,
  },
  infoContent: {
    color: GRAY,
    fontSize: 13,
    marginLeft: 15,
    // borderWidth: 1
  },
  infoContentOwner: {
    color: BLACK,
    marginLeft: 15,
    // borderWidth: 1
  },
  iconView: {
        // borderWidth: 1,
        width: width *0.08,
        justifyContent: 'center',
        alignItems: 'center'
  },
  iconStyle: {
    padding: 5
  }
});
