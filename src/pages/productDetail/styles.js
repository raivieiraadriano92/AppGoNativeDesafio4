import { StyleSheet } from 'react-native';
import { colors, general, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundApp,
  },

  containerProduct: {
    ...general.box,
    alignItems: 'center',
    width: metrics.screenWidth - 40,
    margin: 20,
  },

  image: {
    width: '100%',
    height: 285,
  },

  name: {
    color: colors.dark,
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: metrics.baseMargin,
  },

  brand: {
    color: colors.grey,
    fontSize: 12,
  },

  price: {
    color: colors.green,
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default styles;
