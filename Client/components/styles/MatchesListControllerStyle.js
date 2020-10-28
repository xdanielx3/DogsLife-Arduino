import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width,
    aspectRatio: 8 / 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: width * 0.04,
    color: 'darkgrey',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  button: {
    width: width / 3,
    justifyContent: 'center',
    backgroundColor: 'white'

  },
  beigeLine: {
    borderBottomWidth: 1,
    borderColor: '#e8cbba',
    position: 'absolute',
    bottom: '6%',
    marginLeft: '2%',
    marginRight: '2%',
  },
  brownLine: {
    width: '33%',
    borderBottomWidth: 2,
    borderColor: '#e5c68b',
    position: 'absolute',
    bottom: '6%',
  },
});

export default styles;
