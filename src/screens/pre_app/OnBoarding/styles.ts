import {StyleSheet} from 'react-native';
import {COLORS} from '../../../values/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginatorConstainer: {flexDirection: 'row', height: 64, marginTop: 15},
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: COLORS.primary,
  },
  itemContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {flex: 1, justifyContent: 'center'},
  textContainer: {flex: 1},
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 8,
    marginTop: 10,
    color: COLORS.primary,
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});
