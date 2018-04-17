import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  categories: {
    backgroundColor: colors.pink,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonCategory: {
    height: 44,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonCategoryActive: {
    borderBottomWidth: 5,
    borderColor: colors.white,
  },

  buttonCategoryText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
