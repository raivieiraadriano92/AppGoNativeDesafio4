import { StyleSheet } from 'react-native';

import { colors, general, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    flex: 1,
    alignItems: 'center',
    marginVertical: 5,
    maxWidth: (metrics.screenWidth - 50) / 2,
  },

  image: {
    width: '100%',
    height: 180,
  },

  name: {
    color: colors.dark,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: metrics.baseMargin,
  },

  brand: {
    color: colors.grey,
    fontSize: 11,
  },

  price: {
    color: colors.green,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
