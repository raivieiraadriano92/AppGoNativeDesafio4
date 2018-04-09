import { StyleSheet } from 'react-native';

import { general, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    flex: 1,
    marginTop: metrics.baseMargin,
    alignItems: 'center',
    maxWidth: (metrics.screenWidth - 60) / 2,
  },

  image: {
    width: 50,
    height: 50,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: metrics.baseMargin,
  },

  brand: {

  },

  price: {

  },
});

export default styles;
