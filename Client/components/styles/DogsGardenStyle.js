import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
 
  },
  darkBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.4,
  },
  box: {
    width: '90%',
    height: '84%',
    left: '5%',
    top: '8%',
    position: 'absolute',
    backgroundColor: 'white',
  },
  gardenImage: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,

    width: '100%',
    height: '30%',
  },
  closeButton: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
  closeButtonImage: {
    maxWidth: width * 0.08,
    maxHeight: width * 0.08,
  },
  nameAndRank: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    top: 8,
    paddingRight: 20,
    paddingBottom: 8


    },
  titleSection: {
    borderBottomWidth: 2,
    borderBottomColor: '#e5c68b',
    paddingLeft: '3%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSection: {
    width: '100%',
    height: '3%',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingVertical: '5%',

  },
  presentDogsSection: {
    width: '100%',
    top: 11,
    backgroundColor: 'ghostwhite',
    paddingTop: 10
  },
  bottomPadding: {
    width: width,
    height: 10
    
  },
  title: {
    fontSize: width * 0.05,
    color: '#333333',
    fontWeight: 'bold',
    

  },
  text: {
    fontSize: width * 0.04,
    color: '#333333',
  },
});

export default styles;
