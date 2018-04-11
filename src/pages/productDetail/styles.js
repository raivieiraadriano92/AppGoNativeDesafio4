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
    padding: 20,
  },

  image: {
    width: '100%',
    height: 285,
  },

  info: {
    width: '100%',
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },

  containerText: {
    flex: 1,
  },

  name: {
    color: colors.dark,
    fontWeight: 'bold',
    fontSize: 18,
  },

  brand: {
    color: colors.grey,
    fontSize: 12,
  },

  containerPrice: {
  },

  price: {
    color: colors.green,
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: metrics.basePadding,
  },

  button: {
    backgroundColor: colors.green,
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
