import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../../values/Color';
import i18n from 'i18n-js';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  iconContainer: {
    flex: 5,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonsContainers: {
    flex: 1,
    width: '100%',
  },
  image: {},
  loginBtn: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    padding: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupBtn: {
    backgroundColor: COLORS.white,
    color: COLORS.primary,
    padding: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  login_txt: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '500',
  },
  singup_txt: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: '500',
  },
  skipContainer: {
    position: 'absolute',
    right: i18n.locale.includes('ar')
      ? Dimensions.get('window').width * 0.85
      : 0,
    padding: 15,
    top: 0,
  },
});
