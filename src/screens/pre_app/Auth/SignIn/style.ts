import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../../values/Color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  iconContainer: {
    flex: 1.5,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  contentContainers: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.white,
  },
  login_txt: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    fontSize: 20,
    color: COLORS.white,
  },
  forget_container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 15,
  },
  forget_me_text: {
    fontSize: Platform.OS === 'ios' ? 15 : 13,
    textAlign: 'center',
    color: COLORS.darkGrey,
  },
  click_here_txt: {
    fontSize: Platform.OS === 'ios' ? 15 : 13,
    color: COLORS.primary,
  },
});
