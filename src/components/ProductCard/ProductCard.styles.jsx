import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    padding: 1,
    borderColor: 'grey',
    backgroundColor: '#fff0f0',
    margin: 6,
    borderWidth: 0.2,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {margin: 5, flex: 1, justifyContent: 'space-between'},
  title: {fontWeight: 'bold', fontSize: 15},
  price: {fontStyle: 'italic', alignSelf: 'flex-end'},
});
