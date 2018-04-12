import { StyleSheet } from 'react-native';

import { colors, general, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection: 'row',
    padding: 20,
  },

  image: {
    width: 60,
    height: 100,
  },

  info: {
    flex: 1,
    marginHorizontal: metrics.baseMargin,
  },

  name: {
    color: colors.dark,
    fontWeight: 'bold',
    fontSize: 14,
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

  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: metrics.baseRadius,
    height: 30,
    width: 50,
    padding: 0,
    paddingHorizontal: 10,
    color: colors.grey,
    marginRight: metrics.baseMargin,
    fontSize: 11,
  },

  removeButton: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    color: colors.grey,
  },
});

export default styles;
