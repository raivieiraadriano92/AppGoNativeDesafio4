import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 54,
  },

  backButton: {
    height: 54,
    paddingHorizontal: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    color: colors.grey,
  },

  containerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.pink,
  },
});

export default styles;
