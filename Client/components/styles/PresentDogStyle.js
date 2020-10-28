import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '92%',
    height: height * 0.12,
    alignSelf: 'center',
    paddingLeft: '4%',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 5,
    elevation: 1,
    borderRadius: 10,
  },
  avatar: {
    borderRadius: width * 7.5,
    height: width * 0.15,
    width: width * 0.15,
    margin: width * 0.025,
  },
  content: {
    borderWidth: 1,
    width: width * 0.75,
    justifyContent: 'center',    
  },
  section: {
    alignItems: 'center', 
    flexDirection: 'row',
    width: width * 0.25,
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 0.03 * width,
    borderWidth: 1
  },
  description: {
    borderWidth: 1,

    color: 'darkgrey',
    fontSize: 0.04 * width,
  },
});

export default styles;
