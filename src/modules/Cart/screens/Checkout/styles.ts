import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0,0.7)',
    ...StyleSheet.absoluteFillObject,
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    resizeMode: 'cover',
    backgroundColor: 'grey',
    marginRight: 10,
    marginBottom: 10,
  },
  flex: {flex: 1},
});
