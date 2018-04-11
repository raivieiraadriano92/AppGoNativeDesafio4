import { StyleSheet } from 'react-native';

import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundApp,
  },

  columnContainer: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },

  listHeaderFooter: {
    height: 15,
  },

  subtotal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 100,
  },

  subtotalTitle: {
    color: colors.grey,
    fontWeight: 'bold',
    fontSize: 14,
  },

  subtotalValue: {
    color: colors.green,
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default styles;
